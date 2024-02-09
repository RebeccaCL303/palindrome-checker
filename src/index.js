const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

const getResult = () => {
 const str = textInput.value;
 const palindromeTestStr = str.replace(/[\s\W]/g, "").toLowerCase();
 const reverseStr = str
  .replace(/[\s\W]/g, "")
  .toLowerCase()
  .split("")
  .reverse()
  .join("");
 if (reverseStr === palindromeTestStr) {
  resultElement.innerHTML = `<b>${str}</b> is a palindrome`;
 } else {
  resultElement.innerHTML = `<b>${str}</b> is not a palindrome`;
 }
};

const handleSubmit = (event) => {
 event.preventDefault();
 if (textInput.value.length === 0) {
  alert("Please input a value");
 } else {
  getResult();
 }
};

checkBtn.addEventListener("click", handleSubmit);
