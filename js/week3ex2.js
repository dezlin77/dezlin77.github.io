const profile = require('./week3exprofile.js');

const users = process.argv.slice(2);
users.forEach(profile.get);

//getProfile("kenlin3");
//getProfile("chalkers");