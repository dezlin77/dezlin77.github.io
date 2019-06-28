const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//for card1, just for fun
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

//middleware, has sequence, FIFO
app.use((req, res, next) => {
    req.message = 'this message made it!';
    console.log('One');
    //const err = new Error('Oh noes!');
    //next(err);
    //err.status = 500;
    next();
});

app.use((req, res, next) => {
    console.log(req.message);
    next();
});



app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index.pug', { name: name });
    } else {
        res.redirect('/hello');
    }
});

app.get('/card1', (req, res) => {
    res.render('card1', { prompt : "Wh'at what what" , hint: "Think about who?", colors });
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
    //res.render('hello',{ name:req.body.username });
    //res.json(req.body)
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

/*
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});
*/

//back-end footer

app.listen(3000, () => {
    console.log('The appl is runnong on localhotst:300-')
});




