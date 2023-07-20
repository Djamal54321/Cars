import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  userName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const userSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.email = actions.payload.email;
      state.password = actions.payload.password;
    },
    register: (state, actions) => {
      state.email = actions.payload.email;
      state.password = actions.payload.password;
      state.repeatPassword = actions.payload.repeatPassword;
      state.firstName = actions.payload.firstName;
      state.username = actions.payload.username;
    },
  },
});

export const { login, register } = userSlice.actions;

export default userSlice.reducer;
