require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


const User = require('./model/User');

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    // res.send('Hello World');\
    res.send({title: 'User'});
});

// app.listen(PORT, () => {
//     console.log(`Server is listening at port ${PORT}`);
// });

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`);
    })
});