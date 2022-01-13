// document.querySelector("button").addEventListener("click",myfunction);

// function myfunction(){
//     alert("hello")
// }


// oothoba anonimous function ar maddhome-------------------------

// document.querySelector("button").addEventListener("click",function(){
//     alert("hello");
// });


// h1 ar jonno ---------------------------------

var myvar=document.querySelector("h1");

myvar.addEventListener("mouseover",function(){
    myvar.classList.add("heading");    
});

myvar.addEventListener("mouseout",function(){
    myvar.classList.remove("heading");    
});