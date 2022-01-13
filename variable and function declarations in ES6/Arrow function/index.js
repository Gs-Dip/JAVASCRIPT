//aitake  traditional function bole--------
// function dip(){console.log("i am display 1")} //traditional function a {} uthai dile kaj korbe na 

// dip();


//aitake arrow function bole------------

// const dip= () =>{console.log("hi i am arrow function")} // arrow function a akti statement thakle {} aita na dileo cholbe jemon akhane na dileo cholbe 

// dip();


//traditional function ar maddhome value return korar jonno

// function dip(){
//     return "hello dip" 
// }

// console.log(dip()); //akhan theke dip() function call kora hoyeche and dip function theke value return kora hoyeche dip() ar moddhe and console.log(ar moddhe function ke rakha hoyeche karon value return hoy dip() ar moddhe ashbe) and console.log value take console a print korbe

// arrow function ar maddhome value return korar jonno

// const dip =() =>{
//     return "hello arrow"
// }

// console.log(dip());

//othoba--------------------------------------
// const dip =() => "hello arrow1" // akhane return key word na bebohar korleo hobe jodi return keyword bebohar kori tahole {} ai ta obossoi dite hobe   

// console.log(dip());



////traditional function a peramiter pass ar niyom------

// function dip(x,y){
//     return x + y;
// }

// console.log(dip(2,3));


////arrow function a peramiter pass ar niyom---------

// const dip = (x,y) => x + y; // jehetu akhane akta state ment tai {} aita dei nai and return keyword oo use kori nai  

// console.log(dip(3,3));

/////////Note return keyword bebohar korle {} aita obbossoi bebohar korte hobe.....return keyword bebohar na korle {} aita ooo bebohar kora jabe na arrow function ar khettre 





// java script 70 no video-----------------

var students = [
    {
        id:101,
        name:"dip ghosh",
        gpa:2.68
    },

    {
        id:102,
        name:"dibbo ghosh",
        gpa:3.68
    },


    {
        id:103,
        name:"tanmoy ghosh",
        gpa:4.68
    },
]

//console.log(students); //console a sompurno student array dekhte pabo 


/// oporer array theke jader gpa 3 point ar oopor sudhu tader name dekhar jonno---
//traditional function ar maddhome-------------
// function studentname(){
//     return students.filter(function(x){
//         return x.gpa > 3
//     }).map(function(y){
//         return y.name;
//     })
// }

// console.log(studentname());


////arrow function ar maddhome-------------- 

// const studentneme = () =>{

//     return students.filter((x) => x.gpa > 3).map((y) => y.name)
// }

// console.log(studentneme());


//othoba return na bebohar kore--------------

const studentneme = () =>students.filter((x) => x.gpa > 3).map((y) => y.name)

console.log(studentneme());