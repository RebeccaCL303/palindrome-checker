const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

const getResult = () => {
 const str = textInput.value;
 const palindromeTestStr = str.replace(/[*\S]/g, "").toLowerCase();
 const reverseStr = str
  .replace(/[*\S]/g, "")
  .toLowerCase()
  .split("")
  .reverse()
  .join("");
 if (reverseStr === palindromeTestStr) {
  resultElement.innerHTML = `${str} is a palindrome`;
 } else {
  resultElement.innerHTML = `${str} is not a palindrome`;
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
