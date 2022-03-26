const { arrayBuffer } = require("stream/consumers");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseWords(sentence) {
  let splittedData = sentence.split(" ");
  let result = "";
  for (let i = 0; i <= splittedData.length - 1; i++) {
    let reverse = reverseString(splittedData[i]);
    result += reverse + " ";
  }
  return result;
}

console.log(reverseWords("Welcome to the javascript Guide"));
