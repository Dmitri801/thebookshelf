import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { blue900, yellow500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
class SearchBar extends Component {
 
  render() {
    return <div>
        <div>
          <div className="row">
            <div className="col m10 s8 offset-m1 offset-s2">
            <div className="card search-card z-index-4">
              <TextField floatingLabelText="Search" floatingLabelStyle={{
                 fontSize: "20px", color: yellow500
              }} underlineFocusStyle={{ borderColor: 'black' }} fullWidth={true}
                floatingLabelFocusStyle={{ color: yellow500 }}  inputStyle={{fontSize: '20px', color: blue900}}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
              />
              <span className="card-title">Search For A Book Or Author</span>
              <div className="card-content">
                <Link to="/" className="btn black yellow-text" style={{ display: 'block' }}>Home</Link>
              </div>  
            </div>
            
            </div>
          </div>
          <br />
          
        </div>
       
      </div>;
  }
}

export default SearchBar; 
