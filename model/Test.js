const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TestSchema = new Schema({
    id: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Test', TestSchema);
