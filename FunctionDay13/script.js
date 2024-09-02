function fun(){

  let maxVal = document.getElementById("data").value

  let countPrime = 0
  for(let x=1; x<=maxVal; x++){
      if(checkPrime(x) == 1){
        countPrime++
      }
  }
   console.log(countPrime)

function checkPrime(n){
  let count = 0
  for(let x=1; x<=n; x++){
     if(n % x == 0){
        count++
     }
  }
  if(count == 2){
     return 1;
  }else{
     return 0;
  }
}
}