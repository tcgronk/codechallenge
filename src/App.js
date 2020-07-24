import React from "react";
import Feed from "./Feed/Feed"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Wishlist</h1>
        <h2>Saved Jobs: </h2>
      </header>
      <Feed/>
    </div>
  );
}

export default App;
