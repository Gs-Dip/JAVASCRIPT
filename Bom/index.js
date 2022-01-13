//bom (Browser object Model)
//window object
//location object


//console.clear();


//console.log(location); //atar maddhome amra console a dekhe nite pari location object ar ki ki propartis ache


//location object ar kichu proparti ar bebohar

//href  propartie ar bebohar-------------------
//console.log(location.href); //href propartie ar maddhome amra url ta khuje pabo


//protocol
//console.log(location.protocol); //jemon http and https hocche duita protocol


//hostname 
// console.log(location.hostname);


//port
//console.log(location.port);


//pathname 
//console.log(location.pathname);


/// work html element with bom ar location object ar proparti niye -----------

//var locationdiv =document.querySelector(".location-div");

//console.log(locationdiv); //akhane console dekha hoyeche je amra  location-div ai class ta ke dhorte parchi ki na

//var p1 =locationdiv.children[0]; // akhane locationdiv class theke 0 no index ar p tag ke dhora hoyeche 
//console.log(p1); // akhane console a  dekha hoyeche je amra 0 no nidex ar p tag ke dhorte parchi ki na..........just  bojhar jonno ai kajta kora hoyeche

//p1.textContent = location.href; //akhne p1.textContent diya p1 ar value ba contant set kora hoyeche...and location.href diya url ke call ba set kora hoyeche p1 ar value hishebe  


// var p2=locationdiv.children[1];
// p2.textContent=location.protocol;


// var p3 =locationdiv.children[2];
// p3.textContent=location.pathname;



// assign ar bebohar-----------------------

var button= document.querySelector("#but");

button.addEventListener("click",function(){
    location.assign("https://www.google.com/")
});