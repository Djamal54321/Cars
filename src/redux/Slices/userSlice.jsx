import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.email = actions.payload.email;
      state.password = actions.payload.password;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
