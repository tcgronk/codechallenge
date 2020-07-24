import React, { Component } from "react";
import List from "./List";
import "./Feed.css";

export default class Feed extends Component {
constructor(props){
    super(props);
    this.state={
        show: false
    }
}
showAddJobWindow=()=> {
    this.setState({show:true})
}
  render() {
    return (
      <div className="Feed">
        <button onClick={this.showAddJobWindow}>Add a Job</button>
        {this.state.show
        ?(
            {/* // add form data here */}
        
        )
        : (null)
        }
        <List />
      </div>
    );
  }
}
