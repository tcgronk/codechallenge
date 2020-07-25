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
        handleShowDeleteWindow: false
      }
  }
    static contextType = ApiContext;
    handleShowDelete=()=>{
      this.setState({showicon: true})
    }
    handleHideDelete=()=>{
      this.setState({showicon: false})
    }
    handleShowDeleteWindow=()=>{
      this.setState({handleShowDeleteWindow: true})
    }
    handleCancelDelete=()=>{
      this.setState({handleShowDeleteWindow: false})
    }
    handleDeleteJob=(id)=>{
      this.context.handleDeleteJob(id)
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
            key={job.id} value={job.id}>
            <div>
            <h3>{job.company}</h3>
            <h4>{job.title}</h4>
            </div>
            <div className="JobDetails">
            {/* <h5>{job.time}</h5> */}

            {this.state.showicon
            ?(<button key={job.id} className="Delete" onClick={this.handleShowDeleteWindow}><FontAwesomeIcon className="icon" icon={faTrash}/></button>)
              :(null)
            }
            </div>
          {this.state.handleShowDeleteWindow
          ?(<div className="addjob"><div className="DeleteWindow"><p>Are you sure?</p><button onClick={()=>this.handleDeleteJob(job.id)}>Delete</button><button onClick={this.handleCancelDelete}>Cancel</button></div></div>)
          :null}
          </div>
          
        ))}
        </div>

    );
  }
}
