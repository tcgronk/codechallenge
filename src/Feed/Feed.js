import React, { Component } from "react";
import ApiContext from "../ApiContext"
import List from "./List";
import "./Feed.css";

export default class Feed extends Component {
constructor(props){
    super(props);
    this.state={
        show: false,
        formValid:true
    }
}
static contextType = ApiContext;

showAddJobWindow=()=> {
    this.setState({show:true})
}
validateEntry=e=>{
    e.preventDefault();
    const value = e.target.value.trim()
    const name = e.target.name

    if(value.length>0){
        this.validateForm();
    }
}
validateForm = () =>{
  this.setState({formValid:true})
}
handleSubmit(e) {
    e.preventDefault();

    const job = {
        id: this.context.jobs.length,
      company: e.target["company"].value,
      title: e.target["title"].value
    }
    this.context.handleAddNewJob(job)
    this.setState({show: false})

}
handleCancelAdd = () => {
    this.setState({show: false})
  };

  render() {
    return (
      <div className="Feed" >
        <button className="Button" onClick={this.showAddJobWindow}>Add a Job</button>
        {this.state.show
        ?(<div id="addjob">
            <form id='jobform' onSubmit={e => this.handleSubmit(e)}>
            <div className="form-section">
            <br/><br/>
              <label htmlFor="company">Company Name: </label>
              <br/>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
                value={this.company}
                onChange={e => this.validateEntry(e)}
                required
              /><br/><br/>
              <label htmlFor="title">Job Title: </label>
              <br/>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Job Title"
                value={this.title}
                onChange={e => this.validateEntry(e)}
                required
              />
            </div>
            <div className="Buttons">
              <button
                className="Button"
                type="submit"
                disabled={!this.state.formValid}
              >
                Submit
              </button>
              <button
                className="Button"
                type="reset"
                onClick={e => this.handleCancelAdd()}
              >
                Cancel
              </button>
            </div>
            </form>
            </div>
        
        )
        : (null)
        }
        <List />
      </div>
    );
  }
}
