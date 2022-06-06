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
            nextMove();
            removeE();
            alhah();
            // backAndForth()
        }
        hun.style.transform = 'scaleX(-1)';
    }
    // RIGHT
    if (evt.keyCode == 68 || evt.keyCode == 39) {
        // baruun tiish yavah hyazgaarlalt
        if (hun.style.left < 93 + '%') {
            hun.style.left = (parseFloat(hun.style.left) + 0.5) + '%';
            nextMove();
            removeE();
            alhah();
            // backAndForth()
        }
        hun.style.transform = 'scaleX(1)'
    }
    // DOWN
    if (evt.keyCode == 83 || evt.keyCode == 40) {
        // dooshoo yavah hyazgaarlalt
        if (hun.style.top < 70 + '%'){
            hun.style.top = (parseFloat(hun.style.top) + 0.5) + '%';
            nextMove();
            removeE();
            alhah();
            // backAndForth()
        }
    }
    // UP
    if (evt.keyCode == 87 || evt.keyCode == 38) {
        // deeshee yavah hyazgaarlalt
        if (hun.style.top > 20 + '%') {
            hun.style.top = (parseFloat(hun.style.top) - 0.5) + '%';
            nextMove();
            removeE();
            alhah();
            // backAndForth()
        }
    }
    if (evt.keyCode == 69 && counter1 == 'yes') {
        selectNextLocation();
    }
    if (evt.keyCode == 27 && counter2 == 'yes') {
        previousPage();
    }
    if (evt.keyCode == 69 && counter3 == 'yes') {
        selectNextLocation1();
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
    document.querySelector('#hun').style.backgroundImage = 'url("../muzein-lounge/source/hun-stand.svg")'
    document.querySelector('#hun').style.width = '74px'
    document.querySelector('#hun').style.marginLeft = '0px'
}
window.addEventListener('keydown', moveSelection);
window.addEventListener('keyup', moving);


function alhah(){
    document.querySelector('#hun').style.backgroundImage = 'url("../muzein-lounge/source/hunGIF.gif")'
    document.querySelector('#hun').style.width = '74px'
    document.querySelector('#hun').style.marginLeft = '0px'
}
// E garj ireh 

const area1 = document.querySelector('.area1');
const area = document.querySelector(".area");
const hoveringE = document.createElement('div');
    hoveringE.setAttribute('class', 'pressE');
let counter1 = 'no';
let counter2 = 'yes';
let counter3 = 'no';

function nextMove(){
    if(area.getBoundingClientRect().left <= hun.getBoundingClientRect().right && area.getBoundingClientRect().right >= hun.getBoundingClientRect().left && area.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
        floatingE();
        counter1 = 'yes';
        counter2 = 'no';
        counter3 = 'no';
    }
}
function removeE(){
    if(counter1 == 'yes'){
        if(area.getBoundingClientRect().left >= hun.getBoundingClientRect().right || area.getBoundingClientRect().right <= hun.getBoundingClientRect().left || area.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
            document.querySelector('body').removeChild(hoveringE);
            counter1 = 'no';
            counter2 = 'yes';
            counter3 = 'no';
        }
    }   
}
// function nextMove(){
//     if(area1.getBoundingClientRect().left <= hun.getBoundingClientRect().right && area1.getBoundingClientRect().right >= hun.getBoundingClientRect().left && area1.getBoundingClientRect().bottom >= hun.getBoundingClientRect().bottom){
//         floatingE();
//         counter1 = 'no';
//         counter2 = 'no';
//         counter3 = 'yes';
//     }
// }
// function removeE(){
//     if(counter3 == 'yes'){
//         if(area1.getBoundingClientRect().left >= hun.getBoundingClientRect().right || area1.getBoundingClientRect().right <= hun.getBoundingClientRect().left || area1.getBoundingClientRect().bottom <= hun.getBoundingClientRect().bottom){
//             document.querySelector('body').removeChild(hoveringE);
//             counter1 = 'no';
//             counter2 = 'yes';
//             counter3 = 'no';
//         }
//     }   
// }

function floatingE(){
    document.querySelector('body').appendChild(hoveringE);
}

function selectNextLocation(){
    window.location.assign('../muzein-uzver-room1/index.html')
}
function selectNextLocation1(){
    window.location.assign('../muzein-uzver-room1/index.html')
}
function previousPage() {
    location.replace("../museum/museumOutdoor.html")
}

// function backAndForth(){
//     if(hun.getBoundingClientRect().bottom < document.querySelector('#Human-One').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-One').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-One').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-One').getBoundingClientRect().left

//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Two').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Two').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Two').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Two').getBoundingClientRect().left
    
//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Three').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Three').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Three').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Three').getBoundingClientRect().left
    
//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Four').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Four').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Four').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Four').getBoundingClientRect().left

//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Five').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Five').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Five').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Five').getBoundingClientRect().left

//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Six').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Six').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Six').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Six').getBoundingClientRect().left
    
//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Seven').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Seven').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Seven').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Seven').getBoundingClientRect().left
    
//     || hun.getBoundingClientRect().bottom < document.querySelector('#Human-Eight').getBoundingClientRect().bottom 
//     && hun.getBoundingClientRect().bottom > document.querySelector('#Human-Eight').getBoundingClientRect().top
//     && hun.getBoundingClientRect().left < document.querySelector('#Human-Eight').getBoundingClientRect().right
//     && hun.getBoundingClientRect().right > document.querySelector('#Human-Eight').getBoundingClientRect().left){
//         hun.style.zIndex = "1";
//     }else{
//         hun.style.zIndex = "2";
//     }
// }