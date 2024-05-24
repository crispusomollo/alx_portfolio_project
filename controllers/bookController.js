const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.addBook = async (req, res) => {
    const { title, author, summary } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            summary,
        });

        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateBook = async (req, res) => {
    const { title, author, summary } = req.body;

    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = title || book.title;
        book.author = author || book.author;
        book.summary = summary || book.summary;

        await book.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.remove();
        res.json({ message: 'Book removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

