import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://dummyjson.com/products?limit=3');
    dispatch(getProducts(res.data.products));
  } catch (err) {
    console.log(err);
  }
};
