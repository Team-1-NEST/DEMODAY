//HUDULGUDUG FUNKTSUUD

var element;
var inter;
const hun = document.getElementById("hun");
function moveSelection(evt) {
    if (inter) {
        clearTimeout(inter);
    }
    inter = setInterval(move, 20, evt)
}
function move(evt) {
    if (evt.keyCode == 65 || evt.keyCode == 37) {
        // LEFT
        if (hun.style.left > 0 + '%') {
            hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
            nextMove()
            alhah()
            removeE()
        }
        hun.style.transform = 'scaleX(-1)'
    }
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // RIGHT
        if (hun.style.left < 93 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
            nextMove()
            alhah()
            removeE()
        }
        hun.style.transform = 'scaleX(1)'
    }
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // DOWN
        if (hun.style.top < 75 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
            nextMove()
            alhah()
            removeE()
        }
    }
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // UP
        if (hun.style.top > 62.5 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
            nextMove()
            alhah()
            removeE()
        }
    }
    if (evt.keyCode == 69 && counter2 == 'yes') {
        selectNextLocation();
    }
}
function moving(evt) {
    clearInterval(inter)
    inter = null;
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hun-stand.svg")'
    document.querySelector('#hun').style.width = '68.53px'
    document.querySelector('#hun').style.marginLeft = '0%'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

// DARAACHIIN GAZAR SONGOH
// E garj ireh 

function alhah(){
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hunGIF.gif")'
    document.querySelector('#hun').style.width = '58.53px'
    document.querySelector('#hun').style.marginLeft = '10px'
}
const area = document.querySelector(".area");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'pressE'); 
    hoveringE.innerHTML = 'E'
let counter1 = 'no';
let counter2 = 'no';

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right 
    && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left 
    && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        counter1 = 'yes';
        counter2 = 'yes'
    }
}
function removeE(){
    if(counter1 == 'yes'){
        if(area.getBoundingClientRect().left >= hun.getBoundingClientRect().right 
        || area.getBoundingClientRect().right <= hun.getBoundingClientRect().left 
        || area.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            hun.removeChild(hoveringE);
            counter1 = 'no';
            counter2 = 'no';
        }
    }   
}
function floatingE(){
    hun.appendChild(hoveringE);
}
function selectNextLocation(){
    const a1 = document.createElement('a')
    a1.setAttribute('href', '../bus-stop/busStop.html')
    a1.click();
}
