import React from "react";

export const Heading = () => {
  let words = document.getElementsByClassName("word");
  let wordArray = [];
  let currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    let cw = wordArray[currentWord];
    let nw =
      currentWord === words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = "letter in";
    }, 340 + i * 80);
  }

  function splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = "";
    let letters = [];
    for (let i = 0; i < content.length; i++) {
      let letter = document.createElement("span");
      letter.className = "letter";
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 4000);

  return (
    <div class="text">
      <p>Nachos are</p>
      <p>
        <span class="word wisteria">tasty.</span>
        <span class="word belize">wonderful.</span>
        <span class="word pomegranate">fancy.</span>
        <span class="word green">beautiful.</span>
        <span class="word midnight">cheap.</span>
      </p>
    </div>
  );
};
