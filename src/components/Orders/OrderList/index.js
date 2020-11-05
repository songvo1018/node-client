import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const OrderList = ({ordersData}) => {
  const classes = useStyles();
  const orders = ordersData.orders;

  return (
    <List component="nav">
      {
        orders.map((order) => {
          return (
            <ListItem key={order._id}>
              <ListItemLink href="#simple-list">
                <ListItemText>{order.product.name}</ListItemText>
                <ListItemText>{order._id.slice(6,11)}</ListItemText>
              </ListItemLink>
            </ListItem>
          )
        })
      }
    </List>
    
  )
}

export default OrderList;