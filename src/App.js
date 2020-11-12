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

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  link: {
    color: '#000'
  }
}));


const App = () => {
  const classes = useStyles();

  return (
    <div className="app">
      <Router>
      <div>
        <nav>
          <div>
            <Link className={classes.link} to="/">home</Link>
          </div>
          <div>
            <Link className={classes.link} to="/orders">orders</Link>
          </div>
          <div>
            <Link className={classes.link} to="/products">products</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/products">
            <Products />
          </Route>

          {/* не могу заставить рендерить лишь один из двух
          компонентов создания (продуктс | ордерс)
          <Route path="/newProduct" render={props => (
            <NewItem props={props} urlPath={'products'} parent={'products'}/>
          )}/>
          <Route path="/newOrder" render={props => (
            <NewItem props={props} urlPath={'orders'} parent={'orders'}/>
          )}/> */}
          
          <Route path="/newOrder">
            <NewOrder />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
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
