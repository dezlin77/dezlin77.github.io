const express = require('express');
const router = express.Router();

//middleware, has sequence, FIFO
router.use((req, res, next) => {
    req.message = 'this message made it!';
    console.log('One');
    //const err = new Error('Oh noes!');
    //next(err);
    //err.status = 500;
    next();
});

router.use((req, res, next) => {
    console.log(req.message);
    next();
});



router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index.pug', { name: name });
    } else {
        res.redirect('/hello');
    }
});



router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
    //res.render('hello',{ name:req.body.username });
    //res.json(req.body)
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;

