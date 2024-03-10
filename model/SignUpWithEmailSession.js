const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SignUpWithEmailSessionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    otpCode:{
        type: String,
        required: true,
    },
    startOtpReq: {
        type: Date,
    },
    isOtpPass: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
    },
    handle: {
        type: String,
    },
    name: {
        type: String,
    },
    isEndSession: {
        type: Boolean,
        required: true
    },
    endSesstionAt:{
        type: Date,
    }
});

module.exports = mongoose.model('SignUpWithEmailSession', SignUpWithEmailSessionSchema);
