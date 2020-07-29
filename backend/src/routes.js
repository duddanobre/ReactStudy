const express = require('express');

const ongconntroller = require('./controllers/OngController');
const incidentscontroller = require('./controllers/incidentController');
const profillecontroller = require('./controllers/ProfileController');
const sessioncontroller = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongconntroller.index);
routes.post('/ongs', ongconntroller.create);

routes.get('/incidents', incidentscontroller.index);
routes.post('/incidents', incidentscontroller.create );
routes.delete('/incidents/:id', incidentscontroller.delete);

routes.get('/profile', profillecontroller.index);

module.exports = routes;


