require ('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect Database

require('./config/db.config');

const app = express();

// Middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas


// Exportar o app

module.exports = app;