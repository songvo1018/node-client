import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import ProductList from './ProductsList/ProductList'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 550,
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 0 10px'
  },
  headerButtons:{
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
  backgroundList: {
    backgroundColor: '#efefefb5',
  }
}));


const Products = () => {
  const classes = useStyles();
  let [productsData, setProductsData] = React.useState('');
  let [update, setUpdate] = React.useState(false)

  React.useEffect(() =>{
    axios.get('http://194.67.93.144:5000/products/')
    // axios.get('http://localhost:5000/products/')
    .then((response) => {
      setProductsData(response.data)
    })
    setUpdate(false)
  }, [update])

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.header}>
        <Typography>Products </Typography>
        <Typography>Total: {productsData.count}</Typography>
      </Typography>
      <Box className={classes.headerButtons}>
        <Button variant='outlined' onClick={() => setUpdate(true)}>Update</Button>
        <Button variant='outlined'><Link className={classes.link} to="/newProduct">new product</Link></Button>
      </Box>
      <Box className={classes.backgroundList}>
        {
          !productsData.count 
            ? '...load...'
            : <ProductList setUpdate={setUpdate} productsData={productsData}/>
        }
      </Box>
    </Paper>
  )
}

export default Products