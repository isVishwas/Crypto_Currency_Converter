import { useEffect, useState } from "react";

const useCoinGeckoExchangeRates = (from, to, amount) => {

    const [convertedAmount, setConvertedAmount] = useState("");

    // As all the labels for the currency are mentioned in LowerCase, so converting in lower case only
    const fromCurrency = from.toLowerCase();
    const toCurrency = to.toLowerCase();

    // For checking whether we are getting the currencies and amount in correct format or not
    // console.log(fromCurrency, toCurrency, amount);

    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        // const promise = Promise.resolve(cryptoData("exchange_rates"));


        // Getting the data from the promise, using await
        const promiseResult = async () => {

            const requestUrl = `https://crypto-currency-converter-backend.vercel.app/api/exchange_rates`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            

            // Converting the objects into array of 
            const obj = Object.entries(data.result.rates);
            // console.log(obj);

            let currencyData = [];

            for (const currency of obj) {
                let obj = {}
                obj[currency[0]] = currency[1];
                currencyData.push(obj);
            }

            // Only for checking whehther we are getting data in correct format or not ------> Correct Format
            // console.log(currencyData);

            // Was getting undefined when using .[dot] because, it uses that variable (instead of variable's value)
            const fromData = currencyData.find((currency) => currency[fromCurrency] !== undefined)
            // Stores the currency object with differnet properties
            const fromDataCurrency = fromData[fromCurrency];
            // console.log(fromDataCurrency);

            // When using the [] operation then we get the variable's value instead of the variable, so using [] instead of .[dot]
            const toData = currencyData.find((currency) => currency[toCurrency] !== undefined)
            // Stores the currency object with currency as key
            const toDataCurrency = toData[toCurrency];
            // console.log(toDataCurrency);

            // Currency Convertor Working Fine -----> Basic Unitary Method
            const newAmount = (amount * toDataCurrency.value) / fromDataCurrency.value;
            // console.log(`${toDataCurrency.unit} ${newAmount}`);

            // Setting the state with the converted amount
            setConvertedAmount(newAmount);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from use Coin Gecko Exchange Rates");
        };
    }, [fromCurrency, toCurrency, amount]);


    return (convertedAmount);
}


export default useCoinGeckoExchangeRates;