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
    if(hun.style.left <= 37 + '%' || hun.style.left >= 54 + '%'){
        // LEFT
        if (evt.keyCode == 65 || evt.keyCode == 37) {
            // zuun tiish yavah hyazgaarlalt
            if (hun.style.left > 0 + '%') {
                hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
                nextMove()
                alhah()
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
                nextMove()
                alhah()
                removeE()
                backAndForth()
            }
            hun.style.transform = 'scaleX(1)'
        }
        // DOWN
        if (evt.keyCode == 83 || evt.keyCode == 40) {
            // dooshoo yavah hyazgaarlalt
            if (hun.style.top < 70 + '%'){
                hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
                nextMove()
                alhah()
                removeE()
                backAndForth()
            }
        }
        // UP
        if (evt.keyCode == 87 || evt.keyCode == 38) {
            // deeshee yavah hyazgaarlalt
            if (hun.style.top > 53 + '%') {
                hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
                nextMove()
                alhah()
                removeE()
                backAndForth()
            }
        }
    }
    if(hun.style.left > 37 + '%' && hun.style.left < 54 + '%'){
        if(hun.style.top >= 52 + '%'){
            // LEFT
            if (evt.keyCode == 65 || evt.keyCode == 37) {
                // zuun tiish yavah hyazgaarlalt
                if (hun.style.left > 0 + '%') {
                    hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
                    nextMove()
                    alhah()
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
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                }
                hun.style.transform = 'scaleX(1)'
            }
            // DOWN
            if (evt.keyCode == 83 || evt.keyCode == 40) {
                // dooshoo yavah hyazgaarlalt
                if (hun.style.top < 70 + '%'){
                    hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                }
            }
            // UP
            if (evt.keyCode == 87 || evt.keyCode == 38) {
                // deeshee yavah hyazgaarlalt
                if (hun.style.top > 41 + '%') {
                    hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                }
            }
        }
        if(hun.style.top < 52 + '%'){
            // LEFT
            if (evt.keyCode == 65 || evt.keyCode == 37) {
                // zuun tiish yavah hyazgaarlalt
                if (hun.style.left > 38 + '%') {
                    hun.style.left = (parseFloat(hun.style.left) - 0.5) + '%';
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                }
                hun.style.transform = 'scaleX(-1)';
            }
            // RIGHT
            if (evt.keyCode == 68 || evt.keyCode == 39) {
                // baruun tiish yavah hyazgaarlalt
                if (hun.style.left < 53 + '%') {
                    hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                }
                hun.style.transform = 'scaleX(1)' 
            }
            // DOWN
            if (evt.keyCode == 83 || evt.keyCode == 40) {
                // dooshoo yavah hyazgaarlalt
                if (hun.style.top < 70 + '%'){
                    hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
                    nextMove()
                    alhah()
                    removeE()
                    backAndForth()
                    
                }
            }
            // UP
            if (evt.keyCode == 87 || evt.keyCode == 38) {
                // deeshee yavah hyazgaarlalt
                if (hun.style.top > 41 + '%') {
                    hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
                    nextMove()
                     alhah()
                    removeE()
                    backAndForth()
                   
                }
            }
        }
    }
    if (evt.keyCode == 69 && counter1 == 'yes') {
        selectNextLocation();
    }
    if (evt.keyCode == 27 && counter2 == 'yes') {
        previousPage();
    }
}

function moving(evt) {
    clearInterval(inter)
    inter = null;
    document.querySelector('#hun').style.backgroundImage = 'url("../museum/images/hun-stand.svg")'
    document.querySelector('#hun').style.width = '7%'
    document.querySelector('#hun').style.marginLeft = '0%'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);


function alhah(){
    document.querySelector('#hun').style.backgroundImage = 'url("../museum/images/hunGIF.gif")'
    document.querySelector('#hun').style.width = '6.5%'
    document.querySelector('#hun').style.marginLeft = '0.5%'
}
// E garj ireh 

const area = document.querySelector(".area");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'pressE');
let counter1 = 'no';
let counter2 = 'yes';

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        counter1 = 'yes';
        counter2 = 'no'
    }
}
function removeE(){
    if(counter1 == 'yes'){
        if(area.getBoundingClientRect().left >= hun.getBoundingClientRect().right || area.getBoundingClientRect().right <= hun.getBoundingClientRect().left || area.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            document.querySelector('body').removeChild(hoveringE);
            counter1 = 'no';
            counter2 = 'yes';
        }
    }   
}
function floatingE(){
    document.querySelector('body').appendChild(hoveringE);
}
// ARAAR NI OROH

function backAndForth(){
    if(hun.getBoundingClientRect().bottom < document.querySelector('.npc1').getBoundingClientRect().bottom 
    && hun.getBoundingClientRect().bottom > document.querySelector('.npc1').getBoundingClientRect().top
    && hun.getBoundingClientRect().left < document.querySelector('.npc1').getBoundingClientRect().right
    && hun.getBoundingClientRect().right > document.querySelector('.npc1').getBoundingClientRect().left

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
        hun.style.zIndex = "2";
    }
}

function selectNextLocation(){
    window.location.assign('../muzein-lounge/index.html')
}
function previousPage(){
    location.replace("../bus-stop/busStop.html")
}