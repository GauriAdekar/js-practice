// var c = 300

let a = 100
if(true)
{
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

/********************* NESTED SCOPE **************/

function one ()
{
    const username = "Gauri"

    function two()
    {
        const website = "youtube"
       // console.log(username);
    }
    console.log(website);
    two()
}
//one()

if(true)
{
    const username = "Gauri"
    if(username === "Gauri")
    {
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

addOne(5)
function addOne(num)
{
    return num + 1
}
// this will not give error becoz it is only declared

addTwo(4)
const addTwo = function(num){                             // sometimes called as expression
    return num + 2                                        // HOISTING
}
// this gives error becoz it is initialized