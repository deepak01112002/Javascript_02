

fetch(`https://jsonplaceholder.typicode.com/photos?limit=10`)
.then((r)=>{
    return r.json()
})
.then((res)=>{
   document.getElementById("box").innerHTML =  view(res)
})
.catch((err)=>{
    console.log(err)
})


function view(arr){
    console.log(arr)
   return arr.map((el)=>{
      return `<div>
           <div>
              <img src="${el.url}" alt="${el.title}" width="150px"/>
           </div>
           <div>
              <p>${el.title} </p>
           </div>
      </div>`
   }).join("")
}