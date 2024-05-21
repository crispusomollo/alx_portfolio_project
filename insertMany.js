const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: Number,
  notes: String,
  reviews: String,
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Function to insert multiple books
const insertBooks = async () => {
  const books = [
    {
      title: 'Surrounded by Idiots',
      author: 'Thomas Erikson',
      publishedYear: 2014,
      notes: 'A classic novel about the American dream.',
      reviews: 'Excellent read, very engaging.',
    },
    {
      title: 'The 5am Club',
      author: 'Robin Sharma',
      publishedYear: 2018,
      notes: 'Own your morning, elevate your life.',
      reviews: 'Thought-provoking and chilling.',
    },
    {
      title: 'The Power of Habits',
      author: 'Charles Duhigg',
      publishedYear: 2012,
      notes: ' Why We Do What We Do in Life and Business',
      reviews: 'A moving and powerful story.',
    },
    {
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey.',
      publishedYear: 1989,
      notes: 'A business and self-help book',
      reviews: 'Witty and delightful.',
    },
    {
      title: 'Man\'s Search for Meaning',
      author: 'Viktor Frankl',
      publishedYear: 1946,
      notes: 'Viktor chronicling his experiences as a prisoner in Nazi concentration camps during World War II',
      reviews: 'Epic and symbolic.',
    },
  ];

  try {
    const result = await Book.insertMany(books);
    console.log('Books inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting books:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Call the insertBooks function
insertBooks();

