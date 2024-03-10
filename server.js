const { app, connectDB, PORT } = require('./config/config');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World. The Server is running');
});

app.post('/sign-up-with-email-step-1', SignUpWithEmailStep1);

