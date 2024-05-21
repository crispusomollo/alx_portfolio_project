const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Midlleware for parsing JSON
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bookapi', { useNewUrlParser: true, useUnifiedTopology: true})

