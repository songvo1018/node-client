import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProductCard from '../ProductCard/ProductCard'
import Typography from '@material-ui/core/Typography';


import Delete from '../../DeleteModal/Delete'
import UpdateModal from '../../UpdateModal/UpdateModal'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  listItem: {
    marginRight: 80,
    justifyContent: 'center',
  }
}));

const ProductList = ({productsData, setUpdate}) => {
  const classes = useStyles();
  const products = productsData.products;
  
  return (
    <List>
      {
        products.map(product => {
          return (
            <ListItem className={classes.listItem}   key={product._id}>
              <ProductCard product={product}>
                <ListItemText >Name: {product.name}</ListItemText>
                <ListItemText>Price: {product.price}</ListItemText>
              </ProductCard>
              <UpdateModal product={product} setUpdate={setUpdate} />
              <Delete parent={'product'} path={'products'} setUpdate={setUpdate} product={product}>
                <Typography >Name: {product.name}</Typography>
                <Typography>Price: {product.price}</Typography>
              </Delete>
            </ListItem>
          )
        })
      }
    </List>
  )
}

export default ProductList