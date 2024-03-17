let slide = document.getElementById("slide");
let cut = document.getElementById("cut");
let slidebar =document.getElementById("slidebar");
let homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", () =>{
    location.reload();
})

slide.addEventListener("click", ()=>{
    slidebar.style.display="block"
})

cut.addEventListener("click", ()=>{
    slidebar.style.display="none"
})




let bjpBtn = document.getElementById("bjpBtn");
let ALLparty = document.getElementById("ALLparty");
let all = document.getElementById("all");
let bjp = document.getElementById("main2");

bjpBtn.addEventListener("click",()=>{
    all.style.display="none"
    bjp.style.display="block"
    
})
