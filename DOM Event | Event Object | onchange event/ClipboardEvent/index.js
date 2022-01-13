// var input=document.querySelector("input");

// // clipboard event ar oncopy object ar bebohar------- 
// input.addEventListener("copy",function(){ //jokhon amra input ar ghore kichu likhe sheitake copy korbo tokhon console dekhabe you have copied
//     console.log("you have copied");
// });


// // clipboard event ar oncut object ar bebohar-------
// input.addEventListener("cut",function(){  //jokhon amra input ar ghore kichu likhe sheitake cut korbo tokhon console dekhabe you have cut
//     console.log("you have cut");
// });


// // clipboard event ar onpaste object ar bebohar-------
// input.addEventListener("paste",function(){  //jokhon amra input ar ghore kichu paste korbo tokhon console dekhabe you have paste
//     console.log("you have paste");
// });



//console ar maddhome na dekhiye pragraph tag ar maddhome dekhanor jonno------- 
var input=document.querySelector("input");
var p=document.querySelector("p");

input.addEventListener("copy",function(){
    p.innerHTML="you have copied"
});



input.addEventListener("cut",function(){
    p.innerHTML="you have cut"
});



input.addEventListener("paste",function(){
    p.innerHTML="you have paste"
});
