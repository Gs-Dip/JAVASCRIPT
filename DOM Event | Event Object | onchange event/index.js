//var input=document.querySelector("input"); //amon dile sob input element select hoye jabe and document.querySelector("input[name=email]"); amon dile shudhu email select hobe 


console.clear(); //atar moddhome protibar output dekhar somoy console clear hoye jabe

//input.addEventListener("change",function(e){
    // console.log(e) //e ar moddhe ki hocche na hocche ta amra atar maddhome dekhte pari
    //console.log(e.type); // akhane e event ar type dekha hoyeche
    //console.log(e.target); //akhane e event ke target kora hoyeche
    //console.log(e.target.className) //akhane e event theke target kora hoyeche class name ke
    //console.log(e.target.id) //akhane e event theke target kora hoyeche id  name ke
    //console.log(e.target.value); //akhane e event theke target kora hoyeche value ke 

//});

// change event with checkbox----------------------

// var input=document.querySelectorAll('input[name=program]');
// console.log(input) //akhane je node list ta pabo take array te convar korar jonno niche take array te convart kora hoyeche 

// Array.from(input).map((programs) =>{
//     programs.addEventListener("change",dip); 

// });

// function dip(e){ //je even generate hobe ta e peramiter ar moddhe thakebe 
//     if(e.target.checked){
//         console.log(e.target.value);
//     } 
// }



// change event with <select>---------------------

var ele=document.querySelector("#dip");

ele.addEventListener('change',dip1);

function dip1(e){
        console.log(e.target.value);
}
 
