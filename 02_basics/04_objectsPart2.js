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
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1 , obj2}

/*------------SYNTAX FOR COMBINING TWO OBJECTS---------- */
const obj3 = Object.assign(obj1, obj2)   
console.log(obj3);