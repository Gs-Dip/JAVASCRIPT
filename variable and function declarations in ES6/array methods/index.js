////array methods
// find(callback,value)  method ar bobohar kore array theke jor sonkhar ber korar niyom--------

// let numbers =[5,55,14,5,78];
// let firstEvenNumber= numbers.find(x => x%2 == 0);

// console.log(firstEvenNumber);


// same work to another way--------------------

//find(callback,value)  method ar bobohar--------

// let numbers =[5,55,14,5,78];

// const evennumber = (value,index,array) =>{
//     if(value%2 == 0){
//         return value;
//     }
// }


// let firstEvenNumber= numbers.find(evennumber);

// console.log(firstEvenNumber);


///findIndex(callback,value) method ar bebohar kore array theke jor sonkhar index position ber korar niyom----------------

// let numbers =[5,55,14,5,78];

// const evennumber = (value,index,array) =>{
//     if(value%2 == 0){
//         return value;
//     }
// }

// const evenNumberIndex= numbers.findIndex(evennumber); 

// console.log(evenNumberIndex);



///array object ar moddhe find and findIndex method ar bebohar----------------------
const studentinfo= [
    {
       id:101,
       gpa:2.10
    },

    {
        id:102,
        gpa:3.10
    },


    {
        id:103,  ///prothomei ai element ar sathe find ar condition milbe tai atai print korbe........karon find prothome je element ar sathe tar condition match kore takei print kore    
        gpa:4.10
    },

    {
        id:104,
        gpa:5
    }


]  


console.log(studentinfo.find(x => x.gpa>4));
