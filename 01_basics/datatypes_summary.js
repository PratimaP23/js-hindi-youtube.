// Primitive

// 7 types : String , Number , Boolean , null(empty) , undefined , symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId );

 const bigNumber = 345678293648937583n


// Reference (Non primitive)

// Array , Objects , Functions  // datatypes of non primitive = object

const heros = ["saktiman","naagraj","doga"];
let myObj ={
        name : "hitesh",
        age :  22,

}

const myFunction = function(){
      console.log("Hello World");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "hiteshchoudarydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
      email : "user@google.com"
      upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
Console.log(userTwo.email);
