const weather = require('./week3weatherweather.js');

const query = process.argv.slice(2).join("_").replace(' ', '_');
//query 16801
//query new york, NY
weather.get(query);