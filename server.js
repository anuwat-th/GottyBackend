const { app, PORT } = require('./config/config');

const SignUpWithEmailStep1 = require('./controller/SignUpWithEmailStep1');

app.get('/', (req, res) => {
    res.send('Hello World. The Server is running');
});

app.post('/sign-up-with-email-step-1', SignUpWithEmailStep1);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})