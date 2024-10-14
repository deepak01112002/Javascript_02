let obj = {
    a : 1,
    b : 2,
    c : 3
}

let a = {
    ...obj,
    d : 4,
    e : 5
}

let arr = [1,2,3,4,5,6]

let newA = [...arr,7,8]

console.log(newA)