// ene hesgug comment bolgosond uuchlaarai burte  :)

// const firebaseConfig = {
//     apiKey: "AIzaSyDBGn2xMhJIpuDcDTnuDncxY4j70hNne6o",
//     authDomain: "demoday-c0350.firebaseapp.com",
//     projectId: "demoday-c0350",
//     storageBucket: "demoday-c0350.appspot.com",
//     messagingSenderId: "568486830970",
//     appId: "1:568486830970:web:8dad0579980950dc6d2cc3",
//     measurementId: "G-30BCG26ZEP"
// };

// const app = firebase.initializeApp(firebaseConfig);


// const buttontemp = document.getElementById("button")
// const buttontemp = document.querySelector("#button")
// const container = document.querySelector(".container")
// button.style.display = "none"

// function wrongAns(button, answer){
//   //button.style.color = "red"
//   let buttons = document.querySelectorAll("#button")
//   for(let i=0; i<buttons.length; i++){
//     if(buttons[i].innerHTML == answer){
//       buttons[i].style.color = "green";
//       buttons[i].style.borderColor = "green";
//     }else{
//       buttons[i].style.color = "red"
//       buttons[i].style.borderColor="red"
//     }
//   }
// }

// function rightAns(button, answer){
//   button.style.color = "green"
//   button.style.borderColor = "green";
// }


// function createButtons(a,b,c,d,ans){
//   let answers = [a,b,c,d,ans]
//   for(let i=0; i<4; i++){
//     let button = buttontemp.cloneNode(true)
//     button.style.display = "block"
//     button.innerHTML = answers[i]
//     if(answers[i] == answers[4]){
//       button.addEventListener("click", function(){rightAns(button, answers[4])})
//     }else{
//       button.addEventListener("click", function(){wrongAns(button, answers[4])})
//     }
//     container.appendChild(button)
//   }
// }

// createButtons(21,22,23,24,21)

//-next button darhaar elementuudee ustgadag-uurchluud bh ym barg bhgu--------------------------------------------------------------------------------------

const buttontemp = document.querySelector("#button")
const container = document.querySelector(".container")
button.style.display = "none"

function wrongAns(button, answer){

  let buttons = document.querySelectorAll("#button")

  let butn = document.createElement("button").cloneNode(true)
  butn.addEventListener("click", function(){next()});
  butn.id = 'next';
  document.body.appendChild(butn);

  for(let i=0; i<buttons.length; i++){

    if(buttons[i].innerHTML == answer){
      buttons[i].style.color = "green";
      buttons[i].style.borderColor = "green";
    }else{
      buttons[i].style.color = "red"
      buttons[i].style.borderColor="red"
    }
  }
}

function rightAns(button, answer){

  button.style.color = "green"
  button.style.borderColor = "green";

  let butn = document.createElement("button").cloneNode(true)
  butn.addEventListener("click", function(){next()});
  butn.id = 'next';
  document.body.appendChild(butn);

}

function createButtons(a,b,c,d,ans){

  let answers = [a,b,c,d,ans]

  for(let i=0; i<4; i++){

    let button = buttontemp.cloneNode(true)
    button.style.display = "block"
    button.innerHTML = answers[i]

    if(answers[i] == answers[4]){
      button.addEventListener("click", function(){rightAns(button, answers[4])})
    }else{
      button.addEventListener("click", function(){wrongAns(button, answers[4])})
    }

    container.appendChild(button)
  }
}

//-end asuultynha hariug hiine suuld n zuw hariugaa hiine-----
createButtons(0,0,0,0,0)

function next() {

  const ml = document.querySelector(".rec1, .rec2")
  const doc = document.querySelector(".container, #button")
  const skip = document.getElementById("next")

  skip.remove();
  ml.remove();
  doc.remove();

  let infobox = document.createElement("div").cloneNode(true)
  let info = document.createElement("div").cloneNode(true)
  let basar = document.createElement("canvas").cloneNode(true)
  infobox.id = 'infobox';
  basar.id = 'basar';
  info.id = 'info';
  document.body.appendChild(infobox);
  infobox.appendChild(basar);
  infobox.appendChild(info);

  //-asultyn dara garch ireh information-----
  info.innerHTML = ""

  let butn = document.createElement("button").cloneNode(true)
  butn.addEventListener("click", function(){next1()});
  butn.id = 'next';
  document.body.appendChild(butn);
}
function next1() {
  const ml = document.querySelector("#infobox")
  const skip = document.getElementById("next")

  skip.remove();
  ml.remove();
  maiin.style.filter = ("brightness(100%)")
}