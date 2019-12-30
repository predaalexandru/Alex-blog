import React, { Component }  from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ArticleDetails from './components/articles/ArticleDetails'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        {/* only one route is loaded at a time */}
          <Switch>
            {/* Component i want to load */}
            <Route exact path='/'component={Dashboard} />
            {/* to load a particular component */}
            <Route path='/article/:id' component={ArticleDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App