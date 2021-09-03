require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Connect Database
require('./config/db.config');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const auth = require('./routes/auth.routes');

app.use('/', auth);

// Exportar o app
module.exports = app;
