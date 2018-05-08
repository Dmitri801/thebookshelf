import React, { Component } from 'react'
import BookResults from '../components/BookResults';
import { Link } from 'react-router-dom';
// import * as BooksAPI from "../BooksAPI";

class Home extends Component { 
  render() {
    const { currentlyReading } = this.props;
    const { wantToRead } = this.props;
    const { read } = this.props;
    const { updateBookState } = this.props;
    
    return (
      <div className="container">
      <div className="row homeRow">
          <div className="col m6">
            <h3 className="homeRow">Currently Reading</h3>
          </div>
          <div className="col m6">
            <Link to="/search" className="btn right black searchBtn yellow-text">Search For A Book</Link>
       </div>
      </div>
        <div className="divider yellow lighten-2"></div> 
        <BookResults books={ currentlyReading }
                     onUpdateClick={ updateBookState } />
        <div className="row homeRow">
          <div className="col m6">
            <h3 className="homeRow">Want To Read</h3>
          </div>
          <div className="col m6">
            <Link to="/search" className="btn right black searchBtn yellow-text">Search For A Book</Link>
          </div>
        </div>
        <div className="divider yellow lighten-2"></div> 
        <BookResults books={ wantToRead }
                     onUpdateClick={ updateBookState } />
        <div className="row homeRow">
          <div className="col m6">
            <h3 className="homeRow">Read</h3>
          </div>
          <div className="col m6">
            <Link to="/search" className="btn right black searchBtn yellow-text">Search For A Book</Link>
          </div>
        </div>
        <div className="divider yellow lighten-2"></div> 
        <BookResults books={ read }
                     onUpdateClick={ updateBookState } />
     </div>
    )
  }
}

export default Home;
