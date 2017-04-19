var http = require('http');

var data = require('./randomNum');
var convert = require('./convertNum');
var output = require('./output');

http.createServer(function(req, res){
  console.log(data(100, 1000000));

  res.writeHead(200);
  res.write(output.getHeading());
  res.write(output.acountBalance());
  // need a empty, this is to res only a random number and convert random to USD
  // res.write(' ' + convert((data(100, 100000))));

  res.end();
}).listen(3000);
