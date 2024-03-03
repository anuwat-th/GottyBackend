const { app, PORT } = require('./config/config');

const User = require('./model/User');

mongoose.set('strictQuery', false);

app.get('/', (req, res) => {
    // res.send('Hello World');\
    res.send({ title: 'User' });
});

// app.listen(PORT, () => {
//     console.log(`Server is listening at port ${PORT}`);
// });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})