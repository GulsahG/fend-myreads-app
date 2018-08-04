import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
            
class SearchPage extends Component {
    state = {
        query: '',
        books: []
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
  
    clearQuery = () => {
        this.setState({ query: '', books: [] })
    }             
    searchBooks = (query) => {
        if(!query) {
            this.clearQuery(query)
        } else {
            this.updateQuery(query)
            BooksAPI.search(query, 20).then(books => {
                if(!books.error) {
                    books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                    this.setState({ books })
                } else {
                    console.log(books.error)
                }
            })
        }
    }
    render() {
      const { query, books } = this.state

      let showingBooks
      if(query) {
        const match = new RegExp(escapeRegExp(query), 'i')
        showingBooks = books.filter((book) => match.test(book.title))
      } else {
        showingBooks = books
      }
      showingBooks.sort(sortBy('name'))

      return (
        <div className="search-books">
        <div className="search-books-bar">
         <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" value={query} onChange={(event) => this.searchBooks(event.target.value)} placeholder="Search by title or author"/>
      
            </div>
        </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { showingBooks.map((book) => {
                        return (
                            <div>
                            <li key={book.id} className="book" shelf="None">
                                <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={ book && book.imageLinks && book.imageLinks.thumbnail && { backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                    width: 128, height: 193, }}
                                />
                                <div className="book-shelf-changer">
                                <select
                                    defaultValue="none"
                                    value={book.shelf}
                                    >
                                    <option value="move" disabled>
                                    Move to...
                                    </option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                                </div>
                                <div className='book-details'>
                                    <div className='book-title'><p>{book.title}</p></div>
                                    <div className='book-authors'><p>{book.authors}</p></div>
                                </div>
                            </li>
                            </div>
                        )
                    })
                    }
                </ol>
            </div>
        </div>
      )            
    }
}
            
export default SearchPage