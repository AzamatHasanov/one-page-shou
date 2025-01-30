let changeRed = document.getElementById("changeRed");
let changeBlue = document.getElementById("changeBlue");
let changeBlueBlac = document.getElementById("changeBlueBlac");
let changeImg = document.getElementById("changeImg");
let btn = document.getElementById("btn");
let lqo = document.getElementById("lqo");
let ires = document.getElementById("ires");
let bds = document.getElementById("bds");

function redShou() {
  changeImg.src = "assest/pngwing 2.png";
  btn.style.backgroundColor = "#E10F15";
  lqo.style.color = "#E10F15";
  ires.style.color = "#C2C2C2";
  bds.style.background = "linear-gradient(178deg, rgb(232 71 85 / 23%), white)";
}

function changeReds() {
  changeImg.src = "assest/pngwing 6.png";
  btn.style.backgroundColor = "#2C77B9";
  lqo.style.color = "#2C77B9";
  ires.style.color = "#F24E3A";
  bds.style.background =
    "linear-gradient(178deg, rgb(71 232 123 / 23%), white)";
}
function blackShou() {
  changeImg.src = "assest/pngwing 1.png";
  btn.style.backgroundColor = "#FB5014";
  lqo.style.color = "#FB5014";
  ires.style.color = "#17B4CC";
  bds.style.background = "linear-gradient(178deg, rgb(71 134 232 / 23%),white)";
}

changeRed.addEventListener("mousedown", redShou);
changeBlue.addEventListener("mousedown", changeReds);
changeBlueBlac.addEventListener("mousedown", blackShou);
