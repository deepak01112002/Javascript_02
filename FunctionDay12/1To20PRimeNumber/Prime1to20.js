

let primeNoCount = 0
for(let x=1; x<=100; x++){
    if(checkPrimeNumber(x) == "Prime"){
      primeNoCount++
    }
}
console.log(primeNoCount)
function checkPrimeNumber(n){
    let count = 0
    for(let x=1; x<=n; x++){
        if(n % x ==0){
          count++
        }
    }
   if(count == 2){
      return "Prime";
   }else{
      return "NotPrime"
   }

}
