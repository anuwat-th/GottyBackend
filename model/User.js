const mongoose = require('mongoose');

const Schema = mongoose.Schema;

async function getUserCollection() {
    const db = await connectToMongoDB();
    return db.collection('User');
}

const UserSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    authType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
