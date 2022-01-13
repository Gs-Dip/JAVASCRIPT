//// fatch ----------( chack note book)-----------------  
 
console.clear();

//console.log(window); // fatch jehetu global method tai ati amader browser a already ache.....seta chack korar jonno window ke console a print kora hoyeche 

////// get method ar bebohar with fetch-----------

// fetch('https://jsonplaceholder.typicode.com/posts/101')
// //////.then((res) => console.log(res)); // amra je data ta khujchi ta amra akbare pabo na......akhane prothome readablestrem ashbe ja amra dekhte pabo na....body te mulo to data thake ja amra click korleo dekhte pabo na
// .then((res) => res.json()) // akhane readablestream datatake json formate convart kora hoyeche
// .then((res) =>{
//     console.log(res); //akhane shei datatake console a print kora hoyeche
// })

// .catch((err) =>{
//     console.log(err)
// })



///// // get method ar bebohar with fetch--fetch method ar maddhome server error handel korar niyom---------------

// fetch('https://jsonplaceholder.typicode.com/posts/101') // jehetu akhane 1 theke 100 porjonto data store kore rakha ache ami jokhon 101 dibo tokhoni server error ashbe and server error fetch handel korte pare na  
// .then((res)=>{
//     if(!res.ok){ // akhane bola hoyeche jodi res ok na hoy ba response code jodi ok na hoy
//         const messege= `error : ${res.status}`;
//         throw new Error(messege); // tahole akhan theke messege ar value ta throw hobe catch ar moddhe
//     }
//     return res.json(); // jodi res ok hoy ba res code ok hoy tahole ai code ta kaj korbe and value  gulo print korbe console a
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err));



//////post method ar bebohar with fetch---------------


// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',

//     headers: {  // header ta akhane dite hobe karon aita fake api ai web page a aita dite bolche tai akhane aita dewa hoyeche
//         'Content-type': 'application/json; charset=UTF-8',
//       },

//     body: JSON.stringify({ //JSON.stringify() method ar kaj hocche amra je  java object aakare data gulo send korbo take json format a convart kore nibe
//         title: 'dip',
//         body: 'skdjg;laksdjgoijhoidfjsduihfu',
//         userId: 10,
//     })
// })  
// .then((res)=>{
//     if(!res.ok){ // akhane bola hoyeche jodi res ok na hoy ba response code jodi ok na hoy
//         const messege= `error : ${res.status}`;
//         throw new Error(messege); // tahole akhan theke messege ar value ta throw hobe catch ar moddhe
//     }
//     return res.json(); // jodi res ok hoy ba res code ok hoy tahole ai code ta kaj korbe and value  gulo print korbe console a
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err));




//////////put ar bebohar with fetch----------------

// fetch('https://jsonplaceholder.typicode.com/posts/1',{ // akhane put ar belai api ar sathe / diye bole dite hobe koto number ar ta amra update korte cacchi jemon ami akhane 1 no ta update korbo 
//     method: 'PUT',

//     headers: {  // header ta akhane dite hobe karon aita fake api ai web page a aita dite bolche tai akhane aita dewa hoyeche
//         'Content-type': 'application/json; charset=UTF-8',
//       },

//     body: JSON.stringify({ //JSON.stringify() method ar kaj hocche amra je  java object aakare data gulo send korbo take json format a convart kore nibe
//         id: 1,
//         title: 'foodipghosh',
//         body: 'bardipghosh',
//         userId: 100,
//     })
// })  
// .then((res)=>{
//     if(!res.ok){ // akhane bola hoyeche jodi res ok na hoy ba response code jodi ok na hoy
//         const messege= `error : ${res.status}`;
//         throw new Error(messege); // tahole akhan theke messege ar value ta throw hobe catch ar moddhe
//     }
//     return res.json(); // jodi res ok hoy ba res code ok hoy tahole ai code ta kaj korbe and value  gulo print korbe console a
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err));


////patch ar bebohar with fetch-------------------


// fetch('https://jsonplaceholder.typicode.com/posts/1',{ // akhane patch ar belai api ar sathe / diye bole dite hobe koto number ar ta amra update korte cacchi jemon ami akhane 1 no ta update korbo 
//     method: 'PATCH',

//     headers: {  // header ta akhane dite hobe karon aita fake api ai web page a aita dite bolche tai akhane aita dewa hoyeche
//         'Content-type': 'application/json; charset=UTF-8',
//       },

//     body: JSON.stringify({ //JSON.stringify() method ar kaj hocche amra je  java object aakare data gulo send korbo take json format a convart kore nibe
//         body: 'CHANGE PATCH'
        
//     })
// })  
// .then((res)=>{
//     if(!res.ok){ // akhane bola hoyeche jodi res ok na hoy ba response code jodi ok na hoy
//         const messege= `error : ${res.status}`;
//         throw new Error(messege); // tahole akhan theke messege ar value ta throw hobe catch ar moddhe
//     }
//     return res.json(); // jodi res ok hoy ba res code ok hoy tahole ai code ta kaj korbe and value  gulo print korbe console a
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err));


////// DELETE AR BEBOHAR WITH FETCH------------ 

// fetch('https://jsonplaceholder.typicode.com/posts/1',{ // akhane DELETE ar belai api ar sathe / diye bole dite hobe koto number ar ta amra DELETE korte cacchi jemon ami akhane 1 no ta DELETE korbo 
//     method: 'DELETE'

// })  
// .then((res)=>{
//     if(!res.ok){ // akhane bola hoyeche jodi res ok na hoy ba response code jodi ok na hoy
//         const messege= `error : ${res.status}`;
//         throw new Error(messege); // tahole akhan theke messege ar value ta throw hobe catch ar moddhe
//     }
//     return res.json(); // jodi res ok hoy ba res code ok hoy tahole ai code ta kaj korbe and value  gulo print korbe console a
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err));


// ------------------------------------------------------------------------------

///// fetch ar maddhome akti get request create kore take bivinno api diye barbar bebohar korar jonno--------

// const makerequest =async (api) =>{
//     const res = await fetch(api); // jehetu aita akta readablestreem return kore tai aitake porer line a jeson formate a convart kora hoyeche 

//     if(!res.ok){ // res jodi ok na hoy ootthat jodi response code jodi ok na hoy tahole if ar moddhe dhukbe
//         const messege = `Errow : ${res.status}`
//         throw new Error(messege); // and akhan theke error ta throw korbe catch ar moddhe 
//     }

//     const data = await res.json(); // r jodi kono error na thake tahole sora sori ai line a chole ashbe
//     return data; // and akhan theke data ta return kora hobe then ar moddhe 
// }


// const getData = () =>{
//     makerequest('https://jsonplaceholder.typicode.com/posts')

//     .then((res) =>console.log(res))
//     .catch((err) =>console.log(err))
// } 



// getData();






///// fetch ar maddhome akti post request create kore take bivinno api diye barbar bebohar korar jonno--------


// const makerequest =async (api, config) =>{
//     const res = await fetch(api,config); // jehetu aita akta readablestreem return kore tai aitake porer line a jeson formate a convart kora hoyeche 

//     if(!res.ok){ // res jodi ok na hoy ootthat jodi response code jodi ok na hoy tahole if ar moddhe dhukbe
//         const messege = `Errow : ${res.status}`
//         throw new Error(messege); // and akhan theke error ta throw korbe catch ar moddhe 
//     }

//     const data = await res.json(); // r jodi kono error na thake tahole sora sori ai line a chole ashbe
//     return data; // and akhan theke data ta return kora hobe then ar moddhe 
// }


// const sandData = () =>{
//     makerequest('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',

//         body: JSON.stringify({
//           title: 'foodip1',
//           body: 'bardip2',
//           userId: 10,
//         }),

//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//     .then((res) =>console.log(res))
//     .catch((err) =>console.log(err))
// } 



// sandData();




////////// fetch ar maddhome akti put request create kore take bivinno api diye barbar bebohar korar jonno--------



// const makerequest =async (api, config) =>{
//     const res = await fetch(api,config); // jehetu aita akta readablestreem return kore tai aitake porer line a jeson formate a convart kora hoyeche 

//     if(!res.ok){ // res jodi ok na hoy ootthat jodi response code jodi ok na hoy tahole if ar moddhe dhukbe
//         const messege = `Errow : ${res.status}`
//         throw new Error(messege); // and akhan theke error ta throw korbe catch ar moddhe 
//     }

//     const data = await res.json(); // r jodi kono error na thake tahole sora sori ai line a chole ashbe
//     return data; // and akhan theke data ta return kora hobe then ar moddhe 
// }


// const updateData = () =>{
//     makerequest('https://jsonplaceholder.typicode.com/posts/1',{ //UPDATE BA PUT METHOD BEBOHAR KORAR SOMOY OBOSSOI API AR PORE / DIYE BOLE DITE HOBE KOTO NUMBER TA AMI UPDATE KORTE CHACCHI... JEMON AKHANE AMI /1 DIYECHI TAR MANE 1 NUMBER TA UPDATE KORBO           method: 'PUT',
//         method: 'PUT',    
    
//         body: JSON.stringify({
//           title: 'foodip1',
//           body: 'bardip2',
//           userId: 10,
//         }),

//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//     .then((res) =>console.log(res)) //JEHE TU FETCH PROMISE RETURN KORE TAI AKHANE TADER HANDEL KORA HOYECHE....JODI KONO ERROR NA ASHE TAHOLE DATA AR VALUE RES AR MODDHE ASHBE AND RES AR VALUE CONSOLE A PRINT KORE DEKHABE 
//     .catch((err) =>console.log(err)) // JODI ERROR ASHE TAHOLE THROW ERROR TAKE CATCH AR MODDHE PATHIYE DIBE AND ERROR TA CONSOLE A PRINT KORE DEKHABE 
// } 



// updateData();




//////// fetch ar maddhome akti patch request create kore take bivinno api diye barbar bebohar korar jonno--------



// const makerequest =async (api, config) =>{
//     const res = await fetch(api,config); // jehetu aita akta readablestreem return kore tai aitake porer line a jeson formate a convart kora hoyeche 

//     if(!res.ok){ // res jodi ok na hoy ootthat jodi response code jodi ok na hoy tahole if ar moddhe dhukbe
//         const messege = `Errow : ${res.status}`
//         throw new Error(messege); // and akhan theke error ta throw korbe catch ar moddhe 
//     }

//     const data = await res.json(); // r jodi kono error na thake tahole sora sori ai line a chole ashbe
//     return data; // and akhan theke data ta return kora hobe then ar moddhe 
// }


// const updatesinglelineData = () =>{
//     makerequest('https://jsonplaceholder.typicode.com/posts/1',{ //SINGLELINEUPDATE BA PATCH METHOD BEBOHAR KORAR SOMOY OBOSSOI API AR PORE / DIYE BOLE DITE HOBE KOTO NUMBER TA AMI UPDATE KORTE CHACCHI... JEMON AKHANE AMI /1 DIYECHI TAR MANE 1 NUMBER TA UPDATE KORBO           method: 'PUT',
//         method: 'PATCH',    
    
//         body: JSON.stringify({
//           body: 'HELLO I AM PATCH'
          
//         }),

//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//     .then((res) =>console.log(res)) //JEHE TU FETCH PROMISE RETURN KORE TAI AKHANE TADER HANDEL KORA HOYECHE....JODI KONO ERROR NA ASHE TAHOLE DATA AR VALUE RES AR MODDHE ASHBE AND RES AR VALUE CONSOLE A PRINT KORE DEKHABE 
//     .catch((err) =>console.log(err)) // JODI ERROR ASHE TAHOLE THROW ERROR TAKE CATCH AR MODDHE PATHIYE DIBE AND ERROR TA CONSOLE A PRINT KORE DEKHABE 
// } 



// updatesinglelineData();




//////// fetch ar maddhome akti DELETE request create kore take bivinno api diye barbar bebohar korar jonno--------


const makerequest =async (api, config) =>{
    const res = await fetch(api,config); // jehetu aita akta readablestreem return kore tai aitake porer line a jeson formate a convart kora hoyeche 

    if(!res.ok){ // res jodi ok na hoy ootthat jodi response code jodi ok na hoy tahole if ar moddhe dhukbe
        const messege = `Errow : ${res.status}`
        throw new Error(messege); // and akhan theke error ta throw korbe catch ar moddhe 
    }

    const data = await res.json(); // r jodi kono error na thake tahole sora sori ai line a chole ashbe
    return data; // and akhan theke data ta return kora hobe then ar moddhe 
}


const deleteData = () =>{
    makerequest('https://jsonplaceholder.typicode.com/posts/1',{ //DELETE METHOD BEBOHAR KORAR SOMOY OBOSSOI API AR PORE / DIYE BOLE DITE HOBE KOTO NUMBER TA AMI DELETE KORTE CHACCHI... JEMON AKHANE AMI /1 DIYECHI TAR MANE 1 NUMBER TA DELETE KORBO           method: 'PUT',
        method: 'DELETE'    
     
    })

    .then((res) =>console.log(res)) //JEHE TU FETCH PROMISE RETURN KORE TAI AKHANE TADER HANDEL KORA HOYECHE....JODI KONO ERROR NA ASHE TAHOLE DATA AR VALUE RES AR MODDHE ASHBE AND RES AR VALUE CONSOLE A PRINT KORE DEKHABE 
    .catch((err) =>console.log(err)) // JODI ERROR ASHE TAHOLE THROW ERROR TAKE CATCH AR MODDHE PATHIYE DIBE AND ERROR TA CONSOLE A PRINT KORE DEKHABE 
} 



deleteData();