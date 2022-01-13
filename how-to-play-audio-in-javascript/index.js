// for(var i=0;i<3;i++){
//     document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
//         var text =this.innerHTML;
         


//         switch(text){
//             case "a":
//                 var audio=new Audio("sound/sound1.wav");
//                 audio.play();
//                 break;

//             case "b":
//                 var audio=new Audio("sound/sound2.wav");
//                 audio.play();
//                 break;
                    
                    
//             case "c":
//                 var audio=new Audio("sound/sound3.wav");
//                 audio.play();
//                 break;    
//         }
//     });
// }




// othoba same kajta porichonno vabe korar jonno-------------------------------------------------

for(var i=0;i<3;i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        var text =this.innerHTML;
        
        myfunction(text);


    });
}




function myfunction(text){
    switch(text){
        case "a":
            var audio=new Audio("sound/sound1.wav");
            audio.play();
            break;

        case "b":
            var audio=new Audio("sound/sound2.wav");
            audio.play();
            break;
                
                
        case "c":
            var audio=new Audio("sound/sound3.wav");
            audio.play();
            break;    
    }
}

