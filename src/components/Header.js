import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { Link }  from 'react-router-dom';
import '../App.css';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }
  render() {
    return <div>
        <AppBar style={{ backgroundColor: "black", padding: "10px 10px" }} onLeftIconButtonClick={this.handleToggle}>
          <Drawer open={this.state.open} docked={false} onRequestChange={open => this.setState(
                { open }
        )} containerStyle={{ background: "url('https://thegothamarchives.com/wp-content/uploads/2017/08/War-Games-Book-2-Review.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Menu>
              <Link to="/">
                <MenuItem onClick={this.handleClose} style={{ color: "white" }}>
                  HOME{" "}
                </MenuItem>
              </Link>
              <Link to="/search">
                <MenuItem onClick={this.handleClose} style={{ color: "white" }}>
                  SEARCH{" "}
                </MenuItem>
              </Link>
            </Menu>
          </Drawer>
        </AppBar>
        <div className="main-header">
          <div className="primary-overlay">
            <h1 className="white-text center" id="headerTitle">
              {" "}
              myBookCave{" "}
            </h1>
          </div>
        </div>
      </div>;
   }
}


export default Header;