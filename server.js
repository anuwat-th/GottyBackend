const { app, connectToMongoDB, PORT } = require('./config/config');
const Test = require('./model/Test');

const SignUpWithEmailStep1 = require('./controller/SignUpWithEmailStep1');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

connectToMongoDB();

async function getCollection(collectionName) {
    const db = await connectToMongoDB();
    return db.collection(collectionName);
}

async function getAllData(req, res) {
    try {
        const collectionName = req.params.collection; // Extract collection name from URL parameters
        const collection = await getCollection(collectionName);

        // You can customize this part based on your needs
        let filter = {};
        if (req.query.field && req.query.value) {
            filter[req.query.field] = req.query.value;
        }

        const queryResult = await collection.find(filter).toArray();
        res.json(queryResult);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

app.get('/api/:collection', getAllData);

app.get('/', (req, res) => {
    res.send('Hello World. The Server is running');
});

app.post('/sign-up-with-email-step-1', SignUpWithEmailStep1);

