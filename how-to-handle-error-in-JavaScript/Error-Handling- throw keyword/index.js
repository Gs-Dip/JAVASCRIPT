// general use------------------------------

// var btn=document.querySelector("#btn");
// var inp=document.querySelector("#inp");


// btn.addEventListener("click",function(){ // jodi kew botton a click kore 
//     var inputvalue=inp.value; //akhane inp.value ar maddhome input ar value ta inputvalue vairable ar moddhe store hobe

//     console.log(inputvalue); // and aikhane shei value ta console a dekhano hoyeche
// });


// throw ar bebohar------------------------

//throw ar maddhome custom error toiri kora jai....eccha moto error toiri kora jai 

var btn=document.querySelector("#btn");
var inp=document.querySelector("#inp");


btn.addEventListener("click",function(){ // jodi kew botton a click kore 
    var inputvalue=inp.value; //akhane inp.value ar maddhome input ar value ta inputvalue vairable ar moddhe store hobe
    
    try{
        if(inputvalue < 5){
            throw "input is too low" //throw ar kaj hocche throw ar contant ke catch ar moddhe throw kora.....  
        }

        else if (inputvalue > 10){
            throw "input is too high"
        }

    }catch(err){ //thoro ar contant err ar moddhe ashbe and console.log ar maddhome  err ke console a print kora hoyeche
        console.log(err);
    }
})