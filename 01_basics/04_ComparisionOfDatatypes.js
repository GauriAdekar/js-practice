// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

//console.log("2" < 1);

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);

/*--------The reason is that an equality check == and comparisions ><>= <= work differentlty.
----------Comparisions convert null to a number, treating it as 0.
----------Thats why (3) null >= 0 is true and(1) null >0 is false */
// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined <= 0);

// === strict check  ------------ not only checks the data also checks the datatype
console.log("2" === 2);