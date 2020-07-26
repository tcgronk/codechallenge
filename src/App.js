import React, { Component } from "react";
import Feed from "./Feed/Feed";
import ApiContext from "./ApiContext";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        { id: 0, company: "Apple", title: "Developer", color: "#6baed7fc" },
        {
          id: 1,
          company: "Github",
          title: "Sales Engineer",
          color: "#f56e64fc",
        },
      ],
    };
  }
  handleAddNewJob = (job) => {
    this.setState({ jobs: [job, ...this.state.jobs] });
  };
  handleDeleteJob = (id) => {
    this.setState({ jobs: this.state.jobs.filter((job) => job.id !== id) });
  };

  render() {
    return (
      <ApiContext.Provider
        value={{
          jobs: this.state.jobs,
          handleAddNewJob: this.handleAddNewJob,
          handleDeleteJob: this.handleDeleteJob,
        }}
      >
        <div className="App">
          <header className="App-header">
            <h1>Wishlist</h1>
            <h2>{this.state.jobs.length} Jobs </h2>
          </header>
          <Feed />
        </div>
      </ApiContext.Provider>
    );
  }
}
