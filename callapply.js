var callapplydemo = {
     name:'Raja',
     print:function(){
         console.log(`Hello ${this.name}`);
     } 
    
};

callapplydemo.print();

callapplydemo.print.call('John');
