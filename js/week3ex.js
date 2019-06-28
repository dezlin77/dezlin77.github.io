const username = "kenlin3";
const https = require('https');


//Print Error Messages
function printError(error) {
	console.error(error.message);
}


//function to print message to console
function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
	console.log(message);
}


function getProfile(username) {
try {
//printMessage("kenlin3", 100, 3000);

//connect to the API URL teamtreehouse
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
	if (response.statusCode === 200) {
	//console.log(response.statusCode);
	let body = "";
	//read the data
	response.on('data', data => {
		body += data.toString();
		//console.log("data", data.toString();
    //process.stdout.write(d);
  });

	response.on('end', () => {
		try {
		//parse the data
		const profile = JSON.parse(body);
		printMessage(username, profile.badges.length, profile.points.JavaScript);
		//console.log(body);
		//console.log(typeof body);
		//print the data
	} catch (error) {
		printError(error);
	}
	});
} else {
	const message = `Theres an error getting profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
	const statusCodeError = new Error(message);
	printError(statusCodeError);
}
});
request.on('error', printError);
} catch (error) {
	printError(error);
}
}



//const users = ["kenlin3", "chalkers", "davemcfarland"];
const users = process.argv.slice(2);
users.forEach(getProfile);

//getProfile("kenlin3");
//getProfile("chalkers");