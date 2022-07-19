/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistor } from 'store/store';
import { PURGE } from 'redux-persist';
import ProductService from '../../services/product.service';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async ({ data }, thunkAPI) => {
    try {
      const response = await ProductService.addProduct(data);
      return { product: response.data.data.product };
    } catch (error) {
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ data }, thunkAPI) => {
    try {
      const response = await ProductService.updateProduct(data);
      return { product: response.data.data.product };
    } catch (error) {
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async () => {
    persistor.purge().then(() => {
      ProductService.deleteProduct();
    });
  }
);

const initialState = {
  product: {},
  status: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [PURGE]: () => initialState,
    [addProduct.pending]: (state) => {
      state.status = 'loading';
    },
    [addProduct.fulfilled]: (state, action) => {
      state.product.push(action.payload.product);
      state.status = 'success';
    },
    [addProduct.rejected]: (state) => {
      state.status = 'failed';
    },
    [updateProduct.pending]: (state) => {
      state.status = 'loading';
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.product = action.payload.product;
      state.status = 'success';
    },
    [updateProduct.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});
const { reducer } = productSlice;
export default reducer;
