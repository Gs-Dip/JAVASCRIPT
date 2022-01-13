// promise ar bebohar-------------

// console.log("welcome");
// //how to create a promise---
// const  promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = false;
//     if(completedPromise){
//         resolve("compleated promise 1");
//     }

//     else{
//         reject("reject promise 1");
//     }
// })  
// promise1
//     .then((res) =>{
//       console.log(res);
//     })
//     .catch((err) =>{
//        console.log(err);
//     });

// console.log("end");



///othoba -----------------------

//console.log("welcome");
//how to create a promise---
// const  promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = false;
//     if(completedPromise){
//         resolve("compleated promise 1");
//     }

//     else{
//         reject(new Error("reject promise 1")); //avabe korle error ta deteals a dekhabe
//     }
// })  
// promise1
//     .then((res) =>{
//       console.log(res);
//     })
//     .catch((err) =>{
//        console.log(err);
//     });
    
// console.log("end");



///// create another promise here--------------

// const promise2 = new Promise((resolve , reject) =>{
//     resolve("completed promise 2");
// }) 


// promise2.then((res)=>{
//     console.log(res);
// })



////// onek gulo promise ke aksathe bebohar korar jonno----------


// console.log("welcome");
// //how to create a promise---
// const  promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("compleated promise 1");
//     }

//     else{
//         reject("reject promise 1");
//     }
// })  




// const promise2 = new Promise((resolve , reject) =>{
//     resolve("completed promise 2");
// }) 



// Promise.all([promise1,promise2]).then((res) => console.log(res));
 

// console.log("end");



/////////////// race function ar bebohar-----------

// console.log("welcome");
// //how to create a promise---
// const  promise1 = new Promise((resolve,reject)=>{
    
//         setTimeout(() =>{
//             resolve("completed promise 1");
//         },2000)
    
// })  




// const promise2 = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve("completed promise 2");
//     },1000)
// }) 



// Promise.race([promise1,promise2]).then((result) => console.log(result)); //race function ar kaj hoche jei promise ta aage resolve hobe take print korbe and take niyei kaj korbe
 

// console.log("end");





////// promise  part-2 (java script 78 no video)-------------------

const task1 = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task1 is not completed");
    })
}

const task2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve("task2 is completed");
        },2000)
    })
}


const task3 = () =>{
    return new Promise((resolve,reject)=>{
        reject("task3 is not completed");
    })
}


const task4 = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task4 is completed");
    })
}


task1().then((res) =>{ 
    console.log(res)
})

.then(task2)
.then((res)=>{
    console.log(res)
})


.then(task3)
.then((res)=>{
    console.log(res)
})


.then(task4)
.then((res)=>{
    console.log(res)
})

.catch((err)=>{  // jotogulo promise thak na keno tar jonno akta catch e jotheshto error handel korar jonno 
    console.log(err) 
})