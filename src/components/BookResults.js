import React, { Component } from 'react';
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from 'material-ui/IconButton';
import ArrowDropdown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { blue900, yellow500 } from "material-ui/styles/colors";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

class BookResults extends Component {
  render() {
    let bookContent;
    const { books } = this.props;
    if(books) {
      console.log(books)
      bookContent = (
        <GridList cols={3}>
          {books.map((book) => (
            <GridTile
            title={book.title}
            subtitle={<span>By: {book.authors}</span>}
            style={{border: '3px solid black', boxShadow: `0px 2px 2px ${yellow500}`}}
            key={book.id}
            actionIcon={<IconMenu iconButtonElement={
            <IconButton  className="icon" ><ArrowDropdown color="yellow" hoverColor={blue900}/></IconButton>}
            >
              <MenuItem disabled={true} primaryText="Move Book To.." />
              <MenuItem primaryText="Currently Reading" />
              <MenuItem primaryText="Want To Read" />
              <MenuItem primaryText="Read" />
            </IconMenu>} >
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
      <br />
      </div>
    )
  
 }
} 

export default BookResults; 
