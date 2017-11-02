const burger = require('../models/burger');
const router = require('express').Router();
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.redirect('/index');
});

router.get('/index', (req, res) => {
    let burgerArray = burger.returnBurgers();    
    res.render('index', { content: burgerArray });
});

router.post('/index', urlencodedParser, (req, res) => {
    let newBurger = req.body.burger;
    burger.addBurger(newBurger);
    res.render('index', { content: newBurger });
});

module.exports = router;