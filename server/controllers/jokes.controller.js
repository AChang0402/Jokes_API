const { Jokes } = require('../models/jokes.model')

const handleCreateJoke = (req, res) => {
    console.log('controller: handleCreateJoke req.body:', req.body);
    Jokes.create(req.body)
        .then((joke) => {
            return res.json(joke);
        })
        .catch((error) => {
            return res.status(400).json({ ...error, message: error.message })
        });
};

const handleGetAllJokes = (req, res) => {
    Jokes.find()
        .then((jokes) => {
            return res.json(jokes)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleGetJokeById = (req, res) => {
    Jokes.findById(req.params.id)
        .then((joke) => {
            return res.json(joke)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleGetJokeRandom = (req, res) => {
    Jokes.aggregate([{ $sample: { size: 1 } }])
        .then ((joke) => {
            return res.json(joke)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleDeleteJokeById = (req, res) => {
    Jokes.findByIdAndDelete(req.params.id)
        .then((joke) => {
            return res.json(joke)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

const handleUpdateJokeById = (req, res) => {
    Jokes.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
        .then ((joke) => {
            return res.json(joke)
        })
        .catch((error) => {
            return res.status(400).json({...error, message: error.message})
        })
}

module.exports = {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleGetJokeRandom,
    handleDeleteJokeById,
    handleUpdateJokeById
}
