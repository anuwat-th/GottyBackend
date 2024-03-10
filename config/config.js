const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

require('dotenv').config();

app.use(bodyParser.json());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gotty_user:cHtaLq19UtTC6Fzs@gotty.dpb5z8d.mongodb.net/?retryWrites=true&w=majority&appName=gotty', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};


module.exports = { app, connectDB, PORT };