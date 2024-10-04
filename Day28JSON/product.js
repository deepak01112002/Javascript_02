function FetchingData(){
    
    fetch(`http://localhost:3000/products`)
    .then((Res)=>{
        return Res.json()
    })
    .then((res)=>{
        document.querySelector("#box").innerHTML = view(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function view(arr){
    return arr.map((el)=>{
        return `<a href="singleProduct.html?id=${el.id}"><div id="card">
              <div>
                 <img src="${el.img}" width="250px"/>
              </div>
              <div>
                <p>${el.title}</p>
                <p>₹ ${el.price}</p>
              </div>
        </div></a>`
    }).join("")
}



FetchingData()