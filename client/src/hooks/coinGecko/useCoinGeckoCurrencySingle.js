import { useEffect, useState } from "react";

const useCoinGeckoCurrencySingle = (currency, id) => {
    const [coinData, setCoinData] = useState();
    // Checking whether the API is working correctly or not and it is working correctly
    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        // const promise = Promise.resolve(cryptoData(`coins/markets?vs_currency=${currency}&ids=${id}`));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            // const data = await promise;
            const requestUrl = `http://localhost:3001/api/coins?vs_currency=${currency}&ids=${id}`;
            const response = await fetch(requestUrl);
            const data = await response.json();
            // Printing the data for now, then we will use state to set the state 
            // console.log(data);
            setCoinData(data.result);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from useCoinGeckoCurrencySingle.js");
        };
    }, [currency, id]);

    return (
        coinData
    )
}


export default useCoinGeckoCurrencySingle;