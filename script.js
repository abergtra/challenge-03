// Establish string of characters

var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Numeric = "0123456789";
var SpecialCharacter = "!@#$%^&*()_+=[]";

// Functions to randomly select characters
function getLowerCase() {
  return LowerCase[Math.floor(Math.random() * LowerCase.length)];
}

function getUpperCase() {
  return UpperCase[Math.floor(Math.random() * UpperCase.length)];
}

function getNumeric() {
  return Numeric[Math.floor(Math.random() * Numeric.length)];
}

function getSpecialCharacter() {
  return SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];
}

function passwordLength() {
  var len = 0;
  var len = prompt("How long would you like your password?","insert password length between 8-128");
  if (len < 8 || len >128){
    alert ("Please choose a password length between 8 and 128!");
  } 
  else {
    
  }
  
}

function generatePassword() {
  var len = passwordLength();
  console.log(len);
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  document.body.appendChild(passwordText);
  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

