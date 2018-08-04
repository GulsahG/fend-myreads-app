import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
    state = {
        books: [],
        query: ''
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
      this.setState({ books })
      })
    }

  	searchBooks = (query) => {
      if (query) {
        this.setState({ query: query })
        BooksAPI.search(query).then(books => this.setState({ books: books }))
      } else {
        this.setState({ query: '', books:[] })
      }
  }

    render() {
      return (
        <div className="app">
          <Route path="/search" render={() => (
            <SearchPage query= {this.state.query}
            searchBooks={this.searchBooks}/> 
          )}/>
          <Route exact path="/" render={() => (
            <BookShelf searchBooks={this.searchBooks} 
            books={this.state.books}
            query={this.state.query}/>
          )}/>
         
        </div>
      )
    }
  }

export default BooksApp
