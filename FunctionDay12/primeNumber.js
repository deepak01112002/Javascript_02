function fun(){

    let number = document.getElementById("data").value
checkPrimeNumber(number)
function checkPrimeNumber(n){
    let count = 0
    for(let x=1; x<=n; x++){
        if(n % x ==0){
          count++
        }
    }
   if(count == 2){
    document.getElementById("ans").innerHTML = `${n} is a Prime Number`
   }else{
      document.getElementById("ans").innerHTML = `${n} is Not a Prime Number`
   }

}






}