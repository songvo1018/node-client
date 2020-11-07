import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  }
}));

const SelectProducts = ({setProductId}) => {

  const classes = useStyles();
  const [productsData, setProductsData] = React.useState([]);
  const [productsDataCount, setProductsDataCount] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState('');

  const handleChange = (event) => {
    setProductId(event.target.value);
    let selectedOption = productsData.filter(product =>product._id == event.target.value)[0];
    setSelectedProduct(`${selectedOption.name}, ${selectedOption.price}`)
  };

  React.useEffect(() => {
    axios.get('http://194.67.93.144:5000/products/')
    .then((response) => {
      setProductsDataCount(response.data.count)
      setProductsData(response.data.products);
    })
  }, [])

  return (
    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{selectedProduct === '' ? 'Product': selectedProduct}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={''}
          onChange={handleChange}
          // label="Product"
        >
          {
            productsData.map((product) => {
              return (
              <MenuItem value={product._id} key={product._id}>{product.name}, {product.price}</MenuItem>
            )})
          }
        </Select>
      </FormControl>
  )
}

export default SelectProducts;