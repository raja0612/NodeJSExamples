'use strict'
var EventEmitter = require('events');

module.exports = class Events extends EventEmitter {
    
      constructor(){
          super();
          this.greeting = 'Hello World';
      }
      greet(data){
          console.log(`Hello ${this.greeting} ${data}`)
      }
}

var events = new Events();

events.greet('raja');