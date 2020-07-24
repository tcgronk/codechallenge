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
    static contextType = ApiContext;
    render() {
    let jobs=this.context.jobs
    return (
      <div>
        {jobs.map((job) => (
          <div className="Job">
            <h3>{job.company}</h3>
            <h4>{job.title}</h4>
            <button onClick={()=>this.context.handleDeleteJob(job.id)}><FontAwesomeIcon className="icon" icon={faTrash}/></button>
          </div>
        ))}
      </div>
    );
  }
}
