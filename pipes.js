var fs = require('fs');
var zlib = require('zlib');

var readbleStream = fs.createReadStream(__dirname+'/greet.txt');


var writeableStream = fs.createWriteStream(__dirname+'/greetcopy.txt');

var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz.txt');
  
  
  
  readbleStream.pipe(writeableStream);
  
  
    readbleStream.pipe(gzip).pipe(compressed);
    console.log('Done...');