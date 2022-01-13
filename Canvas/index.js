var canva = document.querySelector("#can");

var context =canva.getContext("2d"); //akhane canvar 2d ke select kora hoyeche and take context ar moddhe store kore rakha hoyeche 

context.lineWidth=3; // akhane rectengale ar boder ar width set kora hoyeche
context.strokeStyle="black" //akhane rectengale ar boder ar color set kora hoyeche and stoke mane hocche bairer dik
context.strokeRect(10,10,380,280); //akhane rectengale ar boder ar width neya hoyeche 

context.fillStyle="green"; // fill mane vetorer dik ke bojhai...akhane rectengale ar vetorer color set kora hoyeche
context.fillRect(12,12,376,276); //akhane rectengale ar vetorer height weight neya hoyeche


var centerX = canva.width / 2; //akhane canvas ar x ookher middle ke find kora hoyeche 
var centerY= canva.height / 2; //akhane canvas ar y oookher middle ke find kora hoyeche


context.beginPath(); //circyle create korar jonno ai function ke aage call korte hobe 
context.arc(centerX,centerY,80,0,2*Math.PI,false); //akhane x okkho y okkho and boder radious and ai sob dite hobe and akhane true false nirvor kore ami counter clock wize chacchi na clock wize chacchi tar opor 
context.fillStyle= "red"; //akhane circyle ar color set kora hoyeche
context.fill(); //circyle ke show korar jonno ai function ke call korte hobe   
context.stroke(); // aita dile circyle ar pase boder chole ashbe....akhane kono color na dileo hobe karon ami oopore stoke ar color aagei set kore rakhchi    
