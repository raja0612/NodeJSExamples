function greet(callback){
    console.log('hello');
    callback();
    
}

greet(function(){
   console.log('callback'); 
});