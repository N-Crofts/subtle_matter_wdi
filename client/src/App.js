import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StoryPage from './components/StoryPage'
import SubtlePages from './components/Carousel'
import BookSearch from './components/BookSearch'
import GuestBook from './components/GuestBook'


export default class App extends Component {
  render() {

    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={StoryPage} />
          <Route exact path='/subtlematter' component={SubtlePages} />
          <Route exact path='/books' component={BookSearch} />
          <Route exact path='/guestbook' component={GuestBook} />
        </Switch>
        </div>
      </Router>
    )
  }
}
