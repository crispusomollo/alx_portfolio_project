const express = require('express');
const { addProgress, getProgress } = require('../controllers/progressController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, addProgress);
router.get('/:userId', auth, getProgress);

module.exports = router;

