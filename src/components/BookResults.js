import React, { Component } from 'react';
import { GridList, GridTile } from "material-ui/GridList";

class BookResults extends Component {
  render() {
    let bookContent;
    const { books } = this.props;
    if(books) {
      console.log(books)
      bookContent = (
        <GridList cols={3}>
          {books.map((book, i) => (
            <GridTile
            title={book.title}
            style={{border: '3px solid black'}}
            key={i}
            >
          {book.imageLinks.thumbnail !== undefined ? <img src={book.imageLinks.thumbnail} alt="None" /> : 'No Image Found'} 
            </GridTile>
          ))}

        </GridList>
      )
    } else {
      bookContent = null;
    }
    return (
      <div>
      {bookContent}
      </div>
    )
  
 }
} 

export default BookResults; 
