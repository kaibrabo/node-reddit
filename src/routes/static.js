const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Welcome to Node Reddit');
});

router.get('/kiki', (req, res, next) => {
    res.send('da sneaky');
});

module.exports = router;