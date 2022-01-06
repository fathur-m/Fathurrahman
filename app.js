// ICON
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const navLink = document.querySelector(".navigation-link");

openIcon.onclick = function () {
  toggleNav();
};
closeIcon.onclick = function () {
  toggleNav();
};

function toggleNav() {
  openIcon.classList.toggle("hide-icon");
  closeIcon.classList.toggle("show-icon");
  navLink.classList.toggle("left-min");
}

// MUSIC JS //

var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playbtn");

var playPause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

playBtn.addEventListener("click", playPause);

player.onplay = function () {
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
};

player.onpause = function () {
  playBtn.classList.add("fa-play");
  playBtn.classList.remove("fa-pause");
};

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  // progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
};

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

// BG SWITCH

var changeColor = document.getElementById("toggleSwitch");
clicked = true;

changeColor.onclick = function toggleBG() {
  changeColor.classList.toggle("far");
  changeColor.classList.toggle("fas");
  changeColor.classList.toggle("toggle-switch-dark");
  document.querySelector(".ul-mobile").classList.toggle("dark-mode-ul");
  // --
  // var linkMobile, i;
  // linkMobile = document.querySelectorAll(".link-mobile");
  // for (i = 0; i < linkMobile.length; i++) {
  //   linkMobile[i].classList.toggle("link-mobile-dark");
  // }
  // --
  let myLogo = document.querySelector(".logo-change");
  let mySrc = myLogo.getAttribute("src");
  if (mySrc === "img/f-light@2x.png") {
    myLogo.setAttribute("src", "img/apple-icon/apple-touch-icon-180x180.png");
  } else {
    myLogo.setAttribute("src", "img/f-light@2x.png");
  }
  document.querySelector(".logo-desc").classList.toggle("change-logo-desc");
  progress.classList.toggle("music-progress-dark");
  // --
  document.body.classList.toggle("dark-bg");
  document.querySelector(".navbar-mobile-fixed").classList.toggle("dark-bg");
  if (clicked) {
    document.documentElement.style.setProperty("--bg", "black");
    clicked = false;
  } else {
    document.documentElement.style.setProperty("--bg", "#607ea0");
    clicked = true;
  }
};

let arrowDown = document.querySelector(".explore-click");
let exploreDesc = document.querySelector(".explore-desc");

function exploreClick() {
  let sectionOne = document.getElementById("section-welcome");
  sectionOne.scrollIntoView({ behavior: "smooth" });
}
exploreDesc.onclick = function () {
  exploreClick();
};
arrowDown.onclick = function () {
  exploreClick();
};

var linkMobile, allLink;
linkMobile = document.querySelectorAll(".link-mobile");

for (allLink = 0; allLink < linkMobile.length; allLink++) {
  linkMobile[allLink].addEventListener("click", () => {
    toggleNav();
    let loadingPage = document.querySelector(".loading-container");
    loadingPage.style.display = "flex";

    setTimeout(function () {
      loadingPage.classList.add("right-min");
    }, 1100);

    setTimeout(function () {
      loadingPage.style.display = "none";
      loadingPage.classList.remove("right-min");
    }, 1650);

    // --END-- //
  });
}

// var secOneBtn, allId;
// // secOneBtn = document.getElementById("section-one-btn");
// secOneBtn = document.querySelector("#section-one-btn");
// let secLink = document.querySelector(".section-link");

// secOneBtn.addEventListener("click", () => {
//   secOneBtn.classList.toggle("scale-div");
//   secLink.classList.toggle("link-on");
// });
// for (allId = 0; allId < secOneBtn.length; allId++) {
//   secOneBtn[allId].onclick = function () {
//     alert("lkhg")
//   };
// }
// --
// var linkMobile, i;
// linkMobile = document.querySelectorAll(".link-mobile");
// for (i = 0; i < linkMobile.length; i++) {
//   linkMobile[i].classList.toggle("link-mobile-dark");
// }
// --

// document.querySelector("body").scrollIntoView({ behavior: "smooth" });

// exploreClick.addEventListener("click", () => {
//   let sectionOne = document.getElementById("section-one");
//   sectionOne.scrollIntoView({ behavior: "smooth" });
// });

// let rootClick = true;

// changeColor.addEventListener("click", () => {
//   if (rootClick) {
//     root.style.setProperty("--secBG", "#276656");
//     rootClick = false;
//   } else {
//     root.style.setProperty("--secBG", "#213c55");
//     rootClick = true;
//   }
//   // --changeBg: #0c0c0c;
//   // --bg: #607ea0;
//   // --bgColor: #213c55;
//   // --bgDark: #276656;
//   // --secBG: var(--bgColor);
// });
