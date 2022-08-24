// MAIN JS
const rootStyle = document.documentElement.style;
const body = document.body;
const darkModeBtn = document.getElementById("toggle-dark");
let darkMode = localStorage.getItem("darkMode");
let click = true;
const siteBtn = document.getElementById("close-site");
const siteDiv = document.querySelector(".new-site");

siteBtn.addEventListener("click", () => {
  siteDiv.style.display = "none";
});

// DARKMODE
const enableDarkMode = () => {
  darkModeBtn.classList.remove("bx-toggle-left");
  darkModeBtn.classList.add("bx-toggle-right");
  rootStyle.setProperty("--navBg", "#1b2025");
  rootStyle.setProperty("--bg", "var(--darkBg)");
  rootStyle.setProperty("--fontColor", "var(--fontDark)");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  darkModeBtn.classList.add("bx-toggle-left");
  darkModeBtn.classList.remove("bx-toggle-right");
  rootStyle.setProperty("--navBg", "#47607e");
  rootStyle.setProperty("--bg", "var(--lightBg)");
  rootStyle.setProperty("--fontColor", "var(--fontLight)");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
  enableDarkMode();
}
function toggleDark() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// NAVIGATION BAR

const navBtn = document.getElementById("toggle-nav"),
  navClose = document.getElementById("toggle-close"),
  navLink = document.querySelectorAll(".nav-link"),
  navMobileContainer = document.querySelector(".nav-mobile-container");

function openNav() {
  navMobileContainer.classList.add("show-nav-mobile");
  navBtn.classList.add("hide-toggle");
  navClose.classList.remove("hide-toggle");
}
function closeNav() {
  navMobileContainer.classList.remove("show-nav-mobile");
  navBtn.classList.remove("hide-toggle");
  navClose.classList.add("hide-toggle");
}
navBtn.onclick = function () {
  openNav();
};
navClose.onclick = function () {
  closeNav();
};
for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    closeNav();
  });
}
// SCROLL ANIMATION

let expBg = document.querySelector(".explore-bg"),
  imgMoveRight = document.querySelector(".header-img-wrap"),
  headerText = document.querySelector(".header-text");

window.onscroll = function () {
  scrollToExplore();
};

function scrollToExplore() {
  if (window.pageYOffset > window.innerHeight * 0.4) {
    expBg.classList.add("reset-x");
    imgMoveRight.classList.add("translate-right");
    headerText.classList.add("translate-left");
  } else {
    expBg.classList.remove("reset-x");
    imgMoveRight.classList.remove("translate-right");
    headerText.classList.remove("translate-left");
  }
}

// SLIDE CARD

const cardGroup = document.querySelectorAll(".cardgroup");
const slideWrap = document.querySelector(".slide-wrap");
const fCard = document.getElementById("learn-first");
const lCard = document.getElementById("learn-last");
const linkShowMobile = document.querySelectorAll(".learn-link-wrap-mobile");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  slideWrap.scrollBy({
    top: 0,
    left: +398,
    behavior: "smooth",
  });
});
prevBtn.addEventListener("click", () => {
  slideWrap.scrollBy({
    top: 0,
    left: -400,
    behavior: "smooth",
  });
});

for (let z = 0; z < linkShowMobile.length; z++);
for (let i = 0; i < cardGroup.length; i++);

cardGroup[0].addEventListener("click", () => {
  linkShowMobile[0].classList.toggle("scale-1");
  linkShowMobile[1].classList.remove("scale-1");
  linkShowMobile[2].classList.remove("scale-1");
  linkShowMobile[3].classList.remove("scale-1");
  linkShowMobile[4].classList.remove("scale-1");
});
cardGroup[1].addEventListener("click", () => {
  linkShowMobile[1].classList.toggle("scale-1");
  linkShowMobile[0].classList.remove("scale-1");
  linkShowMobile[2].classList.remove("scale-1");
  linkShowMobile[3].classList.remove("scale-1");
  linkShowMobile[4].classList.remove("scale-1");
});
cardGroup[2].addEventListener("click", () => {
  linkShowMobile[2].classList.toggle("scale-1");
  linkShowMobile[0].classList.remove("scale-1");
  linkShowMobile[1].classList.remove("scale-1");
  linkShowMobile[3].classList.remove("scale-1");
  linkShowMobile[4].classList.remove("scale-1");
});
cardGroup[3].addEventListener("click", () => {
  linkShowMobile[3].classList.toggle("scale-1");
  linkShowMobile[1].classList.remove("scale-1");
  linkShowMobile[2].classList.remove("scale-1");
  linkShowMobile[0].classList.remove("scale-1");
  linkShowMobile[4].classList.remove("scale-1");
});
cardGroup[4].addEventListener("click", () => {
  linkShowMobile[4].classList.toggle("scale-1");
  linkShowMobile[1].classList.remove("scale-1");
  linkShowMobile[2].classList.remove("scale-1");
  linkShowMobile[3].classList.remove("scale-1");
  linkShowMobile[0].classList.remove("scale-1");
});

// SOCIAL

const igBtn = document.querySelector(".instagram-btn");
const dcBtn = document.querySelector(".discord-btn");
const linkedBtn = document.querySelector(".linkedin-btn");
const igWindow = document.querySelector(".instagram-window");
const dcWindow = document.querySelector(".discord-window");
const linkedWindow = document.querySelector(".linkedin-window");

// INSTAGRAM

function toggleIg() {
  igWindow.classList.toggle("scale-1");
  dcWindow.classList.remove("scale-1");
  linkedWindow.classList.remove("scale-1");
  if (igWindow.classList.contains("scale-1")) {
    document.querySelector(".ig-desc-mobile").classList.add("ig-anim");
  } else {
    document.querySelector(".ig-desc-mobile").classList.remove("ig-anim");
  }
}
document.getElementById("close-ig").addEventListener("click", () => {
  toggleIg();
});

// Discord
function toggleDiscord() {
  dcWindow.classList.toggle("scale-1");
  igWindow.classList.remove("scale-1");
  linkedWindow.classList.remove("scale-1");
}
document.getElementById("close-dc").addEventListener("click", () => {
  toggleDiscord();
});
// LINKEDIN

function toggleLinkedin() {
  linkedWindow.classList.toggle("scale-1");
  igWindow.classList.remove("scale-1");
  dcWindow.classList.remove("scale-1");
}
document.querySelector(".close-linkedin").addEventListener("click", () => {
  toggleLinkedin();
});

igBtn.addEventListener("click", function () {
  toggleIg();
});
dcBtn.addEventListener("click", function () {
  toggleDiscord();
});
linkedBtn.addEventListener("click", function () {
  toggleLinkedin();
});

// WHATSAPP
