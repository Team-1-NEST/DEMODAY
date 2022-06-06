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
            nextMove()
            removeE()
            alhah()
        }
        hun.style.transform = 'scaleX(-1)';
    }
    // RIGHT
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // baruun tiish yavah hyazgaarlalt
        if (hun.style.left < 93 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
            nextMove()
            removeE()
            alhah()
        }
        hun.style.transform = 'scaleX(1)'
    }
    // DOWN
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // dooshoo yavah hyazgaarlalt
        if (hun.style.top < 85 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
            nextMove()
            removeE()
            alhah()
        }
    }
    // UP
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // deeshee yavah hyazgaarlalt
        if (hun.style.top > 65 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
            nextMove()
            removeE()
            alhah()
        }
    }

    // if (evt.keyCode == 69 && counter3 == yes) {
    //     Select();
    // }
    if (evt.keyCode == 69 && counter2 == 'yes') {
        selectNextLocation();
    }
}
function moving(evt) {
    clearInterval(inter)
    inter = null;
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);

function moving(evt) {
    clearInterval(inter)
    inter = null;
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hun-stand.svg")'
    document.querySelector('#hun').style.width = '68.53px'
    document.querySelector('#hun').style.marginLeft = '0%'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving); 


function alhah(){
    document.querySelector('#hun').style.backgroundImage = 'url("./images/hunGIF.gif")'
    document.querySelector('#hun').style.width = '58.53px'
    document.querySelector('#hun').style.marginLeft = '10px'
}
// E garj ireh 

const area = document.querySelector(".area");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'pressE');
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
            document.querySelector('body').removeChild(hoveringE);
            counter1 = 'no';
            counter2 = 'no';
        }
    }   
}
function floatingE(x){
    document.querySelector('body').appendChild(hoveringE);
}

function selectNextLocation(){
    window.location.assign('../../zaisan-shat/zaisanShat.html')
}
function previousPage(){
    location.replace("../bus-stop/busStop.html")
}