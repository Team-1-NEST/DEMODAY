//HUDULGUDUG FUNKTSUUD
var variable1 = 2;
var element;
var inter;
var isModalOpen = false;
const hun = document.getElementById("Hun");
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
            alhah()
            nextMove()
            removeE()
        }
        hun.style.transform = 'scaleX(-1)'
    }
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // RIGHT
        if (hun.style.left < 90 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
            alhah()
            nextMove()
            removeE()
        }
        hun.style.transform = 'scaleX(1)'
    }
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // DOWN
        if (hun.style.top < 90 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
            alhah()
            nextMove()
            removeE()
        }
    }
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // UP
        if (hun.style.top > 30 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
            alhah()
            nextMove()
            removeE()
        }
    }
    if (evt.keyCode == 69 && counter1 == 'yes') {
        isModalOpen = true;
        selectNextLocation();
    }
    if (evt.keyCode == 27 && counter1 == 'yes') {
        close();
    }
    if (evt.keyCode == 27 && counter2 == 'yes') {
        previousPage();
    }
}
function alhah(){
    document.querySelector('#Hun').style.backgroundImage = 'url("./images/hunGIF.gif")'
    document.querySelector('#Hun').style.width = '74px'
    document.querySelector('#Hun').style.height = '133px'
    document.querySelector('#Hun').style.marginLeft = '0px'
}
function moving(evt) {
    clearInterval(inter)
    inter = null;
    document.querySelector('#Hun').style.backgroundImage = 'url("./images/hun-stand.svg")'
    document.querySelector('#Hun').style.width = '74px'
    document.querySelector('#Hun').style.height = '133px'
    document.querySelector('#Hun').style.marginLeft = '0px'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);
//----------------------------------------------//

const area = document.querySelector(".area");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'E'); 
let counter1 = 'no';
let counter2 = 'yes';
  

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right 
    && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left 
    && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        counter1 = 'yes';
        counter2 = 'no';
    }
}

function removeE(){
    if(counter1 == 'yes'){
        if(area.getBoundingClientRect().left >= hun.getBoundingClientRect().right 
        || area.getBoundingClientRect().right <= hun.getBoundingClientRect().left 
        || area.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            document.querySelector('body').removeChild(hoveringE);
            counter1 = 'no';
            counter2 = 'yes';
        }
    }   
}

function floatingE(){
    document.querySelector('body').appendChild(hoveringE);
}

function previousPage() {
    location.replace("../public/muzein-uzver-room1/index.html")
}
