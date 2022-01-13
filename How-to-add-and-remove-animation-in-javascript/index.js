for(var i=0;i<3;i++){
    document.querySelectorAll(".myclass")[i].addEventListener("click",function(){
        var text =this.innerHTML;
        
        myfunction(text);
        animation(text);


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



function animation(text){
    var selectedButton=document.querySelector("."+text);
    selectedButton.classList.add("anim");


    setTimeout(function(){  //animation ar time set korar jonno setTimeout() function bebohar kora hoy......ai function ar moddhe duita peramiter thake akta hocche anonimous function and arek ti hocche time jemon ami akhane 1000 diyechi tarmane 1 second por animation remove hoye jabe 
        selectedButton.classList.remove("anim");

    },1000);

}