let slide = document.getElementById("slide");
let slidebar =document.getElementById("slidebar");
let homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", () =>{
    location.reload();
    hidePopups();
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


// left states object

const leftStates = [{
  state: "RAJASTHAN",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "MAHARASHTRA",
  seats: "300",
  mla: "150",
  mp: "200",
  cmName: "EKNATH SHINDE"
},
{
  state: "GUJURAT",
  seats: "270",
  mla: "125",
  mp: "170",
  cmName: "BUPENDRASINGH BHAI"
},
{
  state: "MADHYA PRADESH",
  seats: "245",
  mla: "145",
  mp: "175",
  cmName: "MOHAN YADAV"
},
{
  state: "KARNATAKA",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "SIDDARAMAIAH"
},
{
  state: "HIMACHAL PRADESH",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state: "KERELA",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state: "PUNJAB",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state: "JAMMU & LADDHAK",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state: "GOA",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state:"LAKSHADWEEP",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state:"DELHI",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
},
{
  state:"HARYANA",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
}
];


const stateNameElement = document.getElementById("state");
const seatsElement = document.getElementById("seats");
const mlaElement = document.getElementById("mla");
const mpElement = document.getElementById("mp");
const cmNameElement = document.getElementById("cm-name");
let popup = document.querySelectorAll(".popup")
let cut1 = document.getElementById("cut1")


cut1.addEventListener("click",()=>{
  popup.forEach(element => {
    element.style.display = "none";
  });
})

function hidePopups() {
  popup.forEach(element => {
    element.style.display = "block";
  });
}


// left home states

const RajasthanALL = document.getElementById("RajasthanALL");
RajasthanALL.addEventListener("click", () => {
displayStateDetails("RAJASTHAN");
hidePopups();
});

let MaharashtraALL = document.getElementById("MaharashtraALL")
MaharashtraALL.addEventListener("click", () => {
displayStateDetails("MAHARASHTRA");
hidePopups();

});

const KarnatakaALL = document.getElementById("KarnatakaALL");
KarnatakaALL.addEventListener("click", () => {
 displayStateDetails("KARNATAKA");
hidePopups();
});

const HimachalALL = document.getElementById("HimachalALL");
HimachalALL.addEventListener("click", () => {
 displayStateDetails("HIMACHAL PRADESH");
hidePopups();
});

const KeralaALL = document.getElementById("KeralaALL");
KeralaALL.addEventListener("click", () => {
 displayStateDetails("KERELA");
hidePopups();
});

const PunjabALL = document.getElementById("PunjabALL");
PunjabALL.addEventListener("click", () => {
 displayStateDetails("PUNJAB");
hidePopups();
});

const JammuALL = document.getElementById("JammuALL");
JammuALL.addEventListener("click", () => {
displayStateDetails("JAMMU & LADDHAK");
hidePopups();
});

const GujaratALL = document.getElementById("GujaratALL");
GujaratALL.addEventListener("click", () => {
displayStateDetails("GUJURAT");
hidePopups();
});

const GoaALL = document.getElementById("GoaALL");
GoaALL.addEventListener("click", () => {
displayStateDetails("GOA");
hidePopups();
});

const LakshadweepALL = document.getElementById("LakshadweepALL");
LakshadweepALL.addEventListener("click", () => {
displayStateDetails("LAKSHADWEEP");
hidePopups();
});

const DelhiALL = document.getElementById("DelhiALL");
DelhiALL.addEventListener("click", () => {
displayStateDetails("DELHI");
hidePopups();
});

const HaryanaALL = document.getElementById("HaryanaALL");
HaryanaALL.addEventListener("click", () => {
displayStateDetails("HARYANA");
hidePopups();
});





function displayStateDetails(state) {
const stateDetails = leftStates.find(item => item.state === state);
if (stateDetails) {
  stateNameElement.innerHTML = stateDetails.state;
  seatsElement.innerHTML = "" + stateDetails.seats;
  mlaElement.innerHTML = "" + stateDetails.mla;
  mpElement.innerHTML = "" + stateDetails.mp;
  cmNameElement.innerHTML = "" + stateDetails.cmName;

  cmNameElement.style.backgroundColor = "";

  if (state === "KARNATAKA" || state === "HIMACHAL PRADESH") {
    cmNameElement.style.backgroundColor = "#309cf6";
  }
  if(state === "KERELA" || state === "PUNJAB" || state === "DELHI"){
    cmNameElement.style.backgroundColor = "#166a2f";
  }
  if(state === "JAMMU & LADDHAK" || state === "LAKSHADWEEP"){
    cmNameElement.style.backgroundColor = "#808080";

  }
}

}




// right states object


const rightStates = [{
  state: "UTTARAKHAND",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "UTTAR PRADESH",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "MADHYA PRADESH",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "CHHATTISGARH",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "TELANGANA",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "ANDHRA PRADESH",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "TAMIL NADU",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "ODISHA",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "BIHAR",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "JHARKHAND",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "WEST BENGAL",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "ASSAM",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "MEGHALAYA",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "TRIPURA",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "MIZORAM",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "NAGALAND",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "SIKKIM",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "PUDUCHERRY",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "MANIPUR",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "ARUNACHAL PRADESH",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
},
{
  state: "ANDAMAN AND NICCOBAR",
  seats: "270",
  mla: "100",
  mp: "150",
  cmName: "ASHOK GEHLOT"
}
]



const stateNameright = document.getElementById("stateright");
const seatsright = document.getElementById("seatsright");
const mlaright = document.getElementById("mlaright");
const mpright = document.getElementById("mpright");
const cmNameright = document.getElementById("cm-nameright");
let popupright = document.querySelectorAll(".popupright")
let cut2 = document.getElementById("cut2")




cut2.addEventListener("click",()=>{
  popupright.forEach(element => {
    element.style.display = "none";
  });
})

function hidePopupsright() {
  popupright.forEach(element => {
    element.style.display = "block";
  });
}



const UttarakhandALL = document.getElementById("UttarakhandALL");
UttarakhandALL.addEventListener("click", () => {
  displayStateDetailsright("UTTARAKHAND");
hidePopupsright();
});

let UttarALL = document.getElementById("UttarALL")
UttarALL.addEventListener("click", () => {
  displayStateDetailsright("UTTAR PRADESH");
hidePopupsright();
});

let MadhyaALL = document.getElementById("MadhyaALL")
MadhyaALL.addEventListener("click", () => {
  displayStateDetailsright("MADHYA PRADESH");
hidePopupsright();
});

let ChhattisgarhALL = document.getElementById("ChhattisgarhALL")
ChhattisgarhALL.addEventListener("click", () => {
  displayStateDetailsright("CHHATTISGARH");
hidePopupsright();
});

let TelanganaALL = document.getElementById("TelanganaALL")
TelanganaALL.addEventListener("click", () => {
  displayStateDetailsright("TELANGANA");
hidePopupsright();
});

let AndhraALL = document.getElementById("AndhraALL")
AndhraALL.addEventListener("click", () => {
  displayStateDetailsright("ANDHRA PRADESH");
hidePopupsright();
});

let TamilALL = document.getElementById("TamilALL")
TamilALL.addEventListener("click", () => {
  displayStateDetailsright("TAMIL NADU");
hidePopupsright();
});

let OdishaALL = document.getElementById("OdishaALL")
OdishaALL.addEventListener("click", () => {
  displayStateDetailsright("ODISHA");
hidePopupsright();
});

let BiharALL = document.getElementById("BiharALL")
BiharALL.addEventListener("click", () => {
  displayStateDetailsright("BIHAR");
hidePopupsright();
});

let WestALL = document.getElementById("WestALL")
WestALL.addEventListener("click", () => {
  displayStateDetailsright("WEST BENGAL");
hidePopupsright();
});

let JharkhandALL = document.getElementById("JharkhandALL")
JharkhandALL.addEventListener("click", () => {
  displayStateDetailsright("JHARKHAND");
hidePopupsright();
});

let AssamALL = document.getElementById("AssamALL")
AssamALL.addEventListener("click", () => {
  displayStateDetailsright("ASSAM");
hidePopupsright();
});

let SikkimALL = document.getElementById("SikkimALL")
SikkimALL.addEventListener("click", () => {
  displayStateDetailsright("SIKKIM");
hidePopupsright();
});

let MeghalayaALL = document.getElementById("MeghalayaALL")
MeghalayaALL.addEventListener("click", () => {
  displayStateDetailsright("MEGHALAYA");
hidePopupsright();
});

let ManipurALL = document.getElementById("ManipurALL")
ManipurALL.addEventListener("click", () => {
  displayStateDetailsright("MANIPUR");
hidePopupsright();
});

let NagalandALL = document.getElementById("NagalandALL")
NagalandALL.addEventListener("click", () => {
  displayStateDetailsright("NAGALAND");
hidePopupsright();
});
let MizoramALL = document.getElementById("MizoramALL")
MizoramALL.addEventListener("click", () => {
  displayStateDetailsright("MIZORAM");
hidePopupsright();
});

let ArunachalALL = document.getElementById("ArunachalALL")
ArunachalALL.addEventListener("click", () => {
  displayStateDetailsright("ARUNACHAL PRADESH");
hidePopupsright();
});

let TripuraALL = document.getElementById("TripuraALL")
TripuraALL.addEventListener("click", () => {
  displayStateDetailsright("TRIPURA");
hidePopupsright();
});

let AndamanALL = document.getElementById("AndamanALL")
AndamanALL.addEventListener("click", () => {
  displayStateDetailsright("ANDAMAN AND NICCOBAR");
hidePopupsright();
});





function displayStateDetailsright(state) {
  const stateDetailsright = rightStates.find(item => item.state === state);
  if (stateDetailsright) {
    stateNameright.innerHTML = stateDetailsright.state;
    seatsright.innerHTML = "" + stateDetailsright.seats;
    mlaright.innerHTML = "" + stateDetailsright.mla;
    mpright.innerHTML = "" + stateDetailsright.mp;
    cmNameright.innerHTML = "" + stateDetailsright.cmName;
  
    cmNameright.style.backgroundColor = "";
  
    if (state === "TELANGANA") {
      cmNameright.style.backgroundColor = "#309cf6";
    }
    if(state === "ANDHRA PRADESH" || state==="TAMIL NADU" || state==="ODISHA" || state==="WEST BENGAL" || state==="JHARKHAND" || state === "MIZORAM"){
      cmNameright.style.backgroundColor = "#166a2f";
    }
    if(state === "ANDAMAN AND NICCOBAR"){
      cmNameright.style.backgroundColor = "#808080";
  
    }
  }
  
  }
  
  
  