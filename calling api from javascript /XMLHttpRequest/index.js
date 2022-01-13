// XMLHttpRequest (ai api bebohar korar jonno amake kono kichu install korte hobe na.......karon ati akti bultin browser object)

// console.clear();

// //console.log(window); // ar maddhome amra dekhte parbo je aita akta built in browser object



// //event- onload() , onerror();
// //property - response , responseText , responseType , responseURL , status , statusText  
// //function - open() , send() , setRequestHeader()   

// const getdata = () =>{
//     const xhr= new XMLHttpRequest(); //akhane XMLHttpRequest ke ana hoyeche and xhr ar moddhe rakha hoyeche 

//     xhr.open('GET','https://jsonplaceholder.typicode.com/posts') //open function diye amra request ta suru kori ba insialize kori.......open function ar moddhe prothom a akti method dite hobe  and pore ta api dite hobe otthat api link ba url....akhane je api url ta deya hoyeche seta fake api google theke aana hoyeche
//     xhr.send(); //akhane request ta send kora hoyeche....and amra network ar moddhe posts ar moddhe giye response a gele data gulo dekhte pabo 
//     //network a data na dekhe console a data dekhar jonno ---

//     xhr.onload = () =>{ // onload event data take prochecing ar kaj kore
//        let data= xhr.response; //akhane response take data ar moddhe rakha hoyeche
//        //console.log(data); //amon dile data gulo json formate a dekhabe
//        console.log(JSON.parse(data)) // java script object a data gulo dekhar jonno 
//     }


//     xhr.onerror = () =>{ //error handel korar jonno aita bebohar kora hoy--
//         console.log("error here"); // jodi ami akhane url theke akta word delete kore ai code ta run kori tahole oi khaner error ta dekhabe console a  
//     }
    
// }

// getdata() 




////// akti request jenerate kore oitake barbar bebohar korar niyom...vinno vinno method and vinno vinno url ar jonno...

// const makerequest = (method,api) =>{ // akhane makerequest 2ui ta peramiter receive korbe 

//     const xhr= new XMLHttpRequest();  

//     xhr.open(method,api);
   
//     xhr.onload = () =>{  
//        let data= xhr.response; 
//         console.log(JSON.parse(data))
//     }


//     xhr.onerror = () =>{  
//         console.log("error here");  
//     }
    

//     xhr.send();  


// }






// const getdata = () =>{ //tarpor aikhane ashbe 
//     makerequest('GET','https://jsonplaceholder.typicode.com/posts')  // akhane makerequest ai function ar moddhe 2ui ta peramiter pass kora hoyeche...akhane amar eccha moto peramiter pass korte parbo method and api 
// }

// getdata() // prothome ai functtion ta call hobe


////// post method ar bebohar----------------------


// const makerequest = (method,api,datainsert) =>{ // akhane makerequest 2ui ta peramiter receive korbe 

//     const xhr= new XMLHttpRequest();  

//     xhr.open(method,api);

//     xhr.setRequestHeader('content-Type','application/json') //server a data post korar somoy ai line ta likhte hobe  open and send ar majkhane
   
//     xhr.onload = () =>{  
//        let data= xhr.response; 
//         console.log(JSON.parse(data));
//     }


//     xhr.onerror = () =>{  
//         console.log("error here");  
//     }
    

//     xhr.send(JSON.stringify(datainsert));  //akhane datainsert ar value ke server a send kora hoyece.....server a data send korte hole obossoi JSON.srtingify() bebohar korte hobe....karon ata json format a save hobe  


// }






// const sandData = () =>{ //tarpor aikhane ashbe 
//     makerequest('POST','https://jsonplaceholder.typicode.com/posts',{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,

//     });  // akhane makerequest ai function ar moddhe 3 ta peramiter pass kora hoyeche...akhane amar eccha moto peramiter pass korte parbo method and api  and data
// }

// sandData() // prothome ai functtion ta call hobe



///// put request ar bebohar puro body update korar jonno-------------- 


// const makerequest = (method, api, updatedata) =>{ // akhane makerequest 2ui ta peramiter receive korbe 

//     const xhr= new XMLHttpRequest();  

//     xhr.open(method,api);

//     xhr.setRequestHeader('Content-Type','application/json');
   
//     xhr.onload = () =>{  
//        let data= xhr.response; 
//         console.log(JSON.parse(data))
//     }


//     xhr.onerror = () =>{  
//         console.log("error here");  
//     }
    

//     xhr.send(JSON.stringify(updatedata));  


// }


// const updateData = () =>{
//     makerequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{  // akhane jokhon kono id ar value change korbo tokhon url ba api ar seshe / diye shei id ar sonkha bole dite hobe jemon akhane ami id 1 ar value gulo sob change koreche 
//         id: 1,
//         title: 'foodip',
//         body: 'bardip',
//         userId: 20,
//     });
// }

// updateData();


/////patch ar bebohar----------(single line change ba update korar jonno)

// const makerequest = (method, api, updatedata) =>{ // akhane makerequest 2ui ta peramiter receive korbe 

//     const xhr= new XMLHttpRequest();  

//     xhr.open(method,api);

//     xhr.setRequestHeader('Content-Type','application/json');
   
//     xhr.onload = () =>{  
//        let data= xhr.response; // akhane response ta ashbe  
//         console.log(JSON.parse(data)) //and aikhane response take java object aakare console print kora hoyeche  
//     }


//     xhr.onerror = () =>{  
//         console.log("error here");  
//     }
    

//     xhr.send(JSON.stringify(updatedata));  //akhane request send kora hoyeche


// }


// const updatesingleData = () =>{
//     makerequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{  // akhane jokhon kono id ar value change korbo tokhon url ba api ar seshe / diye shei id ar sonkha bole dite hobe jemon akhane ami id 1 ar value gulo sob change koreche 
//         title: 'dipghoshdip'
        
//     });
// }

// updatesingleData();



/////// DELETE ar bebohar-------------(kichu delete korar jonno aita bebohar kora hoy)

// const makerequest = (method, api ,data) =>{ // problem here peramiter receive issue  

//     const xhr= new XMLHttpRequest();  

//     xhr.open(method,api);

//     xhr.setRequestHeader('Content-Type','application/json');
   
//     xhr.onload = () =>{  
//        let data= xhr.response; // akhane response ta ashbe  
//        console.log(xhr.status); // aivabe amra poparty gulo console ar maddhome dekhte pari   
//        console.log(JSON.parse(data)) //and aikhane response take java object aakare console print kora hoyeche  
//     }


//     xhr.onerror = () =>{  
//         console.log("error here");  
//     }
    

//     xhr.send(JSON.stringify(data));  //akhane request send kora hoyeche


// }


// const deleteData = () =>{
//     makerequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');  // akhane 1 no id ar sob delete hoye jabe karon amra api ba url ar pore /1 diyeche tai
      
// }

// deleteData(); 



//////promise ar maddhome api diye request send-------------


const makerequest = (method,api,data) =>{ // akhane makerequest akta promis return korbe 

   return new Promise = ((resolve,reject) => {
        const xhr= new XMLHttpRequest();  

        xhr.open(method,api);

        xhr.setRequestHeader('Content-Type','application/json');
    
        xhr.onload = () =>{  
            let data= xhr.response; 
            console.log(JSON.parse(data))
        }


        xhr.onerror = () =>{  
            console.log("error here");  
        }
        

        xhr.send(JSON.stringify(data));  

    });

}



const getdata = () =>{ //tarpor aikhane ashbe 
    makerequest('GET','https://jsonplaceholder.typicode.com/posts')
    
    .then((res) => console.log(res)); // jodi promis resolve hoy tahole akhane then oi value ta receive korbe and and res ar moddhe pass kore dibe 
                
          
}

getdata() // prothome ai functtion ta call hobe


