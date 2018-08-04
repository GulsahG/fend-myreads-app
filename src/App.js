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
      BooksAPI.getAll().then((books) => {
      this.setState({ books })
      })
    }

    render() {
      return (
        <div className="app">
          <Route path="/search" render={() => (
            <SearchPage
            books={this.state.books}/> 
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf
            books={this.state.books}/>
          )}/>
         
        </div>
      )
    }
  }

export default BooksApp
