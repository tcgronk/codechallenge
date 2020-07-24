import React from 'react';
import List from './List'
import './Feed.css';

function Feed() {
  return (
    <div className="Feed">
        <button>Add a Job</button>
        <List/>
    </div>
  );
}

export default Feed;