"use strict" //strict mode ke on  kora hoyeche akhane

// default parameter  ar bebohar --------

// function messege(text ="hello this is default paramater"){
//     console.log(`${text}`); 
// }

// messege(); // akhane kono string pass korle ta text paramitar receive korbe and shei string ta console a print korbe and kew jodi kono string pass na kore tahole opore  text= je string ta ache setai print korbe console a     



/////rest parameter ar bebohar------------------

function sum(x,y, ...z){ //...z akhane z hocche akti rest paramiter and ... ata hocche rest paramiter ar syntex 
    console.log(`x =${x} , y = ${y} ,z = ${z}`)
} 

sum(10,20,30,40,50); // akhan theke 10 jabe x ar moddhe.. 20 jabe y ar moddhe...and bad baki sob jabe z ar moddhe.....atai muloto rest paramiter ar kaj  