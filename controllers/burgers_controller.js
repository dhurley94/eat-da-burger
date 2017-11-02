const burger = require('../models/burger');
const router = require('express').Router();
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    let content = burger.returnBurgers();
    res.render('index', {burgs: content});
});

router.post('/index', urlencodedParser, (req, res) => {
    let newBurger = req.body.burger;
    burger.addBurger(newBurger);
    res.redirect('/');
});

module.exports = router;
