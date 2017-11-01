const burger = require('../models/burger');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    res.render('index');
});

module.exports = router;