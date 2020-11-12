import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OrderCard from '../OrderCard/OrderCard'
import Typography from '@material-ui/core/Typography';

import Delete from '../../DeleteModal/Delete'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  listItem: {
    marginRight: 80,
    justifyContent: 'center',
  }
}));

const OrderList = ({ordersData, setUpdate}) => {
  const classes = useStyles();
  const orders = ordersData.orders;

  return (
      <List>
        {
          orders.map((order) => {
            return (
              <ListItem className={classes.listItem} key={order._id}>
                <OrderCard order={order}>
                    <ListItemText>Order ID:{order._id.slice(6,11)}</ListItemText>
                    <ListItemText>Quantity: {order.quantity}</ListItemText>
                </OrderCard>
                <Delete setUpdate={setUpdate} order={order} path={'orders'} parent={'order'}>
                  <Typography>Order ID:{order._id.slice(6,11)}</Typography>
                  <Typography>Quantity: {order.quantity}</Typography>
                </Delete>
              </ListItem>
            )
          })
        }
      </List>
  )
}

export default OrderList;