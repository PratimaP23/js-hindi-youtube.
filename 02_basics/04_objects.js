// const thiderUser = new Object() //singleton object
const thiderUser ={}    //non singleton object

thiderUser.id = "123abc"
thiderUser.name = "Sammy"
thiderUser.isLoggedIn = false

// console.log(thiderUser);

const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2,obj4) 

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(thiderUser);

console.log(Object.keys(thiderUser));
console.log(Object.values(thiderUser));
console.log(Object.entries(thiderUser));
console.log(thiderUser.hasOwnProperty('isLoggedIn'));



