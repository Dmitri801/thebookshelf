import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';
import * as BooksAPI from "../BooksAPI";
import BookResults from '../components/BookResults';

class Search extends Component {
  state = {
    searchText: "",
    books: [],
    error: ''
  }

  onTextChange = (e) => {
    const val = e.target.value
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (val === '') {
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
    return <div className="container">
        <SearchBar name="searchText" value={this.state.searchText} onChange={this.onTextChange} />
        {this.state.books.length > 0 ? <BookResults books={this.state.books} /> : null}
      </div>;
  }
}

export default Search;
