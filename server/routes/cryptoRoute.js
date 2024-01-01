const express = require('express');
const {
    get_crypto,
    get_exchange_rates,
    get_all_country,
    get_crypto_coins
} = require('../controllers/cryptoController');
const router = express();


router.route("/coins")
.get(get_crypto_coins);

router.route("/coins/markets")
.get(get_crypto);

router.route("/exchange_rates")
.get(get_exchange_rates);

router.route("/country/all")
.get(get_all_country);

module.exports = router;