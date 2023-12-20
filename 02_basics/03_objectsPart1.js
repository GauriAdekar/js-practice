// singleton 
// object literals

// two ways of craeting object
  // 1) Object.create       ----------- called by constructor called singleton 
  // object literals
  // 2) const JsUer = {}


  const mySym = Symbol("key1")
  const JsUer = {
    name:"Gauri",
    age:23,
    // mySym : "mykey1",          // this syntax gives a symbol as a string 
    [mySym]: "mykey1",            // use this syntax for symbol
    "full name":"Gauri Adekar",
    location:"Pune",
    email:"gauri123@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
  }

  // console.log(JsUer.email);
  // console.log(JsUer["email"]);
  // console.log(JsUer["full name"]);     // always uses [] becaz it is a string
  // console.log(JsUer[mySym]);     // this syntax gives a symbol as a string

  /* To change the values in the object use = */
  JsUer.email = "adekar5555@yahoo.com"
  //console.log(JsUer.email);

  /* To freeze the object */
  // Object.freeze(JsUer)
  JsUer.email = "adekar@yahoo.com"
  //console.log(JsUer);

  JsUer.greetings = function(){
    console.log("Hello JS User");
  }

  JsUer.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   // refering to the name in the object.
  }
  console.log(JsUer.greetings());
  console.log(JsUer.greetingsTwo());


  
