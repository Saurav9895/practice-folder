const upper = document.getElementById("toUpper");
const lower = document.getElementById("toLower");
const firstUpper = document.getElementById("firstTextUpper");
const copy = document.getElementById("copyToClipboard");
const character = document.getElementById("character");
const wordCount = document.getElementById("wordCount");
const textContent = document.getElementById("text-content");
const outputContent = document.getElementById("ouput-answer");

function toUpper() {
  const inputValue = textContent.value;
  const uppertextResult = inputValue.toUpperCase();
  outputContent.textContent = uppertextResult;
}

function toLower() {
  const inputValue = textContent.value;
  const lowertextResult = inputValue.toLowerCase();
  outputContent.textContent = lowertextResult;
}

function firstUpperText() {
  const inputValue = textContent.value;
  const firstUpperResult = inputValue
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  outputContent.textContent = firstUpperResult;
}

function textCopy() {
  const inputValue = textContent.value;
  navigator.clipboard.writeText(inputValue);
  outputContent.textContent = "Text Copied to clipboard";
}

function countCharacter() {
  const inputValue = textContent.value;
  const str = inputValue;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  outputContent.textContent = "Total Character : " + count;
}

function totalWordCount() {
  const inputValue = textContent.value;
  const totalwords = inputValue.trim().split(/\s+/).length;
  outputContent.textContent = "Total Words : " + totalwords;
}

upper.addEventListener("click", toUpper);
lower.addEventListener("click", toLower);
firstUpper.addEventListener("click", firstUpperText);
copy.addEventListener("click", textCopy);
character.addEventListener("click", countCharacter);
wordCount.addEventListener("click", totalWordCount);
