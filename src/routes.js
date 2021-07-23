const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.send('<h1>Hello World</h1>')
})

routes.get('/users', (req, res) => {
    return res.json({'Hello': 'World'})
})

routes.get('/users2', (req, res) => {
    return res.json({'HelloTwo': 'WorldTwo'})
})
module.exports = routes