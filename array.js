var vehicle =[];


 vehicle.push(
     function(){
         console.log("BMW");
     },
      function(){
         console.log("AUDI");
     }
);
 
vehicle.forEach(function(item){
    item();
    //console.log(vehicle.length);
})


 