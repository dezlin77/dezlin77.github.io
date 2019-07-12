const express = require('express'); // sets up express as a constant var
const ken2 = express(); //tells nodejs to use express
const bodyParser = require('body-parser'); //middleware
const cookieParser = require('cookie-parser'); //middleware

ken2.use(bodyParser.urlencoded({ extended:false })); //middleware
ken2.use(cookieParser());

ken2.set('view engine', 'pug'); //set view engine to pug files

// home route

ken2.get('/', (req, res) => {
    const name = req.cookies.username; //cookie as a variable
    if (name) {
        res.render('index', {name: name}); //assign constant name, as name
        // the key and value now have the same name, can delete "": name" part
    } else {
        res.redirect('/hello');
    }
    
});

// the hello page VVV

ken2.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

ken2.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    //res.render('hello', {name: req.body.username });
    res.redirect('/');
});

ken2.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

// hello page ends here ^^^

ken2.get('/card1', (req, res) => {
    res.render('card1', { prompt: "What is this?"});
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

ken2.listen(3000, () => {
    console.log('This app is running on localhost:3000!');
});