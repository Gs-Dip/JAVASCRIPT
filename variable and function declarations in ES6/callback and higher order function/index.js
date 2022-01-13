//// callback and higher order function-----------
// function square(x){
//     console.log(`square of ${x} : ${x*x}`);

// }

// //square(2);
// //othoba------------
// const y = square  
// y(2);


///////////higher order function -------(CHACK NOTE BOOK)-------

// function higherOrderFunction(num , callback){
//     callback(5)
// }

// higherOrderFunction(6, square);


///// callback function bebohar kore aktar por akta task print korar niyom--------------- 

// const task1 = (callback) =>{
//     console.log("task1");
//     callback();
// }



// const task2 = (callback) =>{
//     setTimeout(() =>{
//         console.log("tesk2. Data loading");
//         callback();
//     }, 2000); //asynchronous akhane ki kobe jehetu ai task ta compleate hote 2 sec somoy lagbe tai ai task ta compleate hoya porjonto asynchronous waite korbe na....oooo poroborti task a move korbe....and sheshe giye task2  print korbe  
// }


// const task3 = (callback) =>{
//     console.log("task3");
//     callback();
// }


// const task4 = () =>{
//     console.log("task4");
// }


// task1(function f1(){  //akhane protiti function ar moddhe callback function bebohar kora hoyeche and akhane protiti callback function ke dhore dhore bola hoyeche task1 ar por task2 task3 task4 print korbe
//     task2(function f2(){
//         task3(function f3(){
//             task4();
//         });
//     });
// });


//// othoba same kaj tai arrow function bebohar kore kora hoyeche-------


const task1 = (callback) =>{
    console.log("task1");
    callback();
}



const task2 = (callback) =>{
    setTimeout(() =>{
        console.log("tesk2. Data loading");
        callback();
    }, 2000); //asynchronous akhane ki kobe jehetu ai task ta compleate hote 2 sec somoy lagbe tai ai task ta compleate hoya porjonto asynchronous waite korbe na....oooo poroborti task a move korbe....and sheshe giye task2  print korbe  
}


const task3 = (callback) =>{
    console.log("task3");
    callback();
}


const task4 = () =>{
    console.log("task4");
}


task1( () => {  //akhane protiti function ar moddhe callback function bebohar kora hoyeche and akhane protiti callback function ke dhore dhore bola hoyeche task1 ar por task2 task3 task4 print korbe
    task2( () =>{
        task3( ()=>{
            task4();
        });
    });
});


///button ar kaj akhane kora hoyeche------
//asynchronous proggraming---

// console.log("hi");

// var button = document.querySelector("button");

// button.addEventListener("click" , () =>{
//     console.log("buttton is click");
// })

// console.log("bye");