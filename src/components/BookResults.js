import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { onUpdateClick } = this.props;
    if(books) {
      
      bookContent = <GridList cols={3}>
          {books.map(book => (
            <GridTile
              title={book.title}
              subtitle={<span>By: {book.authors}</span>}
              style={{
                border: "3px solid black",
                boxShadow: `0px 2px 2px ${yellow500}`
              }}
              key={book.id}
              actionIcon={
                <IconMenu
                  iconButtonElement={
                    <IconButton className="icon">
                      <ArrowDropdown
                        color="yellow"
                        hoverColor={blue900}
                      />
                    </IconButton>
                  }
                >
                  <MenuItem
                    disabled={true}
                    primaryText="Move Book To.."
                  />
                  {window.location.href === 'http://localhost:3000/search' && book.shelf !== 'currentlyReading' ? <Link to="/">
                  <MenuItem
                    checked={book.shelf === "currentlyReading" && true}
                    primaryText="Currently Reading"
                    onClick={() =>
                      onUpdateClick(book, "currentlyReading") 
                    }
                    /> </Link> : <MenuItem
                      checked={book.shelf === "currentlyReading" && true}
                      primaryText="Currently Reading"
                      onClick={book.shelf !== 'currentlyReading' ? () =>
                        onUpdateClick(book, "currentlyReading") : null
                      }
                    />}
                  {window.location.href === 'http://localhost:3000/search' && book.shelf !=='wantToRead' ? <Link to="/">
                    <MenuItem
                      checked={book.shelf === "wantToRead" && true}
                      primaryText="Want To Read"
                      onClick={() =>
                        onUpdateClick(book, "wantToRead")
                      }
                    /> </Link> : <MenuItem
                      checked={book.shelf === "wantToRead" && true}
                      primaryText="Want To Read"
                      onClick={book.shelf !== 'wantToRead' ?() =>
                        onUpdateClick(book, "wantToRead") : null
                      }
                    />}
                  {window.location.href === 'http://localhost:3000/search' && book.shelf !== 'read' ? <Link to="/">
                    <MenuItem
                      checked={book.shelf === "read" && true}
                      primaryText="Read"
                      onClick={() =>
                        onUpdateClick(book, "read")
                      }
                    /> </Link> : <MenuItem
                      checked={book.shelf === "read" && true}
                      primaryText="Read"
                      onClick={book.shelf !== 'read' ? () =>
                        onUpdateClick(book, "read" ) : null
                      }
                    />}
                  {window.location.href === 'http://localhost:3000/search' && book.shelf !== 'none' ? <Link to="/">
                    <MenuItem
                      checked={book.shelf === "none" && true}
                      primaryText="None"
                      onClick={() =>
                        onUpdateClick(book, "none")
                      }
                    /> </Link> : <MenuItem
                      checked={book.shelf === "none" && true}
                      primaryText="None"
                       onClick={book.shelf !== 'none'? () =>
                        onUpdateClick(book, "none") : null
                      }
                    />}
                  
                  
                </IconMenu>
              }
            >
              {book.imageLinks !== undefined ? (
                <img src={book.imageLinks.thumbnail} alt="None" />
              ) : (
                "No Image Found... :)"
              )}
            </GridTile>
          ))}
        </GridList>;
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
