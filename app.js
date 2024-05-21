const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Midlleware for parsing JSON
app.use(json())

connect('mongodb://localhost:27017/bookapi', { useNewUrlParser: true, useUnifiedTopology: true})

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number,
    notes: String,
    reviews: String
})


const Book = mongoose.model('Book', bookSchema)