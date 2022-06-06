const firebaseConfig = {
    apiKey: "AIzaSyDBGn2xMhJIpuDcDTnuDncxY4j70hNne6o",
    authDomain: "demoday-c0350.firebaseapp.com",
    projectId: "demoday-c0350",
    storageBucket: "demoday-c0350.appspot.com",
    messagingSenderId: "568486830970",
    appId: "1:568486830970:web:8dad0579980950dc6d2cc3",
    measurementId: "G-30BCG26ZEP"
};
// const app = initializeApp(firebaseConfig);

//HUDULGUDUG FUNKTSUUD

var inter;
const hun = document.getElementById("hun");
function moveSelection(evt) {
    if (inter) {
        clearTimeout(inter);
    }
    inter = setInterval(move, 20, evt)
}
function move(evt) {
    // LEFT
    if (evt.keyCode == 65 || evt.keyCode == 37) {
        // zuun tiish yavah hyazgaarlalt
        if (hun.style.left > 0 + '%') {
            hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
            alhah()
            nextMove()
            removeE()
            backAndForth()
        }
        hun.style.transform = 'scaleX(-1)';
    }
    // RIGHT
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // baruun tiish yavah hyazgaarlalt
        if (hun.style.left < 93 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
            alhah()
            nextMove()
            removeE()
            backAndForth()
        }
        hun.style.transform = 'scaleX(1)'
    } 
    // DOWN
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // dooshoo yavah hyazgaarlalt
        if (hun.style.top < 85 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
            alhah()
            nextMove()
            removeE()
            backAndForth()
        }
    }
    // UP
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // deeshee yavah hyazgaarlalt
        if (hun.style.top > 49 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
            alhah()
            nextMove()
            removeE()
            backAndForth()
        }
    }
    if (evt.keyCode == 69) {
        if (alinDeerNiZogsojBna == 'avtusniiZogsool') {
            selectNextLocation();
            counter4 = 'selectNextLocation';
        }
        if (alinDeerNiZogsojBna == 'nohoi') {
            dialogue();
            counter4 = 'dialogue';
        }
    }
    if (evt.keyCode == 27) {
        close();
    }
}
function alhah(){
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hunGIF.gif")'
    document.querySelector('#hun').style.width = '58.53px'
    document.querySelector('#hun').style.marginLeft = '10px'
}
function moving(evt) {
    clearInterval(inter)
    inter = null;
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hun-stand.svg")'
    document.querySelector('#hun').style.width = '68.53px'
    document.querySelector('#hun').style.marginLeft = '0px'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

// DARAACHIIN GAZAR SONGOH
// E garj ireh 

const area = document.querySelector(".area");
const area1 = document.querySelector(".area1");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'pressE'); 
let interactable = 'no';
let alinDeerNiZogsojBna = 'none';
let counter4 = 'no';

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right 
    && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left 
    && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        interactable = 'avtusniiZogsool';
        alinDeerNiZogsojBna = 'avtusniiZogsool';
    }
    if(area1.getBoundingClientRect().left <= hun.getBoundingClientRect().right 
    && area1.getBoundingClientRect().right >= hun.getBoundingClientRect().left 
    && area1.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        interactable = 'nohoi';
        alinDeerNiZogsojBna = 'nohoi';
    }
}
function removeE(){
    if(interactable == 'avtusniiZogsool'){
        if(area.getBoundingClientRect().left >= hun.getBoundingClientRect().right 
        || area.getBoundingClientRect().right <= hun.getBoundingClientRect().left 
        || area.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            document.querySelector('.gameArea').removeChild(hoveringE);
            interactable = 'no';
            alinDeerNiZogsojBna = 'none';
        }
    }   
    if(interactable == 'nohoi'){
        if(area1.getBoundingClientRect().left >= hun.getBoundingClientRect().right 
        || area1.getBoundingClientRect().right <= hun.getBoundingClientRect().left 
        || area1.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            document.querySelector('.gameArea').removeChild(hoveringE);
            interactable = 'no';
            alinDeerNiZogsojBna = 'none';
        }
    }  
}
function floatingE(){
    document.querySelector('.gameArea').appendChild(hoveringE);
}

// NOHOITOI YARIH

const dialog = document.createElement('div')
    dialog.setAttribute('class', 'dialog')
    const Ebutton = document.createElement('div')
        Ebutton.setAttribute('class', 'E')
        Ebutton.setAttribute('onclick', 'nextDialog()')
    dialog.append(Ebutton)

function dialogue(){
    document.querySelector('.gameArea').style.filter = 'brightness(30%)'
    document.body.append(dialog);
}

let i = 2;
function nextDialog(){
    switch (i) {
        case 1:
            dialog.style.backgroundImage = 'url("./images/dialog1.svg")'
            i++;
            break;
        case 2:
            dialog.style.backgroundImage = 'url("./images/dialog2.svg")'
            i++;
            break;
        case 3:
            dialog.style.backgroundImage = 'url("./images/dialog3.svg")'
            i++;
            break;   
        case 4:
            dialog.style.backgroundImage = 'url("./images/dialog4.svg")'
            i++;
            break;     
        case 5:
            dialog.style.backgroundImage = 'url("./images/dialog5.svg")'
            i++;
            break;
        case 6:
            document.body.removeChild(dialog);
            document.querySelector('.gameArea').style.filter = 'brightness(100%)'
            break;
    }
}

//dasdadsdasa

const a1 = document.createElement('a')
    a1.setAttribute('class', 'muzei-button')
    a1.setAttribute('href', '../museum/museumOutdoor.html')
const a2 = document.createElement('a')
    a2.setAttribute('class', 'zaisan-button')
    a2.setAttribute('href', '../zaisan/zaisan.html')
function selectNextLocation(){
    document.querySelector('.gameArea').style.filter = 'brightness(50%)'
    document.body.append(a1);
    document.body.append(a2);
  
    document.querySelector('.gameArea').style.filter = 'brightness(30%)'
    document.body.append(a1);
    document.body.append(a2);
}
function close(){
    if (counter4 == 'selectNextLocation'){
        document.querySelector('.gameArea').style.filter = 'brightness(100%)'
        document.body.removeChild(a1)
        document.body.removeChild(a2);
    }
    if (counter4 == 'dialogue'){
        document.querySelector('.gameArea').style.filter = 'brightness(100%)'
        document.body.removeChild(dialog);
    }
   
}

// ARAAR NI OROH

function backAndForth(){
    if(hun.style.top <= 66 + '%'){
        if(hun.getBoundingClientRect().bottom < document.querySelector('.npc1').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc1').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc1').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc1').getBoundingClientRect().left

        || hun.getBoundingClientRect().bottom < document.querySelector('.dog').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.dog').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.dog').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.dog').getBoundingClientRect().left

        || hun.getBoundingClientRect().bottom < document.querySelector('.npc2').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc2').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc2').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc2').getBoundingClientRect().left

        || hun.getBoundingClientRect().bottom < document.querySelector('.npc3').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc3').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc3').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc3').getBoundingClientRect().left

        || hun.getBoundingClientRect().bottom < document.querySelector('.npc4').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc4').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc4').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc4').getBoundingClientRect().left){
            hun.style.zIndex = "1";
        }else{
            hun.style.zIndex = "3";
            if(hun.style.top <= 58 + '%'){
                hun.style.zIndex = "2"
            }
        }
    }else{
        if(hun.getBoundingClientRect().bottom < document.querySelector('.npc5').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc5').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc5').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc5').getBoundingClientRect().left

        || hun.getBoundingClientRect().bottom < document.querySelector('.npc6').getBoundingClientRect().bottom 
        && hun.getBoundingClientRect().bottom > document.querySelector('.npc6').getBoundingClientRect().top
        && hun.getBoundingClientRect().left < document.querySelector('.npc6').getBoundingClientRect().right
        && hun.getBoundingClientRect().right > document.querySelector('.npc6').getBoundingClientRect().left){
            hun.style.zIndex = "4";
        }else{
            hun.style.zIndex = "5";
        }
    }
}

//MASHIN MURGUH

setInterval(murguh, 100)

let counter3 = 'yes';

function murguh(){
    if(hun.getBoundingClientRect().bottom <= document.querySelector('.carBlue').getBoundingClientRect().bottom 
    && hun.getBoundingClientRect().bottom >= document.querySelector('.carBlue').getBoundingClientRect().top + 55
    && hun.getBoundingClientRect().left <= document.querySelector('.carBlue').getBoundingClientRect().right
    && hun.getBoundingClientRect().right >= document.querySelector('.carBlue').getBoundingClientRect().left

    || hun.getBoundingClientRect().bottom <= document.querySelector('.carGray').getBoundingClientRect().bottom 
    && hun.getBoundingClientRect().bottom >= document.querySelector('.carGray').getBoundingClientRect().top + 40 
    && hun.getBoundingClientRect().left <= document.querySelector('.carGray').getBoundingClientRect().right
    && hun.getBoundingClientRect().right >= document.querySelector('.carGray').getBoundingClientRect().left
    
    || hun.getBoundingClientRect().bottom <= document.querySelector('.carOrange').getBoundingClientRect().bottom 
    && hun.getBoundingClientRect().bottom >= document.querySelector('.carOrange').getBoundingClientRect().top + 65
    && hun.getBoundingClientRect().left <= document.querySelector('.carOrange').getBoundingClientRect().right
    && hun.getBoundingClientRect().right >= document.querySelector('.carOrange').getBoundingClientRect().left
    
    || hun.getBoundingClientRect().bottom <= document.querySelector('.carYellow').getBoundingClientRect().bottom 
    && hun.getBoundingClientRect().bottom >= document.querySelector('.carYellow').getBoundingClientRect().top + 70
    && hun.getBoundingClientRect().left <= document.querySelector('.carYellow').getBoundingClientRect().right
    && hun.getBoundingClientRect().right >= document.querySelector('.carYellow').getBoundingClientRect().left){
        console.log('yes')
        if(counter3 == 'yes'){
            const gameOver = document.createElement('div');
            gameOver.setAttribute('class', 'gameOver')
            document.querySelector('.background').append(gameOver);
            const buttonTiim = document.createElement('div')
            const buttonUgui = document.createElement('div')
            buttonTiim.setAttribute('class', 'tiim')
            buttonTiim.setAttribute('onclick', 'refreshTab()')
            buttonUgui.setAttribute('class', 'ugui')
            buttonUgui.setAttribute('onclick', 'quitToStart()')
            gameOver.append(buttonTiim)
            gameOver.append(buttonUgui)
        }
        counter3 = 'no';
    }
}

// RESTART OR QUIT

function refreshTab(){
    location.reload();
}
function quitToStart(){
    location.assign('../index.html');
}

// GERLEN DOHIO

// setInterval(gerlenDohio, 1000)
// let dohio = 'red'

// function gerlenDohio(){
//     if(dohio == 'red'){
//         document.querySelector('.redLight').style.backgroundColor = "#9F0011"
//         document.querySelector('.greenLight').style.backgroundColor = "transparent"
//         dohio = 'green';
//     }else{
//         document.querySelector('.redLight').style.backgroundColor = "transparent"
//         document.querySelector('.greenLight').style.backgroundColor = "#00B498"
//         dohio = 'red';
//     }
        
// }