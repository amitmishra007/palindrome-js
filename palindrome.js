let inputString = window.prompt("Enter the string to be reversed");
let reversedString = " ";
for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString = reversedString + inputString[i];
}

console.log(reversedString);
alert(`The reversed string is ${reversedString}`);
