// You have an array of strings representing names. Write a function to find the index of the first name that starts with the letter 'A'. If no such name exists, return -1. Use the findIndex method.
// : ['John', 'Alice', 'Bob', 'Amanda']
// : 1


// let arr = ['John', 'Alice', 'Bob', 'Amanda']
// for(let x=0; x<arr.length; x++){
//     if(arr[x][0] == 'A'){
//         console.log(x)
//         break;
//     }
// }


// console.log(arr.findIndex((el)=>el[3] == 'A'))



let num  = ['hello', 'world', 'javascript']

// console.log(num.includes(15))



// console.log(num.some((el)=>el>0))

// console.log(num.indexOf(-88))


let a = num.map((el)=>{
    return el[0].toUpperCase() + el.slice(1)
})

console.log(a)





