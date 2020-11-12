import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    item: {
      minWidth: 260,
      minHeight: 40,
      backgroundColor: '#ffffff',
      display: 'flex'
    },
    link: {
      color: '#000',
      textDecoration: 'none',
    },
  }),
);

const OrderCard = (data) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box  style={modalStyle} className={classes.paper}>
      <Typography>Order ID: {data.order._id.slice(6,11)}</Typography>
      {data.order.product
      ? <Box>
          <Typography>{data.order.product.name}</Typography>
          <Typography>{data.order.product.price}</Typography>
          <Button variant='outlined'><Link className={classes.link} to="/products">products</Link></Button>
        </Box>
      : 'Sorry, no product found for this order.'}

    </Box>
  );

  return (
    <div >
      <button className={classes.item} onClick={handleOpen}>
        {data.children}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default OrderCard