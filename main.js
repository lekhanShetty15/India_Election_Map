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



let all = document.getElementById("all");
let bjp = document.getElementById("bjp");
let congress = document.getElementById("congress")
let others = document.getElementById("others")


// all party page party buttons

let bjpBtn = document.getElementById("bjpBtn");
let congBtn = document.getElementById("congBtn")
let othersBtn = document.getElementById("othersBtn")



bjpBtn.addEventListener("click",()=>{
    all.style.display="none"
    bjp.style.display="block"
    
})
congBtn.addEventListener("click",()=>{
    all.style.display="none"
    bjp.style.display="none"
    congress.style.display="block"
})
othersBtn.addEventListener("click",()=>{
    all.style.display="none"
    bjp.style.display="none"
    congress.style.display="none"
    others.style.display="block"
})



