const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBooks);
router.post('/', auth, addBook);
router.put('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

module.exports = router;

