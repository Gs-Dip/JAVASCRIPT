// async  and await  ar bebohar------(chack note book)-------------

// const task1 = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve("task1 is completed");
//     })
// }

// const task2 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("task2 is completed");
//         },2000)
//     })
// }


// const task3 = () =>{
//     return new Promise((resolve,reject)=>{
//         reject("task3 is not completed");
//     })
// }


// const task4 = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve("task4 is completed");
//     })
// }

 
// //traditional function bebohar kore async  await ar bebohar---------- 

// async function callalltasks(){
//    try{
//     const t1 = await task1(); //await ar samne jei promise ta thakbe sheita compleate na howa porjonto onno kono task ba promis a move korbe na....   jokhon await ke call korbo tokhon obossoi sei function ta async hote hobe
//     console.log(t1);

//     const t2 = await task2();
//     console.log(t2);


//     const t3 = await task3(); //akhane error ashbe and catch setake dhore console a print kore dibe
//     console.log(t3);

//     const t4 = await task4();
//     console.log(t4);
//    }

//    catch(err) {
//        console.log(err);
//    }
// } 

// callalltasks();



///arrow function bebohar kore async await ar bebohar----------

const task1 = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task1 is completed");
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

 
//arrow function bebohar kore async  await ar bebohar---------- 

const callalltasks = async () => {
   try{
    const t1 = await task1(); //await ar samne jei promise ta thakbe sheita compleate na howa porjonto onno kono task ba promis a move korbe na....   jokhon await ke call korbo tokhon obossoi sei function ta async hote hobe
    console.log(t1);

    const t2 = await task2();
    console.log(t2);


    const t3 = await task3(); //akhane error ashbe and catch setake dhore console a print kore dibe
    console.log(t3);

    const t4 = await task4();
    console.log(t4);
   }

   catch(err) {
       console.log(err);
   }
} 

callalltasks();