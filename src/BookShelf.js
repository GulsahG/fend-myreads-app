import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'


class BookShelf extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired
    }
    render() {
        const { books, moveShelves } = this.props
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
      
              <div className="list-books-content">
                  <Book
                  key="currently"
                  books={books.filter(book => book.shelf === "currentlyReading")}
                  shelf="Currently Reading"
                  moveShelves={moveShelves}
                  />
                  <Book
                    key="wantToRead"
                    books={books.filter(book => book.shelf === "wantToRead")}
                    shelf="Want to Read"
                    moveShelves={moveShelves}
                  />
                  <Book
                    key="read"
                    books={books.filter(book => book.shelf === "read")}
                    shelf="Read"
                    moveShelves={moveShelves}
                  />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

export default BookShelf