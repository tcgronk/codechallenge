import React, { Component } from "react";
import "./Job.css";
import ApiContext from "../../ApiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showicon: false,
      ShowDeleteWindow: false,
      deleteid: null,
    };
  }
  static contextType = ApiContext;
  handleShowDelete = () => {
    this.setState({ showicon: true });
  };
  handleHideDelete = () => {
    this.setState({ showicon: false });
  };

  handleShowDeleteWindow = (id) => {
    this.setState({ ShowDeleteWindow: true, deleteid: id });
  };
  handleCancelDelete = () => {
    this.setState({ ShowDeleteWindow: false });
  };
  handleDeleteJob = () => {
    this.context.handleDeleteJob(this.state.deleteid);
    this.setState({ ShowDeleteWindow: false });
  };
  render() {
    let jobs = this.context.jobs;
    return (
      <div className="Job-Card">
        {jobs.map((job) => (
          <div
            className="Job"
            onMouseOver={this.handleShowDelete}
            onMouseLeave={this.handleHideDelete}
            style={{ backgroundColor: job.color }}
            key={job.id}
          >
            <div>
              <h3>{job.company}</h3>
              <h4>{job.title}</h4>
            </div>
            <div className="Job-Details">
              <button
                className="Delete"
                onClick={() => this.handleShowDeleteWindow(job.id)}
              >
                <FontAwesomeIcon className="icon" icon={faTrash} />
              </button>
            </div>
            {this.state.ShowDeleteWindow ? (
              <div className="Job-Add">
                <div className="Delete-Window">
                  <h1>Delete Job</h1>
                  <h3>Are you sure you want to delete this job?</h3>
                  <div>
                    {" "}
                    <button
                      className="Submit-Button"
                      onClick={this.handleDeleteJob}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="Cancel-Button"
                      onClick={this.handleCancelDelete}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
