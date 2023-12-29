// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to remove the pollution of global scope

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){                            // named IIFE
    console.log(`DB CONNECTED`);
})();                              // here ; is required ..............  IIFE Function called

// SYNTAX

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// })()

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })()


((name) => {                                 // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Gauri')