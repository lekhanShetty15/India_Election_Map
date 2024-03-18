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
let ALLparty = document.getElementById("ALLparty")


// all party page party buttons

let bjpBtn = document.getElementById("bjpBtn");
let congBtn = document.getElementById("congBtn")
let othersBtn = document.getElementById("othersBtn")



bjpBtn.addEventListener("click",()=>{
    console.log("BJPALL button clicked");
    all.style.display="none"
    bjp.style.display="block"
    congress.style.display="none"
    others.style.display="none"
    BJPParty.style.display="none"
    ALLparty.style.display="block"

   
})
congBtn.addEventListener("click",()=>{
    console.log("congressALL button clicked");
    all.style.display="none"
    bjp.style.display="none"
    congress.style.display="block"
    others.style.display="none"
    BJPParty.style.display="none"
    ALLparty.style.display="block"


})
othersBtn.addEventListener("click",()=>{
    console.log("othersALL button clicked");
    all.style.display="none"
    bjp.style.display="none"
    congress.style.display="none"
    others.style.display="block"
    BJPParty.style.display="none"
    ALLparty.style.display="block"


})



// bjp party page party buttons
let BJPParty =document.getElementById("BJPParty")
let bjpBtnbjp = document.getElementById("bjpBtn");
let congBtnbjp = document.getElementById("congBtn")
let othersBtnbjp = document.getElementById("othersBtn")



bjpBtnbjp.addEventListener("click",()=>{
    console.log("bjpparty button clicked");
    bjp.style.display="block"
    ALLparty.style.display="none"
    BJPParty.style.display="flex"

})
congBtnbjp.addEventListener("click",()=>{
    console.log("bjpcongressparty button clicked");
    congress.style.display="block"
    ALLparty.style.display="none"
    BJPParty.style.display="flex"



})
othersBtnbjp.addEventListener("click",()=>{
    console.log("bjpothersparty button clicked");
    others.style.display="block"
    ALLparty.style.display="none"
    BJPParty.style.display="flex"


})



