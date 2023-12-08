/*  
    Javascript is dynamically typed language
    Becoz there is no need to define a datatype of value 
*/

// Basically there are two types of datatypes

//-------------------- 1) Primitive Datatype--------------------------------
// There are 7 types =>
// string,number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 11.34
const isLoggedIn = false
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);
const bigNumber = 876554433566778



//-------------------- 2) Reference (NonPrimitive Datatype)-----------------------
// Array,Objects,functions

const heros = ["shaktiman","nagraj","doga"];
let myobj =
{
    name: "Gauri",
    age: 23
}


const myFunction = function()
{
console.log("Hello world");
}  


//  To know the type of any variable use typeof 
console.log(typeof anotherid);


/*------------------------Ecma link-------------------------- */

// https://262.ecma-international.org/5.1/#sec-11.4.3          