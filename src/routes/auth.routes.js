const express = require('express');

const router = express.Router();

const {
    signup,
    login,
    verifyToken
} = require('../controllers/auth.controller');

router.post('/signup', signup);
router.post('/login', login);
router.post('/verify', verifyToken);

module.exports = router;
