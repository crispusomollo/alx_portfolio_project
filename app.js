const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('Server running on http://localhost:${port}')
});

//Midlleware for parsing JSON
app.use(json());

//connect('mongodb://localhost:27017/bookapi', { useNewUrlParser: true, useUnifiedTopology: true});
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'bookapi';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number,
    notes: String,
    reviews: String
});