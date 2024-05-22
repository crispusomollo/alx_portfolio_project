const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a schema and model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Book = mongoose.model('Book', bookSchema);

// Define a route to insert sample data
app.get('/insert', async (req, res) => {
  try {
    const books = [
      { title: 'Book One', author: 'Author One', year: 2001 },
      { title: 'Book Two', author: 'Author Two', year: 2002 },
    ];
    const result = await Book.insertMany(books);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define a route to get all books
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

