const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'Required field.'],
            minlength: [10, 'Minimum length is {MINLENGTH}.']
        },
        punchline: {
            type: String,
            required: [true, 'Required field.'],
            minlength: [3, 'Minimum length is {MINLENGTH}.']
        }
    },
    { timestamps: true }
);

const Jokes = mongoose.model('Jokes', JokesSchema)

module.exports = { Jokes: Jokes };