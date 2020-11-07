import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const NewProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [productImages, setProductImages] = React.useState('');
  const [isCreated, setIsCreated] = React.useState(false)

  let formData = new FormData();

  
  React.useEffect(() => {
    formData.append('name', name)
    formData.append('price', price)
    formData.append('productImage', productImages)
    }, [name, price, productImages, isCreated ])

    const sendRequest = () => {
      for(var pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]); 
     }
      axios
        .post('http://194.67.93.144:5000/products/', formData)
        // .post('http://localhost:5000/products/', formData)
        .then((response) => {
          setIsCreated(true)
        })
    }

  return (
    <div >
      <div><Link to="/products">all products</Link></div>
      <input placeholder="Name" name="name" onChange={event => setName(event.target.value)}/>
      <input placeholder="Price" name="price" onChange={event => setPrice(event.target.value)}/>
      <input type="file" name="file" onChange={event => setProductImages( event.target.files[0])}/>
      <input type="submit" onClick={sendRequest}/>
      {isCreated? <span > CREATED</span> : null}
    </div>
  );
}

export default NewProduct;