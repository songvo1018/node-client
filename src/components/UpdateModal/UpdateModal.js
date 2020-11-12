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
      minWidth: 30,
      minHeight: 40,
    }
  }),
);

const UpdateModal = (data) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  // const [productImages, setProductImages] = React.useState('');
  const [isUpdated, setIsUpdated] = React.useState(false)
  const requestData = [];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    data.setUpdate(true)
  };
  
  React.useEffect(()=>{
      if (name) {
        requestData.push({"propName" : "name", "value" : name})
      }
      if (price) {
        requestData.push({"propName" : "price", "value" : price})
      }
      // if (productImages) {
      //   requestData.push({"propName" : "productImages", "value" : productImages})
      // }
  }, [name, price])

  
  const sendRequest = () => {
    const productId = data.product._id;

    const config = {
      method: 'patch',
      url: `http://194.67.93.144:5000/products/${productId}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(requestData)
    };
    
    axios(config)
    .then((response) => {
      setIsUpdated(true)
      })
    data.setUpdate(true)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Update product</h3>
      {isUpdated?<h4>Product updated</h4> : null}
      <div>
        <div>
          <input placeholder="Name" name="name" onChange={event => setName(event.target.value)}/>
          <input placeholder="Price" name="price" onChange={event => setPrice(event.target.value)}/>
          {/* <input type="file" name="file" onChange={event => setProductImages( event.target.files[0])}/> */}
        </div>
        <div>
          <button onClick={sendRequest} >Update</button>
          <button onClick={handleClose} >Cancel</button>
        </div>
      </div>
    </div>
  );

  return (
    <div >
      <button className={classes.item} onClick={handleOpen}>
        Upd
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

export default UpdateModal;