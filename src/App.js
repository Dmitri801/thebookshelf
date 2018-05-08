import React, { Component } from 'react';
import Home from './routes/Home';
import Search from './routes/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import * as BooksAPI from "./BooksAPI";

import './App.css';


class App extends Component {
  state = {
   currentlyReading: [],
   wantToRead: [],
   read: [],
   none: [],
   searchText: '',
   books: []
  
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const read = books.reduce((val, book) => {
        if (book.shelf === 'read') {
          val.push(book)
        }
        return val;
      }, []);
      const currentlyReading = books.reduce((val, book) => {
        if (book.shelf === 'currentlyReading') {
          val.push(book)
        }
        return val;
      }, []);
      const wantToRead = books.reduce((val, book) => {
        if (book.shelf === 'wantToRead') {
          val.push(book)
        }
        return val;
      }, [])
      this.setState({
        read,
        currentlyReading,
        wantToRead
      })

    });
  }

  updateBookState = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(updatedBook => {
        BooksAPI.getAll().then(books => {
          const read = books.reduce((val, book) => {
            if (book.shelf === 'read') {
              val.push(book)
            }
            return val;
          }, []);
          const currentlyReading = books.reduce((val, book) => {
            if (book.shelf === 'currentlyReading') {
              val.push(book)
            }
            return val;
          }, []);
          const wantToRead = books.reduce((val, book) => {
            if (book.shelf === 'wantToRead') {
              val.push(book)
            }
            return val;
          }, [])
          this.setState({
            read,
            currentlyReading,
            wantToRead
          })

        });

      })
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
          .then(books => {
            const currentlyReadingId = this.state.currentlyReading.map(i => i.id);
            const filterCurrentlyReading = books.filter(book => (
              book.id === currentlyReadingId.map(i => i)
            ))
            console.log(filterCurrentlyReading)
            this.setState({ books })
          })
          .catch(err => console.log(err))
      }
    })
  }



  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Header />
            <Route exact path="/" render={() => (
              <Home currentlyReading={this.state.currentlyReading}
                    wantToRead={this.state.wantToRead}
                    read={this.state.read}
                    updateBookState={this.updateBookState}
                     />
            )} />
            <Route exact path="/search" render={() => (
              <Search 
                searchText={this.state.searchText}
                books={this.state.books}
                onTextChange={this.onTextChange}
               />
            )} />
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
