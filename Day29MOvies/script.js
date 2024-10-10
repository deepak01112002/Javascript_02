
// fetch(`https://imdb-top-100-movies.p.rapidapi.com/`,{
//     method : "GET",
//     headers : {
//         'x-rapidapi-key': 'da62e56a70msh0299196bccf7721p14eea4jsn119dec22976c',
// 		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//     }
// })
// .then((res)=>res.json())
// .then((Res)=>{
//     console.log(Res)
// })
// .catch((Err)=>{
//     console.log(Err)
// })

let movieName = document.getElementById("search")
let option = document.getElementById("opt")

movieName.addEventListener("input",()=>{
    if(movieName.value){
        fetchData(movieName.value)
    }
    
})

document.getElementById("opt").addEventListener("change",()=>{
     
     if(option.value){
        fetchData(movieName.value,option.value)
     }
})


function fetchData(movie,type="movie"){
    
    fetch(`https://www.omdbapi.com/?apikey=f296becc&s=${movie}&type=${type}`)
    .then((Res)=>Res.json())
    .then((res)=>{
        
        if(res.Response == 'False'){
            console.log("Data nahi hai !!!!")
        }else{
            console.log(res)
            document.getElementById("box").innerHTML = `<img src="${res.Search[0].Poster}">`
            
        }
    })
    .catch((Err)=>{
        console.log(Err)
    })
}