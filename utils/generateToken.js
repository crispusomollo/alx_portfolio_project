const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ user }, 'your_secret_key', {
        expiresIn: '1h',
    });
};

module.exports = generateToken;

