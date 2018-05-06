import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return <div>
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l12 s12">
                <h5 className="white-text center-align">DMI Web Dezign</h5>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <span className="yellow-text">© 2018 Udacity BookShelf</span>
            <Link className="yellow-text right footerLinks" to="/search">
                Search
              </Link>
            <Link className="yellow-text right footerLinks" to="/">
              Home
              </Link>
            </div>
          </div>
        </footer>
      </div>;
  }
}

