function deepak(){

// let year = document.getElementById("year").value


// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     document.getElementById("data").innerText = "Leap Year"
// }else{
//     document.getElementById("data").innerHTML = "Not a Leap Year"
// }


 let a = document.getElementById("a").value
 let b = document.getElementById("b").value
 let c = document.getElementById("c").value
//  let d = 60

    // if(a > b && a > c ){
    //     alert("a is greater")
    // }else if(b > a && b > c){
    //     alert("b is greater")
    // }else{
    //     alert("C is greater")
    // }
  
    // if(a > b){                             // 30 40 50
    //     if(a > c){
    //         alert("a is greater")
    //     }else{
    //        alert("C is greater")
    //     }
    // }else{
    //     if(b > c){
    //       alert("b is greater")  
    //     }else{
    //       alert("c is greater")
    //     }
    // }
   
     
    


    // if(angle > 0 && angle <= 90){
    //     document.getElementById("data").innerText = "First Quadrant"
    // }else if(angle > 90 && angle <=180){
    //     document.getElementById("data").innerText = "Second Quadrant"
    // }else if(angle > 180 && angle <=270){
    //     document.getElementById("data").innerText = "Third Quadrant"
    // }else if(angle > 270 && angle <= 360){
    //     document.getElementById("data").innerText = "Fourth Quadrant"
    // }else{
    //     document.getElementById("data").innerText = "Enter value between 0 to 360"
    // }


    if(a == b && b == c && c == a){
        document.getElementById("data").innerText = "EQ Triangle"
    }else if(a == b || b == c || c == a){
         document.getElementById("data").innerText = "IS Triangle"
    }else{
        document.getElementById("data").innerText = "SC Triangle"
    }






}