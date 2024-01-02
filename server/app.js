const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const cryptoRoute = require('./routes/cryptoRoute');

app.use('/api/', cryptoRoute);


app.get('/', (req, res) => {
    res.send('Server is Running! 🚀');
});


// error middleware
app.use(errorMiddleware);
module.exports = app;