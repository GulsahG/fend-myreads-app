import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
    state = {
      books: []
    }

    componentDidMount() {
      this.getBooks()
    }

    // gets all books data and updates the books array
    getBooks() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

    // moves the books to their correct shelves
    moveShelves = (book, shelf) => {
      BooksAPI.update(book, shelf)
      this.getBooks()
    }

    render() {
      return (
        <div className="app">
          <Route path="/search" render={() => (
            <SearchPage
            books={this.state.books}
            moveShelves={this.moveShelves}/> 
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf
            books={this.state.books}
            moveShelves={this.moveShelves}/>
          )}/>
        </div>
      )
    }
  }

export default BooksApp
