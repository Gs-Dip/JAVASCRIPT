//chack note book for learn more about timing event 

// setTimeout(()=>{
//   console.log("hi");
// },4000);


// setTimeout ar bebohar with separet functin

// setTimeout(dip,4000);

// function dip(){
//     console.log("hi i am dip");
// }


//working setTimeout() with html element--------------------

// var btn=document.querySelector(".save-btn");
// var p=document.querySelector(".message");

// btn.addEventListener("click",function(){
//     p.textContent="user registration successful"


//     setTimeout(()=>{ 
//       p.textContent="" // p.textContent ar value ta emty hoye jabe 2 sec por...oothoba chole jabe 2 sec por
//     },2000);
// });



/// working setInterval() with html element---------

var btn=document.querySelector(".save-btn");
var p=document.querySelector(".message");


btn.addEventListener("click",function(){
    var count= 0;
    p.textContent=count;

    setInterval(() => {
       count++;
       p.textContent=count; 
    }, 1000);
});






