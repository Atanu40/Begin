// -----------------Navigation---------------------//
// const body = document.querySelector("body");
// var section_heading_primary = document.querySelector(".section-heading-primary");
// var section_para_txt = document.querySelector(".section-txt");
// let toggle = document.querySelector(".toggle");
// var section_para_txt_dark = document.querySelector("section-txt-dark");

// let nav_content_formate = document.querySelector(".nav-content-formate");
// var nav_anchor = document.querySelector(".nav-content__anchor");
// var nav_transparent_btn = document.querySelector(".nav-content__btn--transparent");
// var nav_cyn_btn = document.querySelector(".nav-content__btn--cyan");

// var section02_container = document.querySelector(".section-02");
// var section03_container = document.querySelector(".section-03");
// var section04_container = document.querySelector(".section-04");
// var section05_full_container = document.querySelector(".section-05");
// var section05_container = document.querySelector(".section05-container");
// var section06_container = document.querySelector(".section-06");
// var section07_container = document.querySelector(".section-07");
// var section08_container = document.querySelector(".accordion");
// var section08_container1 = document.querySelector(".content");
// var section08_container2 = document.querySelector(".section-08");
// var section09_container = document.querySelector(".section-09");
// var section10_container = document.querySelector(".section-10");

// var section04_txt = document.querySelector(".section04-txt");

// toggle.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   section_heading_primary.classList.toggle("dark");
//   section_para_txt.classList.toggle("dark");

// });
// toggle.addEventListener("click", () => {
//   nav_content_formate.classList.toggle("dark1");
//   nav_anchor.classList.toggle("dark1");
//   nav_transparent_btn.classList.toggle("dark1");
//   nav_cyn_btn.classList.toggle("dark1");

//   section02_container.classList.toggle("dark1");
//   section03_container.classList.toggle("dark1");
//   section04_container.classList.toggle("dark1");
//   section05_full_container.classList.toggle("dark1");
//   section05_container.classList.toggle("dark1");
//   section06_container.classList.toggle("dark1");
//   section07_container.classList.toggle("dark1");
//   section09_container.classList.toggle("dark1");
//   section10_container.classList.toggle("dark1");

//   section04_txt.classList.toggle("dark1");
//   section08_container.classList.toggle("dark1");
//   section08_container1.classList.toggle("dark1");
//   section08_container2.classList.toggle("dark1");

// });

// let toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

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

// When someone clicks the button
// lightModeToggle.addEventListener("click", () => {
//   // get their lightMode setting
//   lightMode = localStorage.getItem("lightMode");

//   // if it not current enabled, enable it
//   if (lightMode !== "enabled") {
//     enablelightMode();
//     // if it has been enabled, turn it off
//   } else {
//     disablelightMode();
//   }
// });

// -----------------Accordion---------------------//
const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// const slider = document.querySelector('.page-width');
// const slides = slider.querySelector('section-09-contain');
// const prevButton = slider.querySelector('.left-img-arrow');
// const nextButton = slider.querySelector('.right-img-arrow');
// let currentIndex = 0;

// //--------------------Slider---------------------//

// function slideTo(index) {
//   slides.style.transform = `translateX(-${index * 200}px)`;
//   currentIndex = index;
// }

// prevButton.addEventListener('click', () => {
//   const index = currentIndex > 0 ? currentIndex - 1 : slides.children.length - 1;
//   slideTo(index);
// });

// nextButton.addEventListener('click', () => {
//   const index = currentIndex < slides.children.length - 1 ? currentIndex + 1 : 0;
//   slideTo(index);
// });

// // Auto-play the slider
// setInterval(() => {
//   const index = currentIndex < slides.children.length - 1 ? currentIndex + 1 : 0;
//   slideTo(index);
// }, 5000);
