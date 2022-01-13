//popup box ar alert ar bebohar--------------

//alert("error here");


//popup box ar confirm ar bebohar--------------

// function deletesomething(){
//     let value=confirm("Do You Want To Delete?"); //akhane akta confirm box dekhabe shei box a jodi user ok dei tahole true sotore hobe value variable ar moddhe and cancel dile false store hobe variable ar moddhe

//     if(value){ //jodi value variable ar value true hoy tahole deleted print korbe console a 
//         console.log("deleted");
//     }
//     else{ // and false hole aita print korbe 
//         console.log("not deleted");
//     }
// }


//popup box ar prompt ar bebohar--------------

function welcomeMessage(){ //akhane akta function create kora hoyeche

    var h1 =document.createElement('h1'); //java script ar maddhome akti h1 element create kora hoyeche...
    var text; //akhane text name akta variable diklier kora hoyeche

    var name =prompt("enter your name: "); //akhane prompt ar maddhome user ar kachteke input neya hobe and ta name variable ar moddhe store kora hobe  

    if(name == null || name == ''){ // jodi user name na diye cancel dei tahole name variable ar moddhe null store hobe and jodi value nall hoy and jodi kono name na diye  ok press kore  tahle nicher ta print korbe....  
        text="no name found"
    }

    else{ //and jodi input ar moddhe name diye ok press kore tahole nicher ta print korbe  
        text="Welcome "+name;
    }


    var textnode=document.createTextNode(text); //akhane text ar value diya text node create kora hoyeche
    h1.appendChild(textnode); // akhane h1 ar tag ar sathe textnode add kora hoyeche
    document.body.appendChild(h1); // akhane h1 element ke ba tag ke html ar body ar sathe add kora hoyeche..
}

welcomeMessage(); //function ke call kora hoyeche




