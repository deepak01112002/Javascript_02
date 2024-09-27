

// let arr = [
//     {
//         id : 5,
//         name  : "Deepak"
//     },
//     {
//         id : 6,
//         name : "Pandey"
//     }
// ]

// console.log(arr[0])

// localStorage.setItem("data",JSON.stringify(arr))


// let a = JSON.parse(localStorage.getItem("data"))

// console.log(a[0])
let cart =  JSON.parse(localStorage.getItem("cart")) || []

let product = JSON.parse(localStorage.getItem("data"))||[]
document.getElementById("productForm").addEventListener("submit",(e)=>{
      e.preventDefault()
      let obj = {
          title : document.getElementById("title").value,
          price : document.getElementById("price").value,
          img : document.getElementById("imageURL").value
      }
      product.push(obj)
      localStorage.setItem("data",JSON.stringify(product))
      document.getElementById("title").value = ""
      document.getElementById("price").value = ""
      document.getElementById("imageURL").value = ""
      document.querySelector("#data").innerHTML = view(product)
})
document.querySelector("#data").innerHTML = view(product)
function view(product){
   return product.map((el,index)=>{
        return `<div>
               <div>
                   <img src="${el.img}" alt="${el.title}" width="150px"/>
               </div>
               <div>
                  <p> ${el.title} -- ${el.price}</p>
                  <button onclick="addCart(${index})">Add to Cart</button>
               </div>
        </div>`
   }).join("")
}

function addCart(index){
    cart.push(product[index])
    localStorage.setItem("cart",JSON.stringify(cart))
}
