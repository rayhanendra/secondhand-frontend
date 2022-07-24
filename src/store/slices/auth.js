/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistor } from 'store/store';
import { PURGE } from 'redux-persist';
import AuthService from '../../services/auth.service';
import userService from 'services/user.service';

export const register = createAsyncThunk(
  'auth/register',
  async ({ data }, thunkAPI) => {
    try {
      const response = await AuthService.register(data);
      return { user: response.data.data.users };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ data }, thunkAPI) => {
    try {
      const response = await AuthService.login(data);
      return { user: response.data.data.users };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getUserById = createAsyncThunk(
  'auth/getUserById',
  async ({ id }, thunkAPI) => {
    try {
      const response = await userService.getUserById(id);
      return { profile: response.data.data.users };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await userService.updateUser(data, id);
      return { user: response.data.data.users };
    } catch (error) {
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
  profile: null,
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
    [updateUser.pending]: (state) => {
      state.status = 'loading';
    },
    [updateUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.status = 'success';
    },
    [updateUser.rejected]: (state) => {
      state.status = 'failed';
    },
    [getUserById.pending]: (state) => {
      state.status = 'loading';
    },
    [getUserById.fulfilled]: (state, action) => {
      state.profile = action.payload.profile;
      state.status = 'success';
    },
    [getUserById.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});
const { reducer, actions } = authSlice;
export default reducer;
