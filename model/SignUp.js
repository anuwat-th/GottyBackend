const connectToMongoDB = require('../config/config');

async function getSignUpWithEmailSessionCollection() {
    const db = await connectToMongoDB();
    return db.collection('SignUpWithEmailSession');
}

module.exports = {
    getSignUpWithEmailSessionCollection,
};
