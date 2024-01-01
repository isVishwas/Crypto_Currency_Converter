import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  label: "USD",
  symbol: "$",
  currency: "$ (USD)",
};

export const currencyChangerSlice = createSlice({
  name: "currencyChanger",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = `${action.payload.symbol} (${action.payload.label})`;
      state.symbol = `${action.payload.symbol}`;
      state.label = `${action.payload.label}`;
    },
  },
});

export const { setCurrency } = currencyChangerSlice.actions;

export default currencyChangerSlice.reducer;
