import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    img: {
      maxWidth: 200,
    },
    item: {
      minWidth: 260,
      minHeight: 40,
      backgroundColor: '#ffffff',
      display: 'flex'
      
    }
  }),
);

const ProductCard = (data) => {
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
    <Box style={modalStyle} className={classes.paper}>
      <Typography>Name: {data.product.name}</Typography>
      <Typography>Price: ${data.product.price}</Typography>
      <Typography>{data.product.productImage 
      ? <img className={classes.img} src={`http://194.67.93.144:5000/${data.product.productImage}`} /> 
        // ? <img className={classes.img} src={`http://localhost:5000/${data.product.productImage}`} /> 
      : 'Here will be image...sorry'
    }</Typography>

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

export default ProductCard