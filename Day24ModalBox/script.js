


window.onload = function (){ 
 setTimeout(()=>{
    document.querySelector(".modalBox").style.opacity = "100%"
 },4000)
}
document.querySelector("button").addEventListener("click",()=>{
   document.querySelector(".modalBox").style.display = "none"
})



