import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


import SelectProducts from '../NewOrder/SelectProducts/SelectProducts'
// Props:
// 1. parent
// 2. urlPath
// 
// 



  // не могу заставить рендерить лишь один из двух
  // компонентов создания (продуктс | ордерс)


const NewItem = ( data ) => {

  let [parent, setParent ]= React.useState(data.parent);
  if (parent !== data.parent) {
    setParent('');
    setParent(data.parent);
  }

  React.useEffect(() => {
    console.log(data.parent);
  }, [parent])

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [productImages, setProductImages] = React.useState('');

  const [quantity, setQuantity] = React.useState('');
  const [productId, setProductId] = React.useState('');

  const [isCreated, setIsCreated] = React.useState(false)

  let formData = new FormData();

  React.useEffect(() => {
    formData.append('name', name)
    formData.append('price', price)
    formData.append('productImage', productImages)
  }, [name, price, productImages, isCreated ])

  const sendRequestProducts = () => {
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

  const sendRequestOrders = () => {
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
      setIsCreated(true)
    })
  }

  const productsFields = () => {
    return (
      <div>
        <input placeholder="Name" name="name" onChange={event => setName(event.target.value)}/>
        <input placeholder="Price" name="price" onChange={event => setPrice(event.target.value)}/>
        <input type="file" name="file" onChange={event => setProductImages( event.target.files[0])}/>
      </div>
    )
  }

  const ordersFields = () => {
    return (
      <div>
        <input placeholder="quantity" name="quantity" onChange={event => setQuantity(event.target.value)}/>
        <SelectProducts setProductId={setProductId} />
        <input type="submit" onClick={sendRequestOrders}/>
      </div>
    )
  }
  return (
    <div >
      <div><Link to={`/${parent}`}>all {parent}</Link></div>
      {parent = "products" ? productsFields()  : null }
      {parent = "orders" ? ordersFields()  : null }
      <input type="submit" onClick={parent == "orders" ? sendRequestOrders : sendRequestProducts}/>
      {isCreated? <span > CREATED</span> : null}  
    </div>
  );
}

export default NewItem;