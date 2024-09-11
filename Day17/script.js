


let arr = [
     {
        quotes : "Jagate Raho",
        speaker : "Watchman"
     },
     {
        quotes : "all is well",
        speaker : "ranchod das"
     },
     {
        quotes : "Bade bade desho me choti choti baate hoti rahti hai",
        speaker : "SRK"
     },
     {
        Image : "",
        quotes : "chai pio bisckit khao",
         speaker : "jethalal"
     }
]

function fun(){
    let a = Math.floor(Math.random()*arr.length)
    document.getElementById("box").innerHTML = `<h1>${arr[a].quotes} - ${arr[a].speaker}</h1>`
}