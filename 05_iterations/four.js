const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    //console.log(programming[key]);       //be can apply forin loop object as well an array but int array in forof print  
}                                          //directly by index but forin index with arr

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , 'United states of America')
// map.set('Fr' , "France")
// map.set('IN' , "India")

// for (const key in map) {
//     console.log( key);    //forin map can't iterate object it does't gives error but without giving ans it 
// }                         //simply trmuninate
