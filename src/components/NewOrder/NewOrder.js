import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SelectProducts from './SelectProducts/SelectProducts'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




import { makeStyles } from '@material-ui/core/styles';

import NewItem from '../NewItem(nw)/NewItem'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: 16
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  }
}));

const NewProduct = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [isCreated, setIsCreated] = React.useState(false);
  const sendRequest = () => {
      axios({
        method: 'POST',
        url: 'http://194.67.93.144:5000/orders', 
        // url: 'http://localhost:5000/orders', 
        data: {
          productId: productId,
          quantity: quantity
        }
      })
      .then((response) => {
        setIsCreated(true)
        isCreatedTimer()
      })
  }

  const isCreatedTimer = () => {
    setTimeout(() => {
      setIsCreated(false)
    }, 7000);
  }

  return (
    <Card >
      
      <Typography className={classes.typography} variant="caption" display="block">
        <Button variant='outlined'><Link className={classes.link} to="/orders">all products</Link></Button>
      </Typography>
      <CardContent>
        <TextField id="quantity" label="quantity" variant="filled"  onChange={event => setQuantity(event.target.value)}/>
        <SelectProducts setProductId={setProductId} />
        {isCreated
          ? <Typography variant="caption" display="block" gutterBottom>
              order created
            </Typography>
          : null
        }
      </CardContent>
      <CardActions>
        <Button variant='outlined' onClick={sendRequest}>Create</Button>
      </CardActions>
      
    </Card >
  );

  // не могу заставить рендерить лишь один из двух
  // компонентов создания (продуктс | ордерс)
  // const parent = 'orders'
  // const urlPath = 'orders';
  // return (
  //   <NewItem urlPath={urlPath} parent={parent}/>
  // )
}

export default NewProduct;