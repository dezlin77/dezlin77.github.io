const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const week3 = express();

week3.use(bodyParser.urlencoded({ extended: false}));
week3.use(cookieParser());

week3.set('view engine', 'pug');

// Assignment 3

week3.use(express.static('public'))

// Assignment 1+2

week3.get('/', (req, res) => {
    res.send("hi man");
});

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

week3.get('/getData',(req,res) => {
    const num = req.query.number;
    if (num !== undefined){
        if (isNormalInteger(num)) {
            let result = calcNum(num);
            res.send(result.toString());
        }
        else{
            res.send("Wrong Parameter");
        }
    }
    else{
        res.send("Lack of Parameter");
    }
});

function calcNum(num){
    let result = 0;
    for( i = 1;i <= num;i++){
        result += i;
    }
    return result;
}

// Asignment 4

week3.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('hi2', { "name" : name.toString()});
    } else {
        res.render('index');
    }
});

week3.get('/hi2', (req, res) => {
    const name = req.query.username;
    if (name !== undefined) {
        res.cookie('name', name);
        res.redirect('myName');
    } else {
        res.render('index');
    }
});

week3.listen(3000, () => {
    console.log("The week3lication is running on localhost:3000.");
});










/*
const mainRoutes = require('./routes/index');
const cardRoutes = require('./routes/cards');

week3.use(mainRoutes);
week3.use('/cards', cardRoutes);


week3.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

week3.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


//back-end footer

week3.listen(3000, () => {
    console.log('The week3l is runnong on localhotst:300-')
});
*/



