import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'


class BookShelf extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired
    }
    
    render() {
        const shelves = {
          currentlyReading: ['Currently Reading', 'currentlyReading'],
          wantToRead: ['Want to Read', 'wantToRead'],
          read: ['Read', 'read']
        } 
        const { books, moveShelves } = this.props

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                { Object.keys(shelves).map((shelf) =>
                  <Book key={shelf}
                    title={shelves[shelf][0]}
                    shelf={shelves[shelf][1]}
                    books={ books.filter(book => book.shelf === shelves[shelf][1]) }
                    moveShelves={moveShelves}
                  />
                )}
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

export default BookShelf