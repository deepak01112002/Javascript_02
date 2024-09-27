

let cart = JSON.parse(localStorage.getItem("cart")) || []
document.getElementById("box").innerHTML = view()

function view(){
    return cart.map((el,index)=>{
        return `
              <tr>
                <td>
                   <img src="${el.img}" width="150px"/>
                </td>
                <td>${el.title}</td>
                <td>${el.price}</td>
                <td><button onclick="deleteElement(${index})">Delete</button></td> 
              </tr>
         `
    }).join("")
}


function deleteElement(index){
     cart.splice(index,1)
     localStorage.setItem("cart",JSON.stringify(cart))
     document.getElementById("box").innerHTML = view()
}