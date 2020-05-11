let engine = false;
let audio = new Audio("./assets/start.mp3");
let gas = new Audio("./assets/gas.mp3");
audio.loop = true;
document.querySelector(".startEngine").addEventListener("click", function () {
  console.log(this);
  //   let start = document.querySelector(".startEngine");
  //   console.log(start);
  if (!engine) {
    engine = true;
    this.style.backgroundColor = "green";
    this.innerHTML = "Stop";
    audio.play();
    document.querySelector(".gasPedal").addEventListener("click", pushPedal);
    document.querySelector(".levelRange").style.width = "50px";
  } else {
    engine = false;
    this.style.backgroundColor = "red";
    this.innerHTML = "Start";
    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".gasPedal").removeEventListener("click", pushPedal);
    document.querySelector(".levelRange").style.width = "0";
    document.querySelector(".gasPedal").classList.remove("rotatePedal");
  }
});

function pushPedal() {
  this.classList.add("rotatePedal");
  gas.play();
  //   audio.volume = 0.1;
  document.querySelector(".levelRange").style.width = "200px";

  setTimeout(function () {
    document.querySelector(".gasPedal").classList.remove("rotatePedal");
    // gas.currentTime = 0;
    audio.volume = 0.8;
    document.querySelector(".levelRange").style.width = "50px";
  }, 2500);
}
