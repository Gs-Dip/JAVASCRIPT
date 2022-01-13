// java script 57 no video

var btn=document.querySelector(".btn");
var p = document.querySelector(".message");


btn.addEventListener("click",startclock);

function startclock(){
    var date = new Date(); //akhane date method ar maddhome ajker date ke find kora hoyeche

    var hours=date.getHours(); //akhane date theke hour ke find kora hoyeche
    var minutes=date.getMinutes();
    var second=date.getSeconds();


    minutes=formatTime(minutes); //akhan theke minutes ke pass kora hoyeche formatTime() ai function ar moddhe
    second=formatTime(second);

    var time = hours +":"+minutes+":"+second; //akhane formating kora hoyech


    p.textContent=time; //akhane p  tag ar value hishebe time variable ar value set kora hoyeche
    
    setInterval(startclock, 1000); //akhane sta

}


function formatTime(value){ //opore je peramiter gulo pass kora hoyeche ta value receive korbe   
   if (value <10){ //and aikhne dekhbe value ar value ta ki 10 ar theke choto....  
       value = "0"+value; //jodi choto hoy tahole value ar aage 0 add korbe jenom 00, 01, 02, 03,....09,10
   }

   return value; // tar por akhan theke value take return kora hoyeche opore
}
