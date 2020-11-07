import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SelectProducts from './SelectProducts/SelectProducts'

const NewProduct = () => {
  const [quantity, setQuantity] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [isCreated, setIsCreated] = React.useState(false);
  const sendRequest = () => {
      axios({
        method: 'POST',
        url: 'http://194.67.93.144:5000/orders', 
        // url: 'http://localhost:5000/orders', 
        data: {
          productId: productId,
          quantity: quantity
        }
      })
      .then((response) => {
        console.log(response);
        setIsCreated(true)
      })
  }

  return (
    <div >
      <div><Link to="/orders">all products</Link></div>
      <input placeholder="quantity" name="quantity" onChange={event => setQuantity(event.target.value)}/>
      <SelectProducts setProductId={setProductId} />
      <input type="submit" onClick={sendRequest}/>
      {isCreated? <span > CREATED</span> : null}
    </div>
  );
}

export default NewProduct;