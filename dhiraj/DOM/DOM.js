const dj = document.querySelector("h1")
// btn.addEventListener("click",function(){
//     dj.innerHTML ="YOU WANT TO TALK THEN CLICK 'ON BUTTON'"
// })
const image = document.querySelector("img")
const full = document.querySelector("body")
// const torch = document.getElementById("circle")
const btn = document.getElementById("click")
let num =0 ;

btn.addEventListener("click",function(){
    if(num == 0){
    image.style.backgroundColor = "yellow"
    num =1;
console.log("hello")
}
    else if(num == 1){
        image.style.backgroundColor = ""
        num = 2;
        console.log("see you next time")
    }
    else{
        image.style.backgroundColor = "blue"
        num = 0;
    }
})
