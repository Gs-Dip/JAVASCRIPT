// forEach , map , filter-----------------


//foreach bebohar kore akti array ar element niye seguloke squre kore onno array te push kora 
// var number = [10,20,30,40];

// var squrenumber =[];

// number.forEach(function(x){
//     squrenumber.push(x*x)
// });

// console.log(squrenumber);


////oporer oi kajta amra khub sohoje korte pari map function ar maddhome------

// var number = [10,20,30,40];

// var squrenumbers = number.map(function(x){ //jehetu map new array return kore tai akhane array declear kore dei nai...
//     return x*x; // akhane x ar man squre hoye return hobe squrenumbers ar moddhe
// });

// console.log(squrenumbers);


////filter function ar bebohar (for konw more about filter function chack java script note book)
/////filter function bebohar kore 10 ar theke boro sonkha gulo akti notun array ar moddhe rakhar jonno,,,,,,,,,,and filter function o array retur kore   
var number = [22,31,4,5,35,26,78];

var newnumbers = number.filter(function(x){ //jehetu filter functon new array return kore tai akhane array declear kore dei nai...and number variable theke akta akta kore sonkha x ar moddhe ashbe   
    return x>10; // akhane x ar man jegulo 10 ar theke boro hobe shei  sonkha gulo return korbe newnumbers ar moddhe
});

console.log(newnumbers);
