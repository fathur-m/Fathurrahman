// MAIN JS
const rootStyle = document.documentElement.style;
const body = document.body;
const darkModeBtn = document.getElementById("toggle-dark");
let darkMode = localStorage.getItem("darkMode");
let click = true;

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

// Send Email

function sendEmail() {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    message: document.getElementById("msg").value,
    fromEmail: document.getElementById("fromEmail").value,
  };
  emailjs
    .send("service_0gwjn1m", "template_3m2xmge", tempParams)
    .then(function () {
      console.log("succes", res.status);
    });
  var sendingMsg = document.querySelector(".sending-msg");
  setTimeout(() => {
    sendingMsg.style.display = "flex";
  }, 100);
  setTimeout(() => {
    sendingMsg.style.transform = "translate(-50%, -50%) scale(1)";
  }, 500);
  setTimeout(() => {
    sendingMsg.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2500);
  setTimeout(() => {
    sendingMsg.style.display = "none";
  }, 2900);
}


