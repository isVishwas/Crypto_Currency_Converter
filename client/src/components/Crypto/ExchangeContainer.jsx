import { Box } from "@mui/material";
import { useReducer } from "react";

import HeroExchangeFrom from "./ExchangeFrom";
import HeroExchangeTo from "./ExchangeTo";
import useCoinGeckoExchangeRates from "../../hooks/coinGecko/useCoinGeckoExchangeRates";

const initialState = {
  fromCurrency: "USD",
  toCurrency: "INR",
  fromAmount: 0,
  toAmount: 0,
};

const currencyConvertorReducer = (state, action) => {
  // Tells that there is a change in the FROM currency
  if (action.type === "FROMC") {
    return {
      fromCurrency: action.fromCurrency,
      toCurrency: state.toCurrency,
      fromAmount: state.fromAmount,
      toAmount: action.toAmount,
    };
  }

  // Tells that there is a change in the TO currency
  else if (action.type === "TOC") {
    return {
      fromCurrency: state.fromCurrency,
      toCurrency: action.toCurrency,
      fromAmount: state.fromAmount,
      toAmount: action.toAmount,
    };
  }

  // Tells that there is a change in the FROM currency amount
  else if (action.type === "FROMA") {
    return {
      fromCurrency: state.fromCurrency,
      toCurrency: state.toCurrency,
      fromAmount: action.fromAmount,
      toAmount: action.toAmount,
    };
  }
};

const ExchangeContainer = () => {
  // To manage the state of the FROM and TO currency
  const [state, dispatch] = useReducer(currencyConvertorReducer, initialState);

  // TO check the current state of the reducer store
  // console.log(state);

  // Custom Hook to convert the currency values ----> Currency convertor working successfully
  const convertedAmount = useCoinGeckoExchangeRates(
    state.fromCurrency,
    state.toCurrency,
    state.fromAmount
  );
  // console.log(convertedAmount);

  // To get the amount entered in the FROM input ||||| was not giving fromAmount in dispatch hence getting undefined
  const getFromAmount = (fromAmount) => {
    dispatch({ type: "FROMA", fromAmount, toAmount: convertedAmount });
  };

  // To get the currency selected in the FROM input ||||| Was not giving fromCurrency in dispatch hence getting undefined
  const getFromCurrency = (fromCurrency) => {
    dispatch({ type: "FROMC", fromCurrency, toAmount: convertedAmount });
  };

  // To get the currency selected in the TO input
  const getToCurrency = (toCurrency) => {
    dispatch({ type: "TOC", toCurrency, toAmount: convertedAmount });
  };

  return (
    <Box
      display="flex"
      width="90%"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      gap={{xs: "15px", sm: "30px"}}
    >
      <HeroExchangeFrom
        getFromAmount={getFromAmount}
        getFromCurrency={getFromCurrency}
      ></HeroExchangeFrom>
      <HeroExchangeTo
        getToCurrency={getToCurrency}
        convertedAmount={convertedAmount}
      ></HeroExchangeTo>
    </Box>
  );
};

export default ExchangeContainer;
