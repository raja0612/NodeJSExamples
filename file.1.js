var fs = require('fs');
var zlib = require('zlib';)

var content = fs.readFileSync(__dirname+'/greet.txt','utf8');

console.log(content);

var content = fs.readFile(__dirname+'/greet.txt',function(err,data){
    console.log(data.toString());
    
});

console.log('Done');