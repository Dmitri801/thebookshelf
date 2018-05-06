import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI';
import BookResults from './BookResults';
import { Link } from 'react-router-dom';
import { blue900, yellow500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
class SearchBar extends Component {
  state = {
    searchText: "",
    books: [],
    error: ''
  }
 
  onTextChange = (e) => {
    const val = e.target.value
    this.setState({[e.target.name]: e.target.value}, () => {
      if( val === '') {
        this.setState({
          books: []
        })
      } else {
          BooksAPI.search(val, 15)
            .then(books => this.setState({ books }))
            .catch(err => console.log(err)) 
      }
    })
  }
  render() {
    return <div>
        <div className="container">
          <div className="row">
            <div className="col m10 s8 offset-m1 offset-s2">
            <div className="card search-card z-index-4">
              <TextField floatingLabelText="Search" floatingLabelStyle={{
                 fontSize: "20px", color: yellow500
              }} underlineFocusStyle={{ borderColor: 'black' }} fullWidth={true}
                floatingLabelFocusStyle={{ color: yellow500 }}  inputStyle={{fontSize: '20px', color: blue900}}
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
              />
              <span className="card-title">Search For A Book Or Author</span>
              <div className="card-content">
                <Link to="/" className="btn black yellow-text" style={{ display: 'block' }}>Home</Link>
              </div>  
            </div>
            
            </div>
          </div>
          <br />
          {this.state.books.length > 0 ? (<BookResults books={this.state.books} />) : null}
        </div>
       
      </div>;
  }
}

export default SearchBar; 
