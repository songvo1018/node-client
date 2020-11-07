import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OrderCard from '../OrderCard/OrderCard'
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const OrderList = ({ordersData}) => {
  const orders = ordersData.orders;

  return (
    <List component="nav">
      <div>Total: {ordersData.count} </div>
      {
        orders.map((order) => {
          return (
            <OrderCard order={order}>
              <ListItem key={order._id}>
              <ListItemLink href="#simple-list">
                <ListItemText>Order ID:{order._id.slice(6,11)}</ListItemText>
                <ListItemText>Quantity: {order.quantity}</ListItemText>
              </ListItemLink>
            </ListItem>
            </OrderCard>
          )
        })
      }
    </List>
    
  )
}

export default OrderList;