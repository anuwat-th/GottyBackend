const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

require('dotenv').config();

app.use(bodyParser.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gotty_user:cHtaLq19UtTC6Fzs@gotty.dpb5z8d.mongodb.net/?retryWrites=true&w=majority&appName=gotty', {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};


module.exports = { app, connectDB, PORT };