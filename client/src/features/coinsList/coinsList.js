import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCoinsList: [],
  coinsList: [],
  searchValue: "",
};
const coinsListSlice = createSlice({
  name: "coinsList",
  initialState,
  reducers: {
    setFavoriteCoinsList: (state, action) => {
      console.log(action.payload);
      state.favoriteCoinsList = action.payload;
    },
    setCoinsList: (state, action) => {
      state.coinsList = action.payload.coinsList;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload.searchValue;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { setFavoriteCoinsList, setCoinsList, setSearchValue } =
  coinsListSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default coinsListSlice.reducer;
