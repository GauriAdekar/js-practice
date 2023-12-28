function sayMyName ()
{
    console.log("G");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("i");
}
sayMyName    // --------------REFERNCE
//sayMyName()  // -------------- EXECUTION


// function addTwoNumbers(num1,num2)   // -------------here num1 and num2 called as parameters
// {
// console.log(num1+num2);
// }
addTwoNumbers(2,3)            // ----------------- here 2 and 3 called as arguments

function addTwoNumbers(num1,num2)   // -------------here num1 and num2 called as parameters
{
    // 1st way
// let result = num1+num2
// return result 
    // 2nd way
    return num1+num2
}

const result = addTwoNumbers(2,3)
//console.log("Result: ", result);

// function uselogin(username)
// {
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function uselogin(username = "Sam")
{
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(uselogin("Gauri"))

// ... is also called as a rest and spread operator depends on the condition
// ... here is REST operator
function calculateCartPrice(...num1)
{
    return num1
}
//console.log(calculateCartPrice(200,300,500));

/******* TO PASS OBJECTS TO THE FUNCTION  ****************/ 
const user = {
    username: "Gauri",
    price: 199
}
function handledObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handledObject(user)
handledObject({
    username: "Sam",
    price: "399"
})
  
/********** TO PASS ARRAY INTO THE FUNCTION ************/ 
const myNewArray = [200,400,600,100]
function returnSecondValue(getArray)
{
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,800,700]));