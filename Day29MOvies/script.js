
fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`,{
    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTNkMmQ1OGQyMzA1NTNjYjc1MDhiYzQ2NzQ1NzY4YSIsIm5iZiI6MTcyODQ2NDc2MS41MzI5NTYsInN1YiI6IjY2ZTdiZGEwOWRmYmJkZjBlNmNmZGIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8MMcHhAZlIh4VdwVILcxMiRGxVQcqK-vk10IAVHrr10"
    }
})
.then((res)=>res.json())
.then((Res)=>{
    console.log(Res)
})
.catch((Err)=>{
    console.log(Err)
})


