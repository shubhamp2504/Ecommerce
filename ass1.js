var http = require('http');
var fun = require('./utilityFun');

http.createServer(function (req, res){
    res.writeHead(200, {'content-Type': 'text/http'});


    res.write("Prime or Not : "+fun.isPrime(23));
    
    res.write(" Factorial is : "+fun.calFact(5));

    res.write(" Perfect or Not "+fun.isPerfect(28));

    res.end();
}).listen(8080);