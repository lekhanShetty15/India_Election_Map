let slide = document.getElementById("slide");
let cut = document.getElementById("cut");
let slidebar =document.getElementById("slidebar")

slide.addEventListener("click", ()=>{
    slidebar.style.display="block"
})

cut.addEventListener("click", ()=>{
    slidebar.style.display="none"
})