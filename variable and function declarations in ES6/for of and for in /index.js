//for...of  and  for...in 

// const names =["s1","s2","s3"];
// for(let name of names){ //akhane for of syntex bebohar kora hoyeche and names theke akta akta kore element name ar moddhe jabe   
//     console.log(name); //and akhane name ke print kora hoyeche
// }



// for in ar bebohar------------------

let student ={
    id:101,
    name:"dip ghosh",
    cgpa:3.91
}

for(let x in student){
    //console.log(x); // akhane key gulo dekhabe console a jemon id name cgpa 
    //console.log(student[x]); //akhane student object ar value gulo print korbe 
    console.log(`${x} : ${student[x]}`); //key value aksathe print korar jonno 
}