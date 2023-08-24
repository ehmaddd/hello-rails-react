import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { original } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/random_greeting';

const initialState = {
  greeting: [],
  isLoading: true,
};

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  }
  catch {

  }
})

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
  },
  extraReducers : {
    [getGreeting.pending]:(state) => {
      state.isLoading = true;
    },
    [getGreeting.fulfilled]:(state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    },
  }
});

export default greetingSlice.reducer;
