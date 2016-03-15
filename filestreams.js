var fs = require('fs');

var readbleStream = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8', highWaterMark:1024});


var writeableStream = fs.createWriteStream(__dirname+'/greetcopy.txt',{encoding:'utf8', highWaterMark:1024});

readbleStream.on('data', function(chunk){
    console.log(chunk.length);
    writeableStream.write(chunk);
});