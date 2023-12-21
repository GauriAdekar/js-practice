// const tinderUser = new Object()    // ---------------- singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Gauri"
tinderUser.isLoggedIn = false
// console.log(tinderUser);             // ----------------non singleton object

const regularUser = {
    email:"gauri@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gauri",
            lastname:"Adekar"
        }
    }
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
//const obj3 = {obj1 , obj2}

/*------------SYNTAX FOR COMBINING TWO OBJECTS---------- */
//const obj3 = Object.assign({},     obj1, obj2, obj4)  
                        // targate source

const obj3 = {...obj1, ...obj2, ...obj4}  
//console.log(obj3);

const users = [
    {
        id:"1",
        email:"g@gmail.com"
    },
    {
        id:"2",
        email:"gauri@gmail.com"
    }

]
console.log(users[1].email)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));