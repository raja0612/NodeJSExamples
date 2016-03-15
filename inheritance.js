var person = {
   firstname :'',
   lastname:'',
   print: function(){
       console.log(this.firstname + ' '+this.lastname);
   } 
};


var srujan = Object.create(person);

srujan.firstname = 'Srujan';
srujan.lastname = 'Gopu';


var vishwanath = Object.create(person);

vishwanath.firstname = 'Vishwanath';
vishwanath.lastname ='Guntupalli';

srujan.print();
vishwanath.print();