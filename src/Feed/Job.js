import React, { Component } from "react";
import "./Job.css";
import ApiContext from "../ApiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash
);

export default class Job extends Component {
  constructor(props){
    super(props);
      this.state={
        showicon: false,
        handleShowDeleteWindow: false,
        deleteid:null
      }
  }
    static contextType = ApiContext;
    handleShowDelete=()=>{
      this.setState({showicon: true})
    }
    handleHideDelete=()=>{
      this.setState({showicon: false})
    }
    handleShowDeleteWindow=(id)=>{
      this.setState({handleShowDeleteWindow: true, deleteid: id})
    }
    handleCancelDelete=()=>{
      this.setState({handleShowDeleteWindow: false})
    }
    handleDeleteJob=()=>{
      this.context.handleDeleteJob(this.state.deleteid)
      this.setState({handleShowDeleteWindow: false})

    }
    render() {
    let jobs=this.context.jobs

    return (

      <div className="Jobcard" >
        {jobs.map((job) => (
            <div className="Job" onMouseOver={this.handleShowDelete} 
            onMouseLeave={this.handleHideDelete}
            style={{backgroundColor: job.color}}
            key={job.id}>
            <div key={job.id}>
            <h3>{job.company}</h3>
            <h4>{job.title}</h4>
            </div>
            <div className="JobDetails" key={job.id}>
            {this.state.showicon
            ?(<button key={job.id} className="Delete" onClick={()=>this.handleShowDeleteWindow(job.id)}><FontAwesomeIcon className="icon" icon={faTrash}/></button>)
              :(null)
            }
            </div>
          {this.state.handleShowDeleteWindow
          ?(<div className="addjob"><div className="DeleteWindow"><h1>Delete Job</h1><h3>Are you sure you want to delete this job?</h3><div key={job.id}> <button  className="SubmitButton" onClick={this.handleDeleteJob()}>Delete</button>{" "}<button className="CancelButton"onClick={this.handleCancelDelete}>Cancel</button></div></div></div>)
          :null}
          </div>
          
        ))}
        </div>

    );
  }
}
