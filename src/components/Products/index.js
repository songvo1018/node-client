import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

import ProductList from './ProductsList/ProductList'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const Products = () => {
  let [productsData, setProductsData] = React.useState('');
  const classes = useStyles();

  React.useEffect(() =>{
    axios.get('http://194.67.93.144:5000/products/')
    // axios.get('http://localhost:5000/products/')
    .then((response) => {
      setProductsData(response.data)
    })
  }, [])

  return (
    <Paper>
      <div>Products total: {productsData.count}</div>
      <div><Link to="/newProduct">new product</Link></div>
      <div>
        {
          !productsData.count 
            ? '...load...'
            : <ProductList productsData={productsData}/>
        }
      </div>
    </Paper>
  )
}

export default Products