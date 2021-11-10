// video
var video = document.getElementById("Video");
var btn = document.getElementById("Btn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


// burger

let navigation = document.getElementById('navigation');
let burgericon = document.getElementById('burger');
burgericon.addEventListener('click',function(){
  navigation.classList.toggle('active');
})
