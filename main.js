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
  




  // bjp left side states
  



  
const leftBjpStates = [{
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
  state:"HARYANA",
  seats: "220",
  mla: "120",
  mp: "145",
  cmName: "AMARINDER SINGH"
}
];


const stateleftbjp = document.getElementById("stateleftbjp");
const seatsleftbjp = document.getElementById("seatsleftbjp");
const mlaleftbjp = document.getElementById("mlaleftbjp");
const mpleftbjp = document.getElementById("mpleftbjp");
const cmnameleftbjp = document.getElementById("cm-nameleftbjp");
let popupbjpleft = document.querySelectorAll(".popupbjpleft")
let cut1bjp = document.getElementById("cut1bjp")


cut1bjp.addEventListener("click",()=>{
  popupbjpleft.forEach(element => {
    element.style.display = "none";
  });
})

function hidePopupsbjpleft() {
  popupbjpleft.forEach(element => {
    element.style.display = "block";
  });
}


// left bjp states

const RajasthanBjp = document.getElementById("RajasthanBjp");
RajasthanBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("RAJASTHAN");
  console.log("rajasthan");
  hidePopupsbjpleft();
});

let MaharashtraBjp = document.getElementById("MaharashtraBjp")
MaharashtraBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("MAHARASHTRA");
  hidePopupsbjpleft();
});

const JammuBjp = document.getElementById("JammuBjp");
JammuBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("JAMMU & LADDHAK");
  hidePopupsbjpleft();
});

const GujaratBjp = document.getElementById("GujaratBjp");
GujaratBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("GUJURAT");
  hidePopupsbjpleft();
});

const GoaBjp = document.getElementById("GoaBjp");
GoaBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("GOA");
  hidePopupsbjpleft();
});

const LakshadweepBjp = document.getElementById("LakshadweepBjp");
LakshadweepBjp.addEventListener("click", () => {
displaybjpleftStateDetails("LAKSHADWEEP");
hidePopupsbjpleft();
});

const HaryanaBjp = document.getElementById("HaryanaBjp");
HaryanaBjp.addEventListener("click", () => {
  displaybjpleftStateDetails("HARYANA");
  hidePopupsbjpleft();
});




function displaybjpleftStateDetails(state) {
const statebjpDetails = leftBjpStates.find(item => item.state === state);
if (statebjpDetails) {
  stateleftbjp.innerHTML = statebjpDetails.state;
  seatsleftbjp.innerHTML = "" + statebjpDetails.seats;
  mlaleftbjp.innerHTML = "" + statebjpDetails.mla;
  mpleftbjp.innerHTML = "" + statebjpDetails.mp;
  cmnameleftbjp.innerHTML = "" + statebjpDetails.cmName;

  cmnameleftbjp.style.backgroundColor = "";

  if(state === "JAMMU & LADDHAK" || state === "LAKSHADWEEP"){
    cmnameleftbjp.style.backgroundColor = "#808080";

  }
}

}

  


// bjp right states object


const bjprightStates = [{
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
  state: "BIHAR",
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



const stateRightbjp = document.getElementById("stateRightbjp");
const seatsRightbjp = document.getElementById("seatsRightbjp");
const mlaRightbjp = document.getElementById("mlaRightbjp");
const mpRightbjp = document.getElementById("mpRightbjp");
const cmnameRightbjp = document.getElementById("cm-nameRightbjp");
let popupbjpRight = document.querySelectorAll(".popupbjpRight")
let cut2bjp = document.getElementById("cut2bjp")




cut2bjp.addEventListener("click",()=>{
  popupbjpRight.forEach(element => {
    element.style.display = "none";
  });
})

function hidePopupsbjpright() {
  popupbjpRight.forEach(element => {
    element.style.display = "block";
  });
}



const UttarakhandBjp = document.getElementById("UttarakhandBjp");
UttarakhandBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("UTTARAKHAND");
  hidePopupsbjpright();
});

let UttarBjp = document.getElementById("UttarBjp")
UttarBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("UTTAR PRADESH");
  hidePopupsbjpright();
});

let MadhyaBjp = document.getElementById("MadhyaBjp")
MadhyaBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("MADHYA PRADESH");
  hidePopupsbjpright();
  console.log("mp");
});

let ChhattisgarhBjp = document.getElementById("ChhattisgarhBjp")
ChhattisgarhBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("CHHATTISGARH");
  hidePopupsbjpright();
});

let BiharBjp = document.getElementById("BiharBjp")
BiharBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("BIHAR");
  hidePopupsbjpright();
});

let AssamBjp = document.getElementById("AssamBjp")
AssamBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("ASSAM");
  hidePopupsbjpright();
});

let SikkimBjp = document.getElementById("SikkimBjp")
SikkimBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("SIKKIM");
  hidePopupsbjpright();
});

let MeghalayaBjp = document.getElementById("MeghalayaBjp")
MeghalayaBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("MEGHALAYA");
  hidePopupsbjpright();
});

let ManipurBjp = document.getElementById("ManipurBjp")
ManipurBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("MANIPUR");
  hidePopupsbjpright();
});

let NagalandBjp = document.getElementById("NagalandBjp")
NagalandBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("NAGALAND");
  hidePopupsbjpright();
});

let ArunachalBjp = document.getElementById("ArunachalBjp")
ArunachalBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("ARUNACHAL PRADESH");
  hidePopupsbjpright();
});

let TripuraBjp = document.getElementById("TripuraBjp")
TripuraBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("TRIPURA");
  hidePopupsbjpright();
});

let AndamanBjp = document.getElementById("AndamanBjp")
AndamanBjp.addEventListener("click", () => {
  displayStateDetailsbjpright("ANDAMAN AND NICCOBAR");
  hidePopupsbjpright();
});







function displayStateDetailsbjpright(state) {
  const statebjprightDetails = bjprightStates.find(item => item.state === state);
  if (statebjprightDetails) {
    stateRightbjp.innerHTML = statebjprightDetails.state;
    seatsRightbjp.innerHTML = "" + statebjprightDetails.seats;
    mlaRightbjp.innerHTML = "" + statebjprightDetails.mla;
    mpRightbjp.innerHTML = "" + statebjprightDetails.mp;
    cmnameRightbjp.innerHTML = "" + statebjprightDetails.cmName;
  
    cmnameRightbjp.style.backgroundColor = "";
  
    if(state === "ANDAMAN AND NICCOBAR"){
      cmnameRightbjp.style.backgroundColor = "#808080";
  
    }
  }
  
  }








  
// congress page left states object

const congressleftStates = [
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
  state: "JAMMU & LADDHAK",
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
}
];


const stateleftCongress = document.getElementById("stateleftCongress");
const seatsleftCongress = document.getElementById("seatsleftCongress");
const mlaleftCongress = document.getElementById("mlaleftCongress");
const mpleftCongress = document.getElementById("mpleftCongress");
const cmnameleftCongress = document.getElementById("cm-nameleftCongress");
let popupCongressleft = document.querySelectorAll(".popupCongressleft")
let cut1Congress = document.getElementById("cut1Congress")


cut1Congress.addEventListener("click",()=>{
  popupCongressleft.forEach(element => {
    element.style.display = "none";
  });
})

function hidePopupscongressleft() {
  popupCongressleft.forEach(element => {
    element.style.display = "block";
  });
}


// left congress states

const KarnatakaCongress = document.getElementById("KarnatakaCongress");
KarnatakaCongress.addEventListener("click", () => {
  displayStateDetailsleftcongress("KARNATAKA");
 hidePopupscongressleft();
});

const HimachalCongress = document.getElementById("HimachalCongress");
HimachalCongress.addEventListener("click", () => {
  displayStateDetailsleftcongress("HIMACHAL PRADESH");
 hidePopupscongressleft();
});

const JammuCongress = document.getElementById("JammuCongress");
JammuCongress.addEventListener("click", () => {
  displayStateDetailsleftcongress("JAMMU & LADDHAK");
hidePopupscongressleft();
});

const LakshadweepCongress = document.getElementById("LakshadweepCongress");
LakshadweepCongress.addEventListener("click", () => {
  displayStateDetailsleftcongress("LAKSHADWEEP");
hidePopupscongressleft();
});





function displayStateDetailsleftcongress(state) {
const stateDetailscongleft = congressleftStates.find(item => item.state === state);
if (stateDetailscongleft) {
  stateleftCongress.innerHTML = stateDetailscongleft.state;
  seatsleftCongress.innerHTML = "" + stateDetailscongleft.seats;
  mlaleftCongress.innerHTML = "" + stateDetailscongleft.mla;
  mpleftCongress.innerHTML = "" + stateDetailscongleft.mp;
  cmnameleftCongress.innerHTML = "" + stateDetailscongleft.cmName;

  cmnameleftCongress.style.backgroundColor = "";

  if(state === "JAMMU & LADDHAK" || state === "LAKSHADWEEP"){
    cmnameleftCongress.style.backgroundColor = "#808080";

  }
}

}





// congress page right states object

const congressRightStates = [
  {
    state: "TELANGANA",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "ANDAMAN AND NICOBAR",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  }
  ];
  
  
  const stateRightCongress = document.getElementById("stateRightCongress");
  const seatsRightCongress = document.getElementById("seatsRightCongress");
  const mlaRightCongress = document.getElementById("mlaRightCongress");
  const mpRightCongress = document.getElementById("mpRightCongress");
  const cmnameRightCongress = document.getElementById("cm-nameRightCongress");
  let popupCongressRight = document.querySelectorAll(".popupCongressRight")
  let cut2Congress = document.getElementById("cut2Congress")
  
  
  cut2Congress.addEventListener("click",()=>{
    popupCongressRight.forEach(element => {
      element.style.display = "none";
    });
  })
  
  function hidePopupscongressRight() {
    popupCongressRight.forEach(element => {
      element.style.display = "block";
    });
  }
  
  
  // right congress states
  
  const TelanganaCongress = document.getElementById("TelanganaCongress");
  TelanganaCongress.addEventListener("click", () => {
    displayStateDetailsRightcongress("TELANGANA");
    hidePopupscongressRight();
  });
  
  const AndamanCongress = document.getElementById("AndamanCongress");
  AndamanCongress.addEventListener("click", () => {
    displayStateDetailsRightcongress("ANDAMAN AND NICOBAR");
    hidePopupscongressRight();
  });
  
  
  function displayStateDetailsRightcongress(state) {
  const stateDetailscongRight = congressRightStates.find(item => item.state === state);
  if (stateDetailscongRight) {
    stateRightCongress.innerHTML = stateDetailscongRight.state;
    seatsRightCongress.innerHTML = "" + stateDetailscongRight.seats;
    mlaRightCongress.innerHTML = "" + stateDetailscongRight.mla;
    mpRightCongress.innerHTML = "" + stateDetailscongRight.mp;
    cmnameRightCongress.innerHTML = "" + stateDetailscongRight.cmName;
  
    cmnameRightCongress.style.backgroundColor = "";
  
    if(state === "ANDAMAN AND NICOBAR"){
      cmnameRightCongress.style.backgroundColor = "#808080";
  
    }
  }
  
  }





  
  

// others page left states object

const othersLeftStates = [
  {
    state: "DELHI",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "PUNJAB",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "KERALA",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "LAKSHADWEEP",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "JAMMU AND KASHMIR",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  }
  ];
  
  
  const stateleftOthers = document.getElementById("stateleftOthers");
  const seatsleftOthers = document.getElementById("seatsleftOthers");
  const mlaleftOthers = document.getElementById("mlaleftOthers");
  const mpleftOthers = document.getElementById("mpleftOthers");
  const cmnameleftOthers = document.getElementById("cm-nameleftOthers");
  let popupOthersleft = document.querySelectorAll(".popupOthersleft")
  let cut1Others = document.getElementById("cut1Others")
  
  
  cut1Others.addEventListener("click",()=>{
    popupOthersleft.forEach(element => {
      element.style.display = "none";
    });
  })
  
  function hidePopupsOthersLeft() {
    popupOthersleft.forEach(element => {
      element.style.display = "block";
    });
  }
  
  
  // left others states
  
  const PunjabOthers = document.getElementById("PunjabOthers");
  PunjabOthers.addEventListener("click", () => {
    displayStateDetailsLeftOthers("PUNJAB");
    hidePopupsOthersLeft();
  });
  
  const KeralaOthers = document.getElementById("KeralaOthers");
  KeralaOthers.addEventListener("click", () => {
    displayStateDetailsLeftOthers("KERALA");
    hidePopupsOthersLeft();
  });
  const LakshadweepOthers = document.getElementById("LakshadweepOthers");
  LakshadweepOthers.addEventListener("click", () => {
    displayStateDetailsLeftOthers("LAKSHADWEEP");
    hidePopupsOthersLeft();
  });

  const JammuOthers = document.getElementById("JammuOthers");
  JammuOthers.addEventListener("click", () => {
    displayStateDetailsLeftOthers("JAMMU AND KASHMIR");
    hidePopupsOthersLeft();
  });
  
  const DelhiOthers = document.getElementById("DelhiOthers");
  DelhiOthers.addEventListener("click", () => {
    displayStateDetailsLeftOthers("DELHI");
    hidePopupsOthersLeft();
  });
  


  function displayStateDetailsLeftOthers(state) {
  const stateDetailsOthersLeft = othersLeftStates.find(item => item.state === state);
  if (stateDetailsOthersLeft) {
    stateleftOthers.innerHTML = stateDetailsOthersLeft.state;
    seatsleftOthers.innerHTML = "" + stateDetailsOthersLeft.seats;
    mlaleftOthers.innerHTML = "" + stateDetailsOthersLeft.mla;
    mpleftOthers.innerHTML = "" + stateDetailsOthersLeft.mp;
    cmnameleftOthers.innerHTML = "" + stateDetailsOthersLeft.cmName;
  
    cmnameleftOthers.style.backgroundColor = "";
  
    if(state === "JAMMU AND KASHMIR" || state === "LAKSHADWEEP"){
      cmnameleftOthers.style.backgroundColor = "#808080";
  
    }
  }
  
  }







  

// others page right states object

const othersRightStates = [
  {
    state: "TAMIL NADU",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "ANDHRA PRADESH",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "JHARKHAND",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "WEST BENGAL",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "ANDAMAN AND NICOBAR",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "MIZORAM",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  },
  {
    state: "ODISHA",
    seats: "220",
    mla: "120",
    mp: "145",
    cmName: "SIDDARAMAIAH"
  }
  ];
  
  
  const stateRightOthers = document.getElementById("stateRightOthers");
  const seatsRightOthers = document.getElementById("seatsRightOthers");
  const mlaRightOthers = document.getElementById("mlaRightOthers");
  const mpRightOthers = document.getElementById("mpRightOthers");
  const cmnameRightOthers = document.getElementById("cm-nameRightOthers");
  let popupOthersRight = document.querySelectorAll(".popupOthersRight")
  let cut2Others = document.getElementById("cut2Others")
  
  
  cut2Others.addEventListener("click",()=>{
    popupOthersRight.forEach(element => {
      element.style.display = "none";
    });
  })
  
  function hidePopupsOthersRight() {
    popupOthersRight.forEach(element => {
      element.style.display = "block";
    });
  }
  
  
  // right others states
  
  const WestOthers = document.getElementById("WestOthers");
  WestOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("WEST BENGAL");
    hidePopupsOthersRight();
  });
  
  const TamilOthers = document.getElementById("TamilOthers");
  TamilOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("TAMIL NADU");
    hidePopupsOthersRight();
  });
  const OdishaOthers = document.getElementById("OdishaOthers");
  OdishaOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("ODISHA");
    hidePopupsOthersRight();
  });

  const MizoramOthers = document.getElementById("MizoramOthers");
  MizoramOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("MIZORAM");
    hidePopupsOthersRight();
  });
  
  const JharkhandOthers = document.getElementById("JharkhandOthers");
  JharkhandOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("JHARKHAND");
    hidePopupsOthersRight();
  });
  
  const AndhraOthers = document.getElementById("AndhraOthers");
  AndhraOthers.addEventListener("click", () => {
    displayStateDetailsRightOthers("ANDHRA PRADESH");
    hidePopupsOthersRight();
  });

  const AndamanOthers = document.getElementById("AndamanOthers")
  AndamanOthers.addEventListener("click",()=>{
    displayStateDetailsRightOthers("ANDAMAN AND NICOBAR");
    hidePopupsOthersRight();
  })
  function displayStateDetailsRightOthers(state) {
  const stateDetailsOthersRight = othersRightStates.find(item => item.state === state);
  if (stateDetailsOthersRight) {
    stateRightOthers.innerHTML = stateDetailsOthersRight.state;
    seatsRightOthers.innerHTML = "" + stateDetailsOthersRight.seats;
    mlaRightOthers.innerHTML = "" + stateDetailsOthersRight.mla;
    mpRightOthers.innerHTML = "" + stateDetailsOthersRight.mp;
    cmnameRightOthers.innerHTML = "" + stateDetailsOthersRight.cmName;
  
    cmnameRightOthers.style.backgroundColor = "";
  
    if(state === "ANDAMAN AND NICOBAR"){
      cmnameRightOthers.style.backgroundColor = "#808080";
  
    }
  }
  
  }
