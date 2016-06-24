//Lets require/import the HTTP module
var http = require('http');
var os = require('os');
var hostname = os.hostname();

//Lets define a port we want to listen to
const PORT=80;

//We need a function which handles requests and send response
function handleRequest(request, response){

	setTimeout(function() {
  		console.log('waist some time...');
		response.end(' 1 second ZZZzzz...Got request with path: [' + request.url + '] Responding from host: [' + hostname + '] -- v2');
    	console.log(" 1 second ZZZzzz... Got request with path: [%s] Responding from host: [%s] -- v2",request.url,hostname);
	}, 1000);

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("v2 Server listening on: http://localhost:%s", PORT);
});
