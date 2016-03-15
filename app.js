var EventEmitter = require('events');

var util = require('util');


var  Greetr = function Greetr(){
      this.greeting = 'Hello World';
  
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
       console.log( this.greeting);
       this.emit('greet');
}

var greetr1 = new Greetr();

greetr1.on('greet',function(){
    console.log('some one greeted!');
})

greetr1.greet();

