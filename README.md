# MyReads Project

# Table of Contents

1. [The Project](#the-project)
2. [Installation](#installation)
3. [Backend Server](#backend-server)
3. [Important](#important)
3. [Create React App](#create-react-app)
3. [Contributing](#contributing)

## The Project

* My Reads Project in the 7th project of the Udacity's Front-end Web Development Nanodegree course which I am a student of.
* With this project, you could have your own library with 3 different book shelves.
    * Currently Reading
    * Want to Read
    * Read
* You can enlarge your library with the numerous books you can find from the search page that can be opened with the search bar at the top. You can select the shelf you want to add your book to from the dropdown menu.

## Installation

* clone or download the project from [here](https://github.com/GulsahG/fend-myreads-app.git)
* install all project dependencies with `npm install` 
* start the server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
