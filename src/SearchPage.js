import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
            
class SearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    // updates query as input changes
    updateQuery = (query) => {
        this.setState({ query: query })
    }
  
    // clears the query and books array
    clearQuery = () => {
        this.setState({ query: '', books: [] })
    }
    
    // search for books with the input on the search bar 
    searchBooks = (query) => {
        //if there's no input, no books are shown 
        if(!query) {
            this.clearQuery(query)
        } 
        // if there's, it filters the books accordingly with the input
        else {
            if(query.trim()) {
            this.updateQuery(query)
            BooksAPI.search(query, 20).then(books => {
                if(!books.error) {
                    books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                    this.setState({ books })
                } else {
                    console.log(books.error)
                    this.setState({ books: [] })
                }
            })
            }
        }   
    }
    render() {
      const { query, books } = this.state
      const { moveShelves } = this.props

      //it creates a showingBooks array from the filtered results
      let showingBooks
      if(query) {
        showingBooks = books
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
                    {   //it maps over the showingBooks to correctly
                        //higlight their shelf option in the select dropdown
                        //if they're already selected
                        showingBooks.map((showingBook) => {
                        let shelf
                        this.props.books.map((b) => b.id === showingBook.id ? shelf = b.shelf : '');
                        return (
                            <li key={showingBook.id} className="book" shelf="None">
                                <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={
                                       {backgroundImage: showingBook.imageLinks && `url(${showingBook.imageLinks.thumbnail})`,
                                        width: 128,
                                        height: 193
                                       }}
                                    />
                                <div className="book-shelf-changer">
                                <select
                                    onChange={(event) => moveShelves(showingBook, event.target.value)}
                                    defaultValue="none"
                                    value ={shelf}>
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
                                    <div className='book-title'><p>{showingBook.title}</p></div>
                                    <div className='book-authors'><p>{showingBook.authors ? showingBook.authors : ''}</p></div>
                                </div>
                            </li>
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