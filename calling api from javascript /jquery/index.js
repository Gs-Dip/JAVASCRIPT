console.clear();


//console.log(window); ///akhane chack kora hoyeche jquery ta amader window ba browser a add hoyeche ki na

////// get method ar bebohar with jquery------------- 

// const makeRequest = async (api , method) =>{ 
//     const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
//         url: api,
//         method: method
//     })

//     return result;
// }


// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","GET")
//     .then((res)=>console.log(res))
    
// }


// getData();



//// oporer code a error handel korar jonno-----------

// const makeRequest = async (api , method) =>{ 
//    try{

//     const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
//         url: api,
//         method: method
//     })

//     return result;


//    }
//    catch(err){
//        console.log(err);
//    }
// };


// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","GET")
//     .then((res)=>console.log(res))
    
// }


// getData();






// ////// post method ar bebohar with jquery------------- 


// const makeRequest = async (api , method ,data) =>{ 
//     try{
 
//      const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
//          url: api,
//          method: method,
//          data:data
//      })
 
//      return result;
     
 
//     }
//     catch(err){
//         console.log(err);
//     }
//  };
 
 
//  const sandData = () =>{
//      makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
//         title: 'studentinfo',
//         body: 'iam a dip ghosh',
//         userId: 101,
//       })
//      .then((res)=>console.log(res))
     
//  }
 
 
// sandData();







// ////// put method ar bebohar with jquery------------- 


// const makeRequest = async (api , method ,data) =>{ 
//     try{
 
//      const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
//          url: api,
//          method: method,
//          data:data
//      })
 
//      return result;
     
 
//     }
//     catch(err){
//         console.log(err);
//     }
//  };
 
 
//  const updateData = () =>{
//      makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{ ///akhane ami 1 no id ta update korbo ba change korbo
//         title: 'studentinfo1234565',
//         body: 'iam a dip ghosh54894514',
//         userId: 102,
//       })
//      .then((res)=>console.log(res))
     
//  }
 
 
// updateData();


// ////// patch method ar bebohar with jquery------------- 


// const makeRequest = async (api , method ,data) =>{ 
//     try{
 
//      const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
//          url: api,
//          method: method,
//          data:data
//      })
 
//      return result;
     
 
//     }
//     catch(err){
//         console.log(err);
//     }
//  };
 
 
//  const updatesinglelineData = () =>{
//      makeRequest("https://jsonplaceholder.typicode.com/posts/1","PATCH",{ ///akhane ami 1 no id ta singlelineupdate korbo ba change korbo
//         title: 'patching this title'
        
//       })
//      .then((res)=>console.log(res))
     
//  }
 
 
// updatesinglelineData();





////// delete method ar bebohar with jquery------------- 


const makeRequest = async (api , method ,data) =>{ 
    try{
 
     const result= await $.ajax({  //await bebohar korle obbosoi function a async bebohar korte hobe tahole response ta amra sora sori console print korte parbo----
         url: api,
         method: method,
         data:data
     })
 
     return result;
     
 
    }
    catch(err){
        console.log(err);
    }
 };
 
 
 const deleteData = () =>{
     makeRequest("https://jsonplaceholder.typicode.com/posts/1","DELETE" ) ///akhane ami 1 no id ta delete korbo
       
     .then((res)=>console.log(res))
     
 }
 
 
deleteData();