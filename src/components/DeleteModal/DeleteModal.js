import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios'

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
      minWidth: 60,
      minHeight: 40,
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
  
  const Id = data.product._id;
  const sendRequest = () => {
    const config = {
      method: 'delete',
      url: `http://194.67.93.144:5000/products/${Id}`, 
      headers: {}
    }
    axios(config)
    // axios.delete(`http://localhost:5000/products/${productId}`, [, headers] )
    .then((response) => {
      if (response.status == 200) {
        handleClose();
        data.setUpdate(true)
      }
    })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Delete</h3>
      <div>
        <div>
          {data.children}
        </div>
        <div>
          <button onClick={sendRequest} >YES</button>
          <button onClick={handleClose} >NO</button>
        </div>
      </div>
    </div>
  );

  return (
    <div >
      <button className={classes.item} onClick={handleOpen}>
        Del
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