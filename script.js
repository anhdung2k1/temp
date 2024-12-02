"use strict";

const titleElement = document.querySelector(".title");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const handBookButton = document.querySelector(".btn--handbook");
const letterButton = document.querySelector(".btn--letter");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    randomNoButtonPosition();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu bé ,Anh hứa hongg làm bé buồn nữa đouuu :3";
  yesButton.classList.add("hidden");
  noButton.classList.add("hidden");
  changeImage("yes");
  handBookButton.classList.remove("hidden");
  letterButton.classList.remove("hidden");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

handBookButton.addEventListener("click", function() {
  window.location.href = "handbook.html"
});

letterButton.addEventListener("click", function() {
  window.location.href = "letter.html"
})

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Anh bicc lỗi rồi ạa",
    "Mong bé tha lỗi choo anhh :((",
    "Anhh saii rồi , anhh đáng trách ạ",
    "Bé đừng giận anhh nữa nhoo",
    "Anhhh iu bé nhắm nhunnn đóoooo",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function randomNoButtonPosition() {
  const viewPortWidth = window.innerWidth;
  const viewPortHeight = window.innerHeight;

  const randomX = Math.random() * (viewPortWidth - noButton.offsetWidth)
  const randomY = Math.random() * (viewPortHeight - noButton.offsetHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}