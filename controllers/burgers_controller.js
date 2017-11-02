const burger = require('../models/burger');
const router = require('express').Router();
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    res.render('index', { title: "Burgers", burgers: burger.returnBurgers() });
});

router.post('/index', urlencodedParser, (req, res) => {
    burger.addBurger(req.body.burger);
    res.render('index', { title: "Burgers", burger: "test" });
});

module.exports = router;