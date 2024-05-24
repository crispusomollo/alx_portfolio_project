const Progress = require('../models/Progress');

exports.addProgress = async (req, res) => {
    const { book_id, progress } = req.body;

    try {
        const newProgress = new Progress({
            user: req.user._id,
            book: book_id,
            progress,
        });

        const progressEntry = await newProgress.save();
        res.json(progressEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProgress = async (req, res) => {
    try {
        const progressEntries = await Progress.find({ user: req.params.userId }).populate('book');
        res.json(progressEntries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

