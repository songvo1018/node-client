import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import OrderList from './OrderList/OrderList'

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


const Orders = () => {
  const classes = useStyles();
  
  let [update, setUpdate] = React.useState(false)

  const [ordersData, setOrdersData] = useState([]);

  React.useEffect(() =>{
    axios.get('http://194.67.93.144:5000/orders/')
    // axios.get('http://localhost:5000/orders/')
    .then((response) => {
      setOrdersData(response.data)
    })
  }, [update])
  
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.header}>
        <Typography>Orders </Typography>
        <Typography>Total: {ordersData.count} </Typography>
      </Typography>
      <Box className={classes.headerButtons}>
        <Button variant='outlined' onClick={() => setUpdate(false)}>Update</Button>
        <Button variant='outlined'><Link className={classes.link} to="/newOrder">new order</Link></Button>
      </Box>
      <Box className={classes.backgroundList}>
      {
        !ordersData.count 
          ? '...load...' 
          : <OrderList setUpdate={setUpdate} ordersData={ordersData} />
      }
      </Box>
  </Paper>
  )
}

export default Orders;