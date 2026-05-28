import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
     
      state.list.push(action.payload);
    },
    removeFavorite: (state, action) => {
     
      state.list = state.list.filter(movie => movie.id !== action.payload);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;