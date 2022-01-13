///general niyom a jemon----------------

// "use strict" //akhane strict mood take on kore niyeche

// function num(x,y,z){
//     return x + y + z;
// }

// let numbers=[1,2,3];

// console.log(num(numbers[0], numbers[1], numbers[2]));




///oporer kajti sohoje korar jonno spread operator bebohar ------

// "use strict" //akhane strict mood take on kore niyeche

// function num(x,y,z){
//     return x + y + z;
// }

// let numbers=[1,2,3];

// console.log(num(...numbers)); //akhane ami  ...numbers aitar maddhome numbers array ar value gulo num function ar moddhe pass kore diche.......and ...aita hocche spread operator ar syntex


///spread operator ar maddhome akti array ar sathe aarekti array add korar jonno -----------------

// let x = [1,2,3]; 

// let y = [...x,4,5,6];

// console.log(y);



////concatination with 2 array

// let number1 =[1,2,3];
// let number2 =[4,5,6,7];
// let number=number1.concat(number2);
// console.log(number);

//same work with spread operator

// let number1 =[1,2,3];
// let number2 =[4,5,6,7];
// let number=[...number1,...number2];
// console.log(number);


////2 ti object ke spread operator ar maddhome concatination ba jog kora-------

let p1 ={
    name:"dip ghosh",
    age:21
}

let p2 ={
    nationality:"Bangladeshi",
    occupation:"student"
}

let p = {...p1,...p2};
console.log(p);