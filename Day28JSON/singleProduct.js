

function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    fetch(`https://mockserverjs02.onrender.com/products?id=${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            document.getElementById("box").innerHTML = view(res)
            document.getElementById("cart").addEventListener("click", () => {
                // console.log(res)
                addToCart(res)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


function view(arr) {
    return arr.map((el) => {
        return `<div>
              <div>
                  <img src="${el.img}" width="250px"/>
              </div>
              <button id="cart">Add to Cart</button>
        </div>`
    }).join("")
}

function addToCart(res) {
    fetch(`http://localhost:3000/cart?id=${res[0].id}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            if (Res.length > 0) {
                alert("Item is Already Present in Cart !!!!!")
            } else {
                fetch(`http://localhost:3000/cart`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({...res[0],quantity : 1})
                })
                    .then((Res) => {
                        return Res.json()
                    })
                    .then((Res) => {
                        console.log(Res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
        .catch((err) => {
            console.log(err)
        })

}


FetchingData()


