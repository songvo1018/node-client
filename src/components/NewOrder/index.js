import React from 'react'
import axios from 'axios'
import ImageUploading from "react-images-uploading";

import './ImageUploading.css' 
import { useForm } from 'react-hook-form';

const NewOrder = () => {
  const { register, handleSubmit, errors } = useForm(); 
  const [images, setImages] = React.useState([]);
  const [productImages, setProductImages] = React.useState({});
  const maxNumber = 3;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setProductImages(imageList[0])
    debugger
    console.log(imageList[0].file);
    setImages(imageList);
  };

  const [data, setData] = React.useState({name: 'empty', price: 'empty'})


  React.useEffect(() => {
    console.log(productImages);
    if ((data.name !== 'empty')) {
      console.log(data.name);
      axios
        // .post('http://194.67.93.144:5000/products/', {
        .post('http://localhost:5000/products/', {
        name: data.name,
        price: data.price,
        productImage: productImages
        })
        .then((response) => console.log(response))
    }
    }, [data, productImages ])

  const onSubmit = (data) => {
    setData(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <input placeholder="Name" name="name" ref={register} />
      <input placeholder="Price" name="price" ref={register({ pattern: /\d+/ })} />
      {errors.price && 'Please enter number for price.'}
      <input type="submit" />
    </form>
  );
}

export default NewOrder;