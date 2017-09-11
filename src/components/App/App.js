import React, { Component } from 'react'
import './app.css'
import {
  HashRouter as Router,
  Route
 } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'


class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
