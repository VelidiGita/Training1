const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    question: String,
    options: [{ option: String, votes: Number }]
});

module.exports = mongoose.model('Poll', PollSchema);
