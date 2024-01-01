import { useState, useEffect } from 'react'

import currencies from '../../data/currencies';

const useCountryData = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        // const promise = Promise.resolve(countriesData());
        const promiseResult = async () => {
            // const data = await promise;
            const requestUrl = "https://crypto-currency-converter-backend.vercel.app/api/country/all";
            const response = await fetch(requestUrl);
            const data = await response.json();

            // Logic for getting only the accepted currencies ----> Very Good
            const newData = data.result.filter((country) => {
                return currencies.find((currency) => currency === country.label.toLowerCase()) ? country : undefined;
            })

            // Setting the countries which only have the acceptable currency for the Coin Gecko API
            setCountryData(newData);
        }

        promiseResult();

        return () => {
            console.log("Cleanup function from useCountry Hook");
        };
    }, []);

    return { countryData };
}


export default useCountryData