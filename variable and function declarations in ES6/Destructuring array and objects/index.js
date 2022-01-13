// array destructure----------------------

// let numbers = [1,2,3,4,5];

// let [num1,num2,num3,num4,num5] = numbers //aitake array distructur bole..... numbers array theke akta akta kore value ar array ar moddhe store hobe jemon 1 jabe num1 aaa and 2 jabe num2 te.....   

// console.log(num1);



// array destructure with spread operator----------------------


// let numbers = [1,2,3,4,5];

// let [num1,num2, ...z] = numbers //aitake array distructur bole..... numbers array theke akta akta kore value ar array ar moddhe store hobe jemon 1 jabe num1 aaa and 2 jabe num2 te.....   

// console.log(z);



// destructure ar maddhome soyaping korar niyom----------


// let a=10 ,b =20;
// [a,b]=[b,a] // akhane soyaping kora hoyeche oothat b ar value a ar moddhe and a ar value b ar moddhe pass kora hoyech
// console.log(a);
// console.log(b);



//object ke destructure  korar niyom-------------
// sadharon niyom------------
// const studentinfo={
//     id:101,
//     fullname:"dip ghosh",
//     gpa:4.40
// }

// console.log(studentinfo.fullname);
// console.log(studentinfo.id);
// console.log(studentinfo.gpa);

//same work with es6 freture object destructure--------

// const studentinfo={
//     id:101,
//     fullname:"dip ghosh",
//     gpa:4.40
// }

// const {id,fullname} = studentinfo //akhane studentinfo object ke destructure kora hoyeche ooothat studentinfo theke id ta id ar moddhe giye store hobe and fullname ta fullname ar moddhe giye store hobe studentinfo object  theke 

// console.log(fullname);
// console.log(id);


////nested object ke destructure korar niyom-----(akti object ar moddhe akadhik object thakle take nasted object bole)

// const studentinfo={
//     id:101,
//     fullname:"dip ghosh",
//     gpa:4.40,
//     language:{
//         native:"bangla",
//         beginner:"english"
//     }
// }

// const {fullname , language} = studentinfo //akhane studentinfo object ke destructure kora hoyeche ooothat studentinfo theke id ta id ar moddhe giye store hobe and fullname ta fullname ar moddhe giye store hobe studentinfo object  theke 

// console.log(fullname);
// console.log(language.native);



// function peramiter ke destructure korar niyom--------

// const studentinfo = ({id , fullname ,gpa}) => { // akhane student peramiter ke destructure kora hoyeche jehetu student peramiter akti object tai {} ar moddhe destructure kora hoyeche 
//     console.log(`${id} , ${fullname} ,${gpa}`) // akhane template litteral bebohar kora hoyeche

// }


// const student= {
//     id:101,
//     fullname:"dip ghosh",
//     gpa:4.20
// }


// studentinfo(student);

/// sadharon niyome--------

// const studentinfo = (student) => { 
//     console.log(`${student.id} , ${student.fullname} ,${student.gpa}`)

// }


// const student= {
//     id:101,
//     fullname:"dip ghosh",
//     gpa:4.22
// }


// studentinfo(student);