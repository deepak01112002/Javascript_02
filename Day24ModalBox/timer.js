

let value = 10;

document.querySelector("button").addEventListener("click",()=>{
    var a = setInterval(()=>{
        document.querySelector("h1").innerText = value-- //  9 8 7 6 5 4 3 2 1 0 
        if(value <= 0){
           clearInterval(a)
        }
        console.log(value)
    },1000)
})

document.querySelector("buttonstop").addEventListener("click",()=>{
     console.log(value)
     clearInterval(a)
})