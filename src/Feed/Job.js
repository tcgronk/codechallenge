import React, { Component } from "react";
import "./Job.css";

export default class Job extends Component {
  render() {
    let jobs = [
      { company: "Apple", title: "Developer" },
      { company: "Github", title: "Sales Engineer" },
    ];
    return (
      <div >
        {jobs.map((job)=>(
                      <div className="Job">
                      <h3>{job.company}</h3>
                      <h4>{job.title}</h4>
                    </div>
        ))}

      </div>
    );
  }
}
