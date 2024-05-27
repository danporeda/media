import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

  return response.data;
  // if action returns empty payload, return user instead of response.data
});

export { removeUser };