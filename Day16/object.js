
// let obj = {
//     key : value
// }


let student1 = {
    name : "Deepak Pandey",
    class : "12th",
}
let student2 = {
    name : "Hemang",
    class : "10th",
}
let student23 = {
    name : "Dholakpur",
    class : "8th",
}

let singing = [student1,student2,student23]


let cartProducts = [
    {title : "shirt", price : 50},
    {title : "Jeans", price : 1250},
    {title : "Towel", price : 150},
    {title : "Towel", price : 150}
]
let a;
let ans = 0;
// for(let x=0; x<cartProducts.length; x++){
//     // a = cartProducts[x].price;
//     //  ans = ans + a;
//     ans += cartProducts[x].price
// }

cartProducts.forEach((el)=>{
    ans +=el.price
})
console.log(ans)