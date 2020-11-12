import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

import NewItem from '../NewItem(nw)/NewItem'

const useStyles = makeStyles((theme) => ({
  inputPhoto: {
    padding: '15px 0',
    display: 'block',
    fontSize: 18,
    color: 'gray',
    minHeight: 40
  }, 
  typography: {
    margin: 20,
  },
  link: {
    color: '#000'
  }
}));

const NewProduct = () => {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [productImages, setProductImages] = React.useState('');
  const [isCreated, setIsCreated] = React.useState(false)

  let formData = new FormData();

  const isCreatedTimer = () => {
    setTimeout(() => {
      setIsCreated(false)
    }, 7000);
  }
  
  React.useEffect(() => {
    formData.append('name', name)
    formData.append('price', price)
    formData.append('productImage', productImages)
    }, [name, price, productImages, isCreated ])

    const sendRequest = () => {
      for(var pair of formData.entries()) {
     }
      axios
        .post('http://194.67.93.144:5000/products/', formData)
        // .post('http://localhost:5000/products/', formData)
        .then((response) => {
          setIsCreated(true)
          isCreatedTimer()
        })
    }

  return (
    <Card >
      <Typography className={classes.typography} variant="caption" display="block">
        <Link className={classes.link} to="/products">all products</Link>
      </Typography>
      <CardContent>

        <TextField id="name" label="Name" variant="filled"  onChange={event => setName(event.target.value)}/>
        <TextField id="price" label="Price" variant="filled"  onChange={event => setPrice(event.target.value)}/>
        <Typography className={classes.inputPhoto}>
          <label >
            <input type="file" name="file" onChange={event => setProductImages( event.target.files[0])}/>
          </label>
        </Typography>
        {isCreated
          ? <Typography variant="caption" display="block" gutterBottom>
              product created
            </Typography>
          : null}
      </CardContent>
      <CardActions>
        <Button variant='outlined' onClick={sendRequest}>Create</Button>
      </CardActions>
    </Card>
  );
  
  
  // не могу заставить рендерить лишь один из двух
  // компонентов создания (продуктс | ордерс)
  // const parent = 'products'
  // const urlPath = 'products';
  // return (
  //   <NewItem urlPath={urlPath} parent={parent}/>
  // )
}

export default NewProduct;