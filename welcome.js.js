var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write("<h1>Welcome From Node JS </h1>");
    res.end();
}).listen(9000);

    console.log("Server is Started on port num 9000");