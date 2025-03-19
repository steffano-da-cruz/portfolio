"use strict";

const messageBtn = document.querySelector(".send-message");
const messageInp = document.querySelector(".message-input");
const emailInp = document.querySelector(".email-input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let messageInpValue = "";
let emailInpValue = "";

messageBtn.addEventListener("click", function (e) {
  e.preventDefault();

  messageInpValue = messageInp.value;
  emailInpValue = emailInp.value;

  if (emailRegex.test(emailInpValue)) {
    alert("Message successfully sent!");
  } else {
    alert("Please, write a valid email...");
  }
});
