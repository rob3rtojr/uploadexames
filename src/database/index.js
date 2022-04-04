const Sequelize = require('sequelize');
const dbCondig = require('../config/database');

const Teste = require('../models/Teste')

const connection = new Sequelize(dbCondig);

Teste.init(connection);

module.exports = connection;