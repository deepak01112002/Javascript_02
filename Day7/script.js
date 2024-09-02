function deepak(){


let unit = document.getElementById("unit").value


let rate;
if(unit <= 100){
  rate = unit * 0.1
}else if(unit > 100 && unit <= 200){
  rate = unit * 0.15
}else if(unit > 200 && unit <= 300){
  rate = unit * 0.20
}else{
   rate = unit * 0.25
}



console.log(unit + rate)
 
let a = '20';
let b = 10 

console.log(+a + b)

}