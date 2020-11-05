import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/index'
import NewOrder from './components/NewOrder/index'
import Orders from './components/Orders/index'

const App = () => {


  return (
    <div className="app">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/orders">orders</Link>
            </li>
            <li>
              <Link to="/newOrder">new order</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/newOrder">
            <NewOrder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App;
