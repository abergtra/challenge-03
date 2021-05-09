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
      var content = passwordContent();
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
  var cuppercase = confirm("Would you like to use uppercase letters?");
  var clowercase = confirm("Would you like to use lowercase letters?");
  var cnumbers = confirm("would you like to use numbers?");
  var csymbols = confirm("would you like to use special characters?");

  while (!(cuppercase || clowercase || cnumbers || csymbols)) {
    alert("You must select at least one character type!");

    cuppercase = confirm("Would you like to use uppercase letters?");
    clowercase = confirm("Would you like to use lowercase letters?");
    cnumbers = confirm("would you like to use numbers?");
    csymbols = confirm("would you like to use special characters?");
  }
}


//assign random values to password array
function generateX() {
  const xarr = [];

  xarr.push(getUpperCase());
  
  xarr.push(getLowerCase());
  
  xarr.push(getNumerical());
  
  xarr.push(getSpecialCharacter());

  if (xarr.length > 0) {
    return xs[Math.floor(Math.random() * xs.length)];
  } else {
    alert ("You must select at leaset 1 of the following: Upper Case Letter, Lower Case Letter, Numerical, Special Character.")
  }
    

  
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

