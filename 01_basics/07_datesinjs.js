// Date is a object in js.......

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)          //  months starts from 0 in js
// console.log(myCreatedDate.toDateString());

// let mycDate = new Date(2012,5,9,5,6)
// console.log(mycDate.toLocaleString());

// let mycDate = new Date("2023-01-14")           // YY-MM-DD
//console.log(mycDate.toLocaleString());

let mycDate = new Date("01-14-2023")              // MM-DD-YY
// console.log(mycDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycDate.getTime());

//console.log(Math.floor(Date.now()/1000));         // to convert into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());

// `${newDate.getDate()} and the time is`

newDate.toLocaleString('default', {                                     // ctrl space for properties
weekday: "long",
})






