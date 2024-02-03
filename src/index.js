const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

let result;

const getResult = () => {
 palindromeTestStr = result.split("").reverse().toString().replaceAll(",", "");
 if (palindromeTestStr === result) {
  resultElement.innerHTML = `<strong>${result}</strong> is a palindrome`;
 } else {
  resultElement.innerHTML = `<strong>${result}</strong> is not a palindrome`;
 }
};

const handleSubmit = (event) => {
 event.preventDefault();
 if (result.length > 0) {
  getResult();
 } else {
  alert("Please input a value");
 }
};

const handleChange = (event) => {
 result = event.target.value;
};

checkBtn.onclick = handleSubmit;
textInput.oninput = handleChange;
