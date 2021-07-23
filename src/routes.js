const routes = require('express').Router();
const bd = require('./banco de dados/firebase.js');

routes.get('/', (req, res) => {
    return res.send('<h1>Hello World</h1>')
})

routes.get('/users', (req, res) => {
    bd.get().then((data) => {
        res.json(data);
    })
})

routes.get('/users2', (req, res) => {
    return res.json({'HelloTwo': 'WorldTwo'})
})
module.exports = routes