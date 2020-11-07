import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home'
import Orders from './components/Orders/index'
import Products from './components/Products/index'

import NewProduct from './components/NewProduct/NewProduct'
import NewOrder from './components/NewOrder/NewOrder'

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
              <Link to="/products">products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
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
