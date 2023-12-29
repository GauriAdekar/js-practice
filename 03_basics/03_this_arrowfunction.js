// this gives the current context

const user = {
    username: "Gauri",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, just loggedin`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Gauri"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Gauri"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Gauri"
    console.log(this);
}
//chai()

/***************** SYNTAX **************/
// ()=>{}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2              // implicit return 

// const addTwo = (num1, num2) => (num1 + num2)         // for () there is no need to use return keyword 

const addTwo = (num1, num2) => ({username:"Gauri"})     // for object

console.log(addTwo(2,3));

const myArray = [2,5,6,8]             // for array
myArray.forEach(() => {})