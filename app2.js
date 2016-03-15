var util = require('util');

function Person (){
    this.firstname = 'John',
    this.lastname = 'Doe' 
};


Person.prototype.greet= function(){
    console.log(`Hello ${this.firstname} ${this.lastname}`)
}


function PoliceMan(){
    
    Person.call(this);
    this.badgeNumber = '123456';
}

util.inherits(PoliceMan,Person);

  var police = new PoliceMan();
  
  police.greet();