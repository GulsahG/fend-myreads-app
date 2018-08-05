import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  
  render() {
    const {moveShelves, books, title} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className='books-grid'>
              {books.map((book) => (
              <li key={book.id} className='book'>
                  <div className='book-top'>
                    <div className='book-cover' 
                    style={
                      {backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`,
                       width: 128,
                       height: 193
                      }}/>
                    <div className="book-shelf-changer">
                        <select
                          onChange={(event) => moveShelves(book, event.target.value)}
                          defaultValue="none"
                          value={book.shelf}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                    </div>
                  </div>
                  <div className='book-details'>
                    <div className='book-title'>
                        <p>{book.title}</p>
                    </div>
                    <div className='book-authors'>
                        <p>{book.authors ? book.authors : ''}</p>
                    </div>
                  </div>
              </li>
              ))}
            </ol>
        </div>
      </div>
    )
  }
}

Book.PropTypes = {
  books: PropTypes.array.isRequired
}

export default Book