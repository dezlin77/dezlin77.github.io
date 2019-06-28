const https = require ('https');
const api = require('./weatherapi.json');

function get(query) {
	const request = https.get(`https://darksky.net/forecast/${query}.json25.0375,121.5637/us12/en`)





}