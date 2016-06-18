var http = require('http');
var path = require('path');
var fs = require('fs');
//var spawn = require('child_process').spawn;

http.createServer(function (request, response) {

	var filePath = '.' + request.url;
	if (filePath == './') filePath = './index.htm';

	var body = "";
	request.on('data', function (chunk) {
		body += chunk;
	});

	request.on('end', function () {
		console.log('POSTed: ' + body);
		saveToFile(body);

	});

	fs.readFile(filePath, function(error, content) {
		if (error) {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end("oops - file not found", 'utf-8');
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});


}).listen(80);
console.log('Server running at http://127.0.0.1:3001/');

function saveToFile (body) {
	console.log('saving file to orderDataFromPost.txt');
	fs.appendFile("./orderDataFromPost.txt", body + '\n', function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});

};

