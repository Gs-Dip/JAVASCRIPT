// synchronous programing-----------------

// console.log("Task1"); // ai task ta compleate na howa porjonto poroborti task a move korbe na
// console.log("task2");
// console.log("task3");


//othoba -------------------------

// const task1 = () =>{
//     console.log("task1");
// }


// const task2 = () =>{
//     console.log("task2");
// }


// const task3 = () =>{
//     console.log("task3");
// }


// const task4 = () =>{
//     console.log("task4");
// }


// task1();
// task2();
// task3();
// task4();


// asynchronous programming------------------


const task1 = () =>{
    console.log("task1");
}


const dataloading = () =>{
    console.log("tesk2. Data loading");
}


const task2 = () =>{
    setTimeout(dataloading, 2000); //asynchronous akhane ki kobe jehetu ai task ta compleate hote 2 sec somoy lagbe tai ai task ta compleate hoya porjonto asynchronous waite korbe na....oooo poroborti task a move korbe....and sheshe giye task2  print korbe  
}


const task3 = () =>{
    console.log("task3");
}


const task4 = () =>{
    console.log("task4");
}


task1();
task2(); // jehetu aita compleate hote somoy lagbe tai asynchronous aitake background a run korbe...and sobar seshe print korbe 
task3();
task4();


///othoba----------

const task1 = () =>{
    console.log("task1");
}



const task2 = () =>{
    setTimeout(() =>{
        console.log("tesk2. Data loading");
    }, 2000); //asynchronous akhane ki kobe jehetu ai task ta compleate hote 2 sec somoy lagbe tai ai task ta compleate hoya porjonto asynchronous waite korbe na....oooo poroborti task a move korbe....and sheshe giye task2  print korbe  
}


const task3 = () =>{
    console.log("task3");
}


const task4 = () =>{
    console.log("task4");
}


task1();
task2(); // jehetu aita compleate hote somoy lagbe tai asynchronous aitake background a run korbe...and sobar seshe print korbe 
task3();
task4();