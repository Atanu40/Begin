// LIGHT MODE AND DARK MODE //

let lightMode = localStorage.getItem("lightMode");
const enablelightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("lightMode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disablelightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("lightMode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", null);
};

// If the user already visited and enabled lightMode
// start things off with it on
if (lightMode === "enabled") {
  enablelightMode();
}

// When someone clicks the button just do the opposite / toggle //

let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");

  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enablelightMode();
    console.log("enabled");
    // if it has been enabled, turn it off
  } else {
    disablelightMode();
  }
});

// TOGGLE 2  FOR SMALL DEVICE//

let toggle1 = document.querySelector(".toggle1");
toggle1.addEventListener("click", () => {
  toggle1.classList.toggle("active");

  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enablelightMode();
    console.log("enabled");
    // if it has been enabled, turn it off
  } else {
    disablelightMode();
  }
});

// -----------------MOBILE NAVBAR---------------------//
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
  document.body.style.overflow = "hidden";

  if(nav_header.classList.contains("active") === false){
    document.body.style.overflow = "auto";
  }
};

mobile_nav.addEventListener("click", () => toggleNavbar());






// -----------------Accordion---------------------//
const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// -----------------TOP  TO  BOTTOM BTN ---------------------//

let mybutton = document.querySelector(".fbtn");
function topFunction() {
  mybutton.classList.toggle("active");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", () => topFunction());



// -----------------VIDEO  PLAY  BTN ---------------------//

var video = document.getElementById("myVideo");
//var section05extra = document.querySelector(".section05-extra");
// Get the button
var btn = document.getElementById("section05-btn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.classList.add("active");
    //section05extra.classList.add("active");
    video.play();
    // btn.innerHTML = "Pause";
  } else {
    video.pause();
    // btn.innerHTML = "Play";
  }
}