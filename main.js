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



const tabBtn = document.querySelectorAll(".tabBtn");
const content = document.querySelectorAll(".content");
const homeContent = document.querySelector(".homeContent");

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
     homeContent.style.display = "none";

    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
    });
    content.forEach((content) => {
      content.classList.remove("active");
    });
    tab.classList.add("active");
    content[index].classList.add("active");
  });
});
