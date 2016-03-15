'use strict'
class Person{
    
     constructor(firstname, lastname){
         this.firstname = firstname;
         this.lastname = lastname;
     }
     
     greet(){
         console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
    
}

var John = new Person('John','Doe');

John.greet();


var Cliff = new Person('Cliff','Dickinson');

Cliff.greet();

console.log(Cliff._proto);
console.log(John._proto);