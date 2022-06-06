function drag_start(event) {
  var style = window.getComputedStyle(event.target, null);
  var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
  event.dataTransfer.setData("Text", str);
}

function drop1(event) {
  var sum = 0;
  var offset = event.dataTransfer.getData("Text/plain").split(',');
  var dm = document.getElementById(offset[2]);
  const x = dm.clientWidth/2;
  const y = dm.clientHeight/2;
  var height = ((event.clientY)-((window.innerHeight - 672)/2 + 135 + 197.35 + y + 13))
  var width = ((event.clientX)-((window.innerWidth - 976.53)/2 + 107.5 + x - 5))

  // console.log(offset[2]);
  // console.log(height);
  // console.log(width);

  if (height > -215.35 && height < 186.65 - y*2 && width > 0 && width < 764 - x*2)  {
    dm.style.marginLeft = width + 'px';
    dm.style.marginTop = height + 'px';
    
    switch (offset[2]) {
      case 'drag1':
        if (height > '-150' && height < '-130' && width > '300' && width < '320') {
          dm.style.marginLeft = 307 + 'px';
          dm.style.marginTop = -140 + 'px';
        }
        break;
  
      case 'drag2':
      if (height > '-125' && height < '-105' && width > '290' && width < '310') {
        dm.style.marginLeft = 298 + 'px';
        dm.style.marginTop = -115 + 'px';
      }
      break;
      case 'drag3':
      if (height > '-166' && height < '-146' && width > '170' && width < '190') {
        dm.style.marginLeft = 181 + 'px';
        dm.style.marginTop = -156 + 'px';
      }
      break;
      case 'drag4':
      if (height > '-168' && height < '-148' && width > '469' && width < '489') {
        dm.style.marginLeft = 479 + 'px';
        dm.style.marginTop = -158 + 'px';
      }
      break;
      case 'drag5':
      if (height > '-106' && height < '-86' && width > '414' && width < '434') {
        dm.style.marginLeft = 424 + 'px';
        dm.style.marginTop = -96 + 'px';
      }
      break;
      case 'drag6':
      if (height > '-127' && height < '107' && width > '234' && width < '254') {
        dm.style.marginLeft = 244 + 'px';
        dm.style.marginTop = -117 + 'px';
      }
      break;
      case 'drag7':
      if (height > '-110' && height < '-90' && width > '421' && width < '441') {
        dm.style.marginLeft = 431 + 'px';
        dm.style.marginTop = -100 + 'px';
      }
      break;
      case 'drag8':
      if (height > '-155' && height < '-135' && width > '424' && width < '444') {
        dm.style.marginLeft = 434 + 'px';
        dm.style.marginTop = -147 + 'px';
      }
      break;
      case 'drag9':
      if (height > '-147' && height < '-127' && width > '207' && width < '227') {
        dm.style.marginLeft = 217 + 'px';
        dm.style.marginTop = -137 + 'px';
      }
      break;
      case 'drag10':
      if (height > '-206' && height < '186' && width > '282' && width < '302') {
        dm.style.marginLeft = 292 + 'px';
        dm.style.marginTop = -196 + 'px';
      }
      break;
      case 'drag11':
      if (height > '-173' && height < '-153' && width > '375' && width < '395') {
        dm.style.marginLeft = 385 + 'px';
        dm.style.marginTop = -165 + 'px';
      }
      break;
      case 'drag12':
      if (height > '-125' && height < '-105' && width > '458' && width < '478') {
        dm.style.marginLeft = 468 + 'px';
        dm.style.marginTop = -115 + 'px';
      }
      break;
      case 'drag13':
      if (height > '-149' && height < '-129' && width > '370' && width < '390') {
        dm.style.marginLeft = 380 + 'px';
        dm.style.marginTop = -139 + 'px';
      }
      break;
      case 'drag14':
      if (height > '-79' && height < '59' && width > '311' && width < '331') {
        dm.style.marginLeft = 321 + 'px';
        dm.style.marginTop = -69 + 'px';
      }
      break;
      case 'drag15':
      if (height > '-182' && height < '-162' && width > '197' && width < '217') {
        dm.style.marginLeft = 207 + 'px';
        dm.style.marginTop = -172 + 'px';
      }
      break;
      case 'drag16':
      if (height > '-121' && height < '-101' && width > '333' && width < '353') {
        dm.style.marginLeft = 343 + 'px';
        dm.style.marginTop = -111 + 'px';
      }
      break;
      case 'drag17':
      if (height > '-166' && height < '-146' && width > '237' && width < '257') {
        dm.style.marginLeft = 247 + 'px';
        dm.style.marginTop = -156 + 'px';
      }
      break;
      case 'drag18':
      if (height > '-174' && height < '-154' && width > '341' && width < '361') {
        dm.style.marginLeft = 351 + 'px';
        dm.style.marginTop = -166 + 'px';
      }
      break;
      case 'drag19':
      if (height > '-108' && height < '-88' && width > '364' && width < '384') {
        dm.style.marginLeft = 374 + 'px';
        dm.style.marginTop = -98 + 'px';
      }
      break;
  }
  for (let i = 1; i < 20; i++){
    var m = 'drag' + i;
    var height1 = parseInt(document.getElementById(m).style.marginTop.slice(0, -2));
    var width1 = parseInt(document.getElementById(m).style.marginLeft.slice(0, -2));
    switch (m) {
      case 'drag1':
      if (height1 > '-150' && height1 < '-130' && width1 > '300' && width1 < '320') {
        sum++;
      }
      break;
      case 'drag2':
      if (height1 > '-125' && height1 < '-105' && width1 > '290' && width1 < '310') {
        sum++;
      }
      break;
      case 'drag3':
      if (height1 > '-166' && height1 < '-146' && width1 > '170' && width1 < '190') {
        sum++;
      }
      break;
      case 'drag4':
      if (height1 > '-168' && height1 < '-148' && width1 > '469' && width1 < '489') {
        sum++;
      }
      break;
      case 'drag5':
      if (height1 > '-106' && height1 < '-86' && width1> '414' && width1< '434') {
        sum++;
      }
      break;
      case 'drag6':
      if (height1 > '-127' && height1 < '107' && width1> '234' && width1< '254') {
        sum++;
      }
      break;
      case 'drag7':
      if (height1 > '-110' && height1 < '-90' && width1> '421' && width1< '441') {
        sum++;
      }
      break;
      case 'drag8':
      if (height1 > '-155' && height1 < '-135' && width1 > '424' && width1 < '444') {
        sum++;
      }
      break;
      case 'drag9':
      if (height1 > '-147' && height1 < '-127' && width1 > '207' && width1 < '227') {
        sum++;
      }
      break;
      case 'drag10':
      if (height1 > '-206' && height1 < '186' && width1> '282' && width1< '302') {
        sum++;
      }
      break;
      case 'drag11':
      if (height1 > '-173' && height1 < '-153' && width1 > '375' && width1 < '395') {
        sum++;
      }
      break;
      case 'drag12':
      if (height1 > '-125' && height1 < '-105' && width1 > '458' && width1 < '478') {
        sum++;
      }
      break;
      case 'drag13':
      if (height1 > '-149' && height1 < '-129' && width1 > '370' && width1 < '390') {
        sum++;
      }
      break;
      case 'drag14':
      if (height1 > '-79' && height1 < '59' && width1 > '311' && width1 < '331') {
        console.log('MMMMMMMMMMMMMM')
        sum++;
      }
      break;
      case 'drag15':
      if (height1 > '-182' && height1 < '-162' && width1 > '197' && width1 < '217') {
        sum++;
      }
      break;
      case 'drag16':
      if (height1 > '-121' && height1 < '-101' && width1 > '333' && width1 < '353') {
        sum++;
      }
      break;
      case 'drag17':
      if (height1 > '-166' && height1 < '-146' && width1 > '237' && width1 < '257') {
        sum++;
      }
      break;
      case 'drag18':
      if (height1 > '-174' && height1 < '-154' && width1 > '341' && width1 < '361') {
        sum++;
      }
      break;
      case 'drag19':
      if (height1 > '-108' && height1 < '-88' && width1> '364' && width1< '384') {
        sum++;
      }
      break;
    }
  }
  // console.log(sum);
  if (sum == 19) {
    let bg = document.createElement("div").cloneNode(true)
    let text1 = document.createElement("h1").cloneNode(true)
    let text2 = document.createElement("h3").cloneNode(true)
    let butn = document.createElement("button").cloneNode(true)

    butn.addEventListener("click", function(){next3()});
    butn.id = 'next4';
    text1.id = 'text1';
    text2.id = 'text2';
    bg.id = 'bg';
    text1.innerHTML = "Баяр хүргэе"
    text2.innerHTML = "Та амжилттай нэг үеийг давж чадлаа."

    document.body.appendChild(bg)
    document.getElementById("bg").appendChild(text1)
    document.getElementById("bg").appendChild(text2)
    document.getElementById('bg').appendChild(butn);
    maiin.style.filter = ("brightness(50%)")
  }
  return false;
  }
}

function next3(){
  location.replace("../public/muzein-uzver-room1/index.html")
}


function drag_over(event) {
  event.preventDefault();
  return false;
}

//-drag-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i < 20; i++) {
  var drag = 'drag' + i;
  var am = document.getElementById(drag);
  am.addEventListener('dragstart', drag_start, false);
  document.body.addEventListener('dragover', drag_over, false);
  document.body.addEventListener('drop', drop1, false);
}

// -Quiz---------------------------------------------------------------------------------------------------------------------------------

const maiin = document.querySelector(".maiin")
const buttontemp = document.querySelector("#button")
const container = document.querySelector(".container")
button.style.display = "none"

function wrongAns(button, answer){
  //button.style.color = "red"
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

createButtons(21,22,23,24,21)

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
  info.innerHTML = "Монгол Улс 21 аймаг, 330 сум, 9 дүүрэг, 152 хороотой байна.   Архангай, Баян-Өлгий, Баянхонгор, Булган, Говь-Алтай, Говьсүмбэр, Дархан-Уул,  Дорноговь, Дорнод, Дундговь, Завхан, Орхон, Өвөрхангай, Өмнөговь, Сүхбаатар, Сэлэнгэ, Төв аймаг, Увс, Ховд, Хөвсгөл, Хэнтий гэсэн аймгууд байдаг байх нь ээ"

  let butn = document.createElement("button").cloneNode(true)
  butn.addEventListener("click", function(){next1()});
  butn.id = 'next';
  document.body.appendChild(butn);
}

function next1() {
  const ml = document.querySelector("#infobox")
  const skip = document.getElementById("next")
  let hint = document.createElement("button").cloneNode(true)
  hint.addEventListener("click", function(){hint1()});
  hint.id = 'hint1';
  document.body.appendChild(hint);

  skip.remove();
  ml.remove();
  maiin.style.filter = ("brightness(100%)")
}

//-hint-----------------------------------------------------------------------------------------------------------

function hint1() {
  let index = document.querySelector("#gadar");
  let index1 = index.style.zIndex;

  if (index1 == "0") {
    index.style.zIndex = "5";
    maiin.style.filter = ("brightness(50%)")
  }else{
    index.style.zIndex = "0";
    maiin.style.filter = ("brightness(100%)")
  }
}