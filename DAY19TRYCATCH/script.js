// getElementById()
let d = document.querySelector("#signupForm")
let data = []
let isValid = true


document.querySelector("#swapButton").addEventListener("click",()=>{
   document.querySelector("#SignupMain").style.display = "block"
   document.querySelector("#LoginMain").style.display = "none"
})
document.querySelector("#signupSwapButton").addEventListener("click",()=>{
  document.querySelector("#SignupMain").style.display = "none"
  document.querySelector("#LoginMain").style.display = "block"
})


d.addEventListener("submit", (e)=>{
    e.preventDefault()
    isValid = true
    document.querySelector("#usernameText").innerText = ""
    document.querySelector("#emailText").innerText = ""
    document.querySelector("#PasswordText").innerText = ""
   
    let email  = document.querySelector("#email").value
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    // console.log(emailRegex.test(email))

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    console.log(passwordRegex.test(password))

    if(username.length == 0){
       document.querySelector("#usernameText").innerText = "UserName Required!!"
       isValid = false
    }
    if(email.length == 0 && !emailRegex.test(email)){
      document.querySelector("#emailText").innerText = "Email Required!!"
      isValid = false
     }
    if(password.length < 8){
      document.querySelector("#PasswordText").innerText = "Password must be greater than 8!!"
      isValid = false
    }
    let obj = {
      emailID : email,
      Username : username,
      Pass : password,
    }

    if(isValid == true){
      data.push(obj)
      alert("User Signup Successfully")
    }
   console.log(data)
})


document.querySelector("#loginForm").addEventListener("submit",(ddd)=>{
       ddd.preventDefault()
      
       let loginEmail = document.getElementById("loginEmail").value
       let loginPassword = document.getElementById("loginPassword").value

       let ans = data.filter(element => {
          if(element.emailID == loginEmail && element.Pass == loginPassword){
              return element
          }
       }); 
       console.log(ans)
       if(ans.length > 0){
        alert("Login Successfull")
       }else{
        alert("Login Unsuccessfull")
       }
})
