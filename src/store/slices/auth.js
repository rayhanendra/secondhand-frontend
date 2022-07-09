/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistor } from 'store/store';
import { PURGE } from 'redux-persist';
import AuthService from '../../services/auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ data }, thunkAPI) => {
    try {
      const response = await AuthService.register(data);
      return { user: response.data.user };
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

export const login = createAsyncThunk(
  'auth/login',
  async ({ data }, thunkAPI) => {
    try {
      const response = await AuthService.login(data);
      return { user: response.data.user };
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

export const logout = createAsyncThunk('auth/logout', async () => {
  persistor.purge().then(() => {
    AuthService.logout();
  });
});

// Notes: On Going, Desired =>
// isLoggedIn: user ? true : false,

const initialState = {
  isLoggedIn: false,
  user: null,
  status: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [PURGE]: () => initialState,
    [register.pending]: (state) => {
      state.status = 'loading';
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.status = 'success';
    },
    [register.rejected]: (state) => {
      state.isLoggedIn = false;
      state.status = 'failed';
    },
    [login.pending]: (state) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.status = 'success';
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.status = 'failed';
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer, actions } = authSlice;
export const { changeUser } = actions;
export default reducer;
