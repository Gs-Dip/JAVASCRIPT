////axios ar bebohar----(chack note book)-----------------------

console.clear();

// jokhon amra html a axios ar script add korbo tokhon amra window te axios dekhte pabo 
//console.log(window); //axios bydefult browser a thakbe na ba window te thakbe na ta chack korar jonno


/////get method ar bebohar with axios----------

// axios.get("https://jsonplaceholder.typicode.com/posts/101") ///then jehetu promise return kore tai take handel korar jonno then catch bebohar korte hobe .....and akhane ami eecha kore 101 diyechi error ashar karone...karon ai khane 1 theke 100 porjonto data ache....error ar jonno ba error throw  korar jonno kono extra code likhte hoy na axios ar khettre...axios autometic error throw kore catch ar moddhe 
// /////.then((res)=>console.log(res)); ///aita dara amara dekhte pabo res ar moddhe ki ki ahce
// .then((res)=>console.log(res.data)) // amra res theke data take print korechi.....
// .catch((err)=>console.log(err));



/////post method ar bebohar with axios----------

// axios.post("https://jsonplaceholder.typicode.com/posts",{ /// jokhon amra data post kobo tokhon sei data ta sobar pore jaiya add hobe 
//     method: 'POST', ///aikhane method na bolleo hobe  karon opore axios.post agei bole dewa hobe

//     body: JSON.stringify({
//       title: 'DIP GHOSH',
//       body: 'HE IS A STUDENT',
//       userId: 101,
//     }),
    
// })

// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


/////put method ar bebohar with axios----------


// axios.put("https://jsonplaceholder.typicode.com/posts/100",{ /// put  ar mane hocche update kora....amra je object take update ba change korte chacchi seita ami ar sathe / diye bole dite hobe  
//     method: 'PUT', ////aikhane method na bolle oo hobe

//     body: JSON.stringify({
        
//       title: 'DIP GHOSH1',
//       body: 'HE IS A STUDENT1',
//       userId: 101,
//     }),
    
// })

// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));



/////patch method ar bebohar with axios----------


// axios.put("https://jsonplaceholder.typicode.com/posts/100",{ /// patch  ar mane hocche single line update kora....amra je object take update ba change korte chacchi seita ami ar sathe / diye bole dite hobe  
//     method: 'PATCH', ////aikhane method na bolle oo hobe

//     body: JSON.stringify({
        
//       title: 'dibbo GHOSH1'
      
//     }),
    
// })

// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));




/////delete method ar bebohar with axios----------


// axios.delete("https://jsonplaceholder.typicode.com/posts/100") /// delete  ar mane hocche delete  kora....amra je object take delete korte chachi tar id ta api ar sathe / diye bole dite hobe  
    
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));



// -----------------------------------------------------------------

//async  await bebohar kore axios ar get method bivinno api ar jonno bebohar koarar jonno ------------

// const makerequest= async (config) =>{
//     return await axios(config);
// }


// const gateData =() =>{
//     makerequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// } 


// gateData();




//async  await bebohar kore axios ar post method bivinno api ar jonno bebohar koarar jonno ------------



// const makerequest= async (config) =>{
//     return await axios(config);
// }


// const sandData =() =>{
//     makerequest({
//         url:'https://jsonplaceholder.typicode.com/posts',
//         method:'POST',
//         data:JSON.stringify({
//             title:'dipghoshdip',
//             body:'he is a student',
//             userid:2
//         })
//     })


//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// } 


// sandData();






// //async  await bebohar kore axios ar put method bivinno api ar jonno bebohar koarar jonno ------------



// const makerequest= async (config) =>{
//     return await axios(config);
// }


// const updateData =() =>{
//     makerequest({
//         url:'https://jsonplaceholder.typicode.com/posts/1', // 1no id take akhene update kora hoyeche put method diye  
//         method:'PUT',
//         data:JSON.stringify({
//             title:'dipghoshdip',
//             body:'he is a student',
//             userid:2
//         })
//     })


//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// } 


// updateData();





// //async  await bebohar kore axios ar patch method bivinno api ar jonno bebohar koarar jonno ------------



// const makerequest= async (config) =>{
//     return await axios(config);
// }


// const updatesinglelineData =() =>{
//     makerequest({
//         url:'https://jsonplaceholder.typicode.com/posts/1', // patch ar maddome single line update kora jei jemon ami akhane 1no id take akhene single line update korechi........
//         method:'PATCH',
//         data:JSON.stringify({
            
//             body:'he is a student123'
            
//         })
//     })


//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err))
// } 


// updatesinglelineData();





//async  await bebohar kore axios ar patch method bivinno api ar jonno bebohar koarar jonno ------------



const makerequest= async (config) =>{
    return await axios(config);
}


const deleteData =() =>{
    makerequest({
        url:'https://jsonplaceholder.typicode.com/posts/1', // delete ar maddome id ba data delete  kora jai jemon ami akhane 1no id take akhane delete korechi.......
        method:'DELETE'
        
    })


    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
} 


deleteData();





