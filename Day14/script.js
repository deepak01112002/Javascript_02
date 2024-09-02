let ages = [-1,-9,-80,-90,-56]

let maximum = ages[0];
for(let x=0; x<ages.length; x++){
    if(maximum > ages[x]){
        maximum = ages[x]
    }
}

console.log(maximum)