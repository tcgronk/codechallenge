import React, { Component } from "react";
import ApiContext from "../../ApiContext";
import Job from "../Job/Job";
import "./List.css";

export default class List extends Component {
  static contextType = ApiContext;

  render() {
    let jobs = this.context.jobs;
    let length = jobs.length;

    return (
      <>
        {length > 0 ? (
          <div className="List">
            <Job />
          </div>
        ) : null}
      </>
    );
  }
}
