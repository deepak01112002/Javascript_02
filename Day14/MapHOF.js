let arr = [3,15,20,5,15,25,15];
//HOf -> map
// let ans = []
// for(let x=0; x<=arr.length-1 ; x++){
//    if(arr[x]% 3 == 0 && arr[x] % 5 == 0){
//      ans.push(arr[x])
//    }
// }
// console.log(ans)

arr.some((el)=>{
   return el%2==0
})



// HOF

let ans2 = arr.filter((element,index)=>{
  if(element % 3 == 0 && element % 5 == 0){
    return element;
  }
})


let product = ["men","women","kids","shoes","blanket"]

let a  = product.map((el,index)=>{
     if(el.length > 3){
        return el;
     }
})

console.log(a)


// forEach


for(let x=0; x<product.length; x++){
    console.log(product[x])
}

let b = product.forEach((el,i)=>{
  return el
})

console.log(b)
