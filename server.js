var http = require('http');
var fs = require('fs');
var url = require('url');
var httpHeaders = require('http-headers');

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   console.log(JSON.stringify(request.headers));
  
  //response.writeHead(200, {'Content-Type': 'text/plain'});
   //response.write(data.toString());
   // Send the response body as "Hello World"
   //response.end('hello world');
   
   
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
        // response.writeHead(200, {'Set-Cookie': 'mycookie:test','Content-Type': 'text/html'});	
		// response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true }).send();
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
	   //console.log(httpHeaders(response));
   })
   
   ;   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');