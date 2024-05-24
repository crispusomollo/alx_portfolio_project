const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

