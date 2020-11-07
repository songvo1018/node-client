import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProductCard from '../ProductCard/ProductCard'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginRight: 80
  }
}));

const ProductList = ({productsData}) => {
  const classes = useStyles();
  const products = productsData.products;
  
  return (
    <List>
      {products.map(product => {
      return (
        <ProductCard product={product}>
          <ListItem key={product._id}>
            <ListItemText className={classes.listItem} >Name: {product.name}</ListItemText>
            <ListItemText>Price: {product.price}</ListItemText>
          </ListItem>
        </ProductCard>
      )
    })}
    </List>
  )
}

export default ProductList