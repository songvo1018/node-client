import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    img: {
      maxWidth: 200,
    },
    item: {
      minWidth: 550,
    }
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
    <div style={modalStyle} className={classes.paper}>
      <div>Order ID: {data.order._id.slice(6,11)}</div>
      <div>{data.order.product.name}</div>
      <div>{data.order.product.price}</div>
      <div>
        {
          data.order.product.productImage 
            // ? <img className={classes.img} src={`http://localhost:5000/${data.product.productImage}`} /> 
            ? <img className={classes.img} src={`http://194.67.93.144/${data.product.productImage}`} /> 
            : 'Here will be image...sorry'
        }
    </div>

    </div>
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