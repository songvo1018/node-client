import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import axios from 'axios'

import OrderList from './OrderList/index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Orders = () => {
  const classes = useStyles();

  const [ordersData, setOrdersData] = useState([]);

  React.useEffect(() =>{
    axios.get('http://194.67.93.144:5000/orders/')
    .then((response) => {
      setOrdersData(response.data)
    })
  }, [])
  
  return (
    <Paper>
      <div>Orders</div>
      <div>
        {
          !ordersData.count 
            ? 'loading' 
            : <OrderList ordersData={ordersData} />
          
        }
      </div>
    </Paper>
  )
}

export default Orders;