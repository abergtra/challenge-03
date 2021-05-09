// Establish string of characters

var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Numeric = "0123456789";
var SpecialCharacter = "!@#$%^&*()_+=[]";
var leng = 0;

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

// prompt password length between 8 and 128
function passwordLength() {
  var leng = prompt("How long would you like your password to be?","insert password length between 8-128");
  if ( isNaN(leng)){
    alert ("Please input a number!");
  } else 
    if (leng < 8 || leng > 128){
      alert ("Please choose a password length between 8 and 128!");
    } else {
      return leng;
    }
  
  
}

function generatePassword() {
  var leng = passwordLength();
  alert(leng);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");
 // passwordText.value = password;

 // document.body.appendChild(passwordText);
 // let yiken = "";

 // for (let i = 0; i < len; i++) {
 //   const x = generateX();
 //   yiken += x;
 // }

 // pwEl.innerText = yiken;
//}



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

