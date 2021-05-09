// Establish string of characters

var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Numeric = "0123456789";
var SpecialCharacter = "!@#$%^&*()_+=[]";
var leng = 0;
var content = 0;

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

//generate the password
function generatePassword() {
  var leng = passwordLength();
  alert("you chose password length:" + leng);
  let pass = "";

  //create password array based on length
  for (let i = 0; i < leng; i++) {
    const x = generateX();
    pass += x;
  }

  passwordText.innerText = pass;
}

//confirm type of content in password
function passwordContent() {
  var upper = confirm("Would you like to use uppercase letters?");
  var lower = confirm("Would you like to use lowercase letters?");
  var numer = confirm("would you like to use numbers?");
  var special = confirm("would you like to use special characters?");

  while (!(upper || lower || numer || special)) {
    alert("You must select at least 1 of the following: Upper Case Letter, Lower Case Letter, Numerical, Special Character.");

    upper = confirm("Would you like to use uppercase letters?");
    lower = confirm("Would you like to use lowercase letters?");
    numer = confirm("would you like to use numbers?");
    special = confirm("would you like to use special characters?");
  }
}


//assign random values to password array
function generateX() {
  const xarr = [];
  var content = passwordContent();
  upper && xarr.push(getUpperCase());
  lower && xarr.push(getLowerCase());
  numer && xarr.push(getNumerical());
  special && xarr.push(getSpecialCharacter());

  return xs[Math.floor(Math.random() * xs.length)];
  
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

