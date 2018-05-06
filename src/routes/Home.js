import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
          <div className="col m6">
            <h3>Currently Reading</h3>
          </div>
          <div className="col m6">
            <Link to="/search" className="btn right black searchBtn yellow-text">Search For A Book</Link>
       </div>
      </div>
      <div className="divider"></div>
      
     </div>
    )
  }
}

export default Home;
