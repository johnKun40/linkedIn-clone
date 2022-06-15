import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   user: null,
//   status: 'idle',
// };


export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null,
  },
 
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },

});

export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.value;


export default userSlice.reducer;
