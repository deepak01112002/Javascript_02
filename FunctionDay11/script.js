// const addNumbers = (num1,num2)=>{
//     let result = num1 + num2
//    return result
// }


// let a = addNumbers(5,7)
// console.log(a)


function double(a){
   return 2 * a
}

const square =(b)=>{
   return b * b;
}


function doubleSquare(num){
    let a = double(num)
    let b = square(a)
    return b;
}


console.log(doubleSquare(3))