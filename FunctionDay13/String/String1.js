let str = "aeiou";

// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])


// let ans = ""
// for(let x=str.length-1; x>=0; x--){
//     ans += str[x]
// }

// if(ans == str){
//     console.log("Palindromic String")
// }else{
//     console.log("Not a Palindrom")
// }


// Palindrom 

// count how many vowels present in string

let c  = 0
for(let x=0; x<str.length; x++){
    if(str[x] == "a" || str[x] == "e" || str[x] == "i" || str[x] == "o" || str[x] == "u"){
      c++
    }
}
console.log(c)


  