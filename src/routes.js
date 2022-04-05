const express = require('express');
const multer = require('multer');
const TesteController = require('./controllers/TesteController')
const multerConfig = require('./config/multer');

const routes = express.Router();

routes.get('/',(req, res)=> res.send('upload de exames doutorweb running! 05/04/2022'))
routes.get('/testes', TesteController.index)
routes.post('/testes', multer(multerConfig).single("file"), TesteController.store)
routes.delete('/testes/:id', TesteController.delete)

module.exports = routes;