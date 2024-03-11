const { app, connectDB, PORT } = require('./config/config');

const GetLogoImage = require('./controller/GetLogoImage');
const SignUpWithEmailStep1 = require('./controller/SignUpWithEmailStep1');

const User = require('./model/User')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

connectDB();
const mockData = async (req, res) => {
    const userDate = new User({
        id: 'asdfghjklpoiuyt',
        handle: 'user1_handle',
        email: 'user1@example.com',
        authType: 'google_gmail',
        password: 'hashed_password_1',
        username: 'user1_username',
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-03')
    });
    try {

        await userDate.save();
        res.status(200).send('OTP sent successfully');
    } catch (error) {
        console.error('Error saving SignUpWithEmailSession:', error);
        res.sendStatus(500);
    }
}

app.get('/inputFake', mockData);
app.get('/gotty-logo', GetLogoImage);

app.get('/', (req, res) => {
    res.send('Hello World. The Server is running');
});

app.post('/sign-up-with-email-step-1', SignUpWithEmailStep1);


