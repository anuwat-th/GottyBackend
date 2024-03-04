const { app, PORT } = require('./config/config');

const User = require('./model/User');
const sendEmail = require('./controller/SendEmail');

app.get('/', (req, res) => {
    // res.send('Hello World');\
    res.send({ title: 'User' });
});

app.get('/send-email', async (req, res) => {
    const to = 'anuwat.one@iclud.com';
    const subject = 'test email sender';
    const text = 'Hello World'
    // const { to, subject, text } = req.body;
    try {
        const response = await sendEmail(to, subject, text);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})