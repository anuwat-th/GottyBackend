require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;


app.use(bodyParser.json());

async function connectToMongoDB() {
    if (null) {
        return null;
    }

    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db(MONGODB_DB_NAME);
        return database;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw new Error('Failed to connect to MongoDB');
    }
}

module.exports = { app, connectToMongoDB, PORT };