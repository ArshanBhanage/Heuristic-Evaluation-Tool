const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
//const { default: mongoose } = require('mongoose');
const app = express(); 

mongoose.set('strictQuery', true); //removing deprecating warning

dotenv.config({path: './config.env'});

//MongoDB
require('./db/conn');

app.use(express.json()); 

//link router files to make app.js less cluttered.
app.use(require('./router/auth'));

//const User = require('./model/userSchema');
const PORT = process.env.PORT;

//Middleware (checks if user is logged in or not, if not redirects to login page)

//app.listen(port, callback)
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});