"use strict";
const signUpBtn = document.querySelector(".signup-toggler");
const logInBtn = document.querySelector(".login-toggler");
const leftPanel = document.querySelector(".left-panel");
const rightPanel = document.querySelector(".right-panel");
const loginPanel = document.querySelector(".login");
const signupPanel = document.querySelector(".signup");

const signUpActive = function () {
  rightPanel.classList.remove("active");
  leftPanel.classList.add("active");
  loginPanel.classList.add("login-before");
  loginPanel.classList.remove("login-after", "active");
  signupPanel.classList.add("signup-after", "active");
  signupPanel.classList.remove("signup-before");
};

const logInActive = function () {
  rightPanel.classList.add("active");
  leftPanel.classList.remove("active");
  loginPanel.classList.add("login-after", "active");
  loginPanel.classList.remove("login-before");
  signupPanel.classList.add("signup-before");
  signupPanel.classList.remove("signup-after", "active");
};

signUpBtn.addEventListener("click", function () {
  signUpActive();
});

logInBtn.addEventListener("click", function () {
  logInActive();
});
