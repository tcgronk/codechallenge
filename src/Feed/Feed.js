import React, { Component } from "react";
import ApiContext from "../ApiContext";
import List from "./List/List";
import "./Feed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      formValid: true,
      colors: ["#6baed7fc", "#f56e64fc", "#1bcb4d", "#6276ba"],
    };
  }
  static contextType = ApiContext;

  showAddJobWindow = () => {
    this.setState({ show: true });
  };
  validateEntry = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    if (value.length > 0) {
      this.validateForm();
    }
  };
  validateForm = () => {
    this.setState({ formValid: true });
  };
  handleSubmit(e) {
    e.preventDefault();

    const job = {
      id: this.context.jobs.length,
      company: e.target["company"].value,
      title: e.target["title"].value,
      color: this.state.colors[
        Math.floor(Math.random() * this.state.colors.length)
      ],
    };
    this.context.handleAddNewJob(job);
    this.setState({ show: false });
  }
  handleCancelAdd = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="Feed">
        <div className="Feed-Banner">
          <button className="Button" onClick={this.showAddJobWindow}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        {this.state.show ? (
          <div className="Job-Add">
            <form id="Job-Form" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-section">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company Name"
                  value={this.company}
                  onChange={(e) => this.validateEntry(e)}
                  required
                />
                <br />
                <br />
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Job Title"
                  value={this.title}
                  onChange={(e) => this.validateEntry(e)}
                  required
                />
              </div>
              <div className="Buttons">
                <button
                  className="Submit-Button"
                  type="submit"
                  disabled={!this.state.formValid}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        ) : null}
        <List />
      </div>
    );
  }
}
