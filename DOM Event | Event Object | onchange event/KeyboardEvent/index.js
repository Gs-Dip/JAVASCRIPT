//java script 50 no video

const dip = document.querySelector("textarea");
// dip.addEventListener("keydown",function(){ //key press kore dhore rakhle keydown proparti barbar repeat hobe 
//     console.log("keydown");
// });



// dip.addEventListener("keypress",function(){
//     console.log("keypress");
// });


// //keyup event ar bebohar-------------------

// dip.addEventListener("keyup",function(){
//     console.log("keyup");
// });


//keyup event bebohar kore kon key press korchi ta dekhar jonno-----------

// dip.addEventListener("keyup",function(e){
//     console.log(e.key);
// });

//keyup event bebohar kore aski code dekhar jonno-------------

// dip.addEventListener("keyup",function(e){
//     console.log(e.keyCode);
// });


//keyup event bebohar kore  amra je key press korbo tar jonno je code ta ache ta amra code properties ar maddhome jante pari

// dip.addEventListener("keyup",function(e){
//     console.log(e.code);
// });




// keyup bebohar kore shiftkey ar bebohar----shiftkey ar madhome kew jodi shift key press kore tahole true return korbe

// dip.addEventListener("keyup",function(e){
//     console.log(e.shiftKey);
// });

//othoba------------------------

// dip.addEventListener("keyup",function(e){
//     if(e.shiftKey) {  //jodi kew shift press kore kono button a press kore tahole if ar moddhe dhukbe 
//         console.log("shift+"+e.key); //and  e.key ar maddhome amra shei key take select korechi jeta amra shift ar sathe press korbo  
//     }
// });


// repeat proparties ar bebohar---------------

dip.addEventListener("keydown",function(e){ //key press kore dhore rakhle keydown proparti barbar repeat hobe 
    if(e.repeat){
        alert("do not repeat");
    }
});


