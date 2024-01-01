import { configureStore } from "@reduxjs/toolkit";
import currencyChanger from "./features/currencyChanger/currencyChanger";
import coinsListHandler from "./features/coinsList/coinsList";

const store = configureStore({
  reducer: {
    currencyChanger,
    coinsListHandler
  },
});

export default store;
