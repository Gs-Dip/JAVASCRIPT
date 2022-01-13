//// for  vs  foreach---------------------

//for loop ar bebohar---------

// var number =[10,20,30,40];

// for(var x=0; x<number.length; x++){
//     console.log(number[x]);
// } 


//same work with foreach---------------

// var number =[10,20,30,40];

// number.forEach(myfunction) // akhane number array ar sathe foreach add kora hoyeche and foreach ar moddhe akta function dite hobe....number array theke akta akta kore value myfunction ar moddhe jabe  

// function myfunction(x){ // value gulo x petamiter receive korbe 
//     console.log(x); // and console a print korbe
// }


// othoba-----------------------

// var number =[10,20,30,40];

// number.forEach(function(x){
//     console.log(x);
// })

/////forEach bebohar kore  akti array ar value ke squre kore onno array te rakhar jonno---------------

// var number=[10,20,30,40];
// var squrenumber=[];

// number.forEach(function(x){
//     squrenumber.push(x*x);
// });

// console.log(squrenumber);


///forEach bebohar kore akti array ar protiti element  ar sathe 5 jog kore ta akti array te rakhar jonno-----

var number=[10,20,30,40];
number.forEach(function(x,index,array){ // x ar moddhe number ar element gulo akta akta kore ashbe and index diye index number pass kora hoyeche and array ar maddhome array pass kora hoyeche
    array[index]= x+5; //akhane protibar array ar index onujayi x ar man change hobe and tar sathe 5 jog hobe and sobgulo akta array ar moddhe thakbe   
});

console.log(number); 