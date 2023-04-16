const {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleGetJokeRandom,
    handleDeleteJokeById,
    handleUpdateJokeById
}
= require('../controllers/jokes.controller')

module.exports = (app) => {
    app.post('/api/jokes', handleCreateJoke)
    app.get('/api/jokes', handleGetAllJokes)
    app.get('/api/jokes/random', handleGetJokeRandom)
    app.get('/api/jokes/:id', handleGetJokeById)
    app.delete('/api/jokes/:id', handleDeleteJokeById)
    app.put('/api/jokes/:id', handleUpdateJokeById)
}