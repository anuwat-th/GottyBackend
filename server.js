const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const HTTP_PORT = process.env.PORT || 8080;
app.listen(HTTP_PORT, () => {
    console.log(`Server is listening at port ${HTTP_PORT}`);
});