var input=document.querySelector("input");

//onblur ar bebohar ----java script file a on likhle hobe na shudhu html file a korar somoy onblur likhte hobe 
// input.addEventListener("blur",function(){
//     //console.log("blur is occured");
//     input.style.backgroundColor="transparent";
//     input.style.padding="0rem"
// });

//onblur ar bebohar kore input ar value print -------
input.addEventListener("blur",function(e){
    input.value=e.target.value.toUpperCase(); //akhane input ar value take uppercase kora hobe je valu ta user input ar ghore dibe  
    console.log(e.target.value); //and shei value ta akhne console a print kora hoyeche
    
    input.style.backgroundColor="transparent";
    input.style.padding="0rem"
});  



//onfocus ar bebohar----------------
input.addEventListener("focus",function(){
    //console.log("focus is occured");
    input.style.backgroundColor="orange";
    input.style.padding="2rem";

});


// //onfocusin ar bebohar----------------
// input.addEventListener("focusin",function(){
//     console.log("focusin is occured");
// });


// //onfocusout ar bebohar----------------
// input.addEventListener("focusout",function(){
//     console.log("focusout is occured");
// });