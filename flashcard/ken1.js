const express = require('express'); // sets up express as a constant var
const ken1 = express(); //tells nodejs to use express
const bodyParser = require('body-parser'); //middleware
const cookieParser = require('cookie-parser'); //middleware

ken1.use(bodyParser.urlencoded({ extended:false })); //middleware
ken1.use(cookieParser());

ken1.set('view engine', 'pug'); //set view engine to pug files

ken1.get('/', (req, res) => {
    res.send('yo man!');
});

ken1.get('/card1', (req, res) => {
    res.render('card1', { prompt: "What is this?"});
});

// the hello page VVV

ken1.get('/hello', (req, res) => {
    res.render('hello', {name: req.cookies.username });
});

ken1.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    //res.render('hello', {name: req.body.username });
    res.redirect('/');
});

// hello page ends here ^^^

ken1.listen(3000, () => {
    console.log('This app is running on localhost:3000!');
});