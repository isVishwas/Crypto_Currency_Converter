const catchAsync = require('../middlewares/catchAsync');
const crypto_API = require('../utils/crypto_api');
const ErrorHandler = require('../utils/errorHandler');


exports.get_crypto = catchAsync(async (req, res, next) => {

    const {
        vs_currency,
        ids
    } = req.query;

    const result = await crypto_API(`coins/markets?vs_currency=${vs_currency}&ids=${ids}`);
    if (result) {
        res.status(200).json({
            success: true,
            result,
            message: "found successfully!"
        });
    } else {
        return next(new ErrorHandler("No Result found", 500));
    }
});

exports.get_crypto_coins = catchAsync(async (req, res, next) => {

    const
        {
            vs_currency,
            per_page,
            page
        } = req.query;

    const result = await crypto_API(`coins/markets?vs_currency=${vs_currency}&per_page=${per_page}&page=${page}`);

    if (result) {
        res.status(200).json({
            success: true,
            result,
            message: "found successfully!"
        });
    } else {
        return next(new ErrorHandler("No Result found", 500));
    }
});

exports.get_exchange_rates = catchAsync(async (req, res, next) => {

    const result = await crypto_API("exchange_rates");

    if (result) {
        res.status(200).json({
            success: true,
            result,
            message: "found successfully!"
        });
    } else {
        return next(new ErrorHandler("No Result found", 500));
    }
});

exports.get_all_country = catchAsync(async (req, res, next) => {

    const requestUrl = "https://restcountries.com/v3.1/all";
    const response = await fetch(requestUrl);
    const data = await response.json();
    const countryData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].currencies !== undefined) {
            const label = Object.keys(data[i].currencies)[0];
            const symbol = data[i].currencies[label].symbol;
            countryData.push({ name: data[i].name.common, flag: data[i].flags.svg, label, symbol })
        }
    }

    if (countryData.length) {
        res.status(200).json({
            success: true,
            result: countryData,
            message: "found successfully!"
        });
    } else {
        return next(new ErrorHandler("No Result found", 500));
    }
});


