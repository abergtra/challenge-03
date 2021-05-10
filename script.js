// Establish string of characters
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SpecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]" ];

var length;
var upper;
var lower;
var numer;
var special;
var chosen;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

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

//generate the password
function generatePassword() {
  length = passwordLength();
  alert("you chose password length: " + length);

  //select password character criteria
  upper = confirm("Would you like to use uppercase letters?");
  lower = confirm("Would you like to use lowercase letters?");
  numer = confirm("would you like to use numbers?");
  special = confirm("would you like to use special characters?");
  chosen = passwordContent();
  var pass = [];

  //create password array based on length
  for (let i = 0; i < leng; i++) {
    const x = generateX();
    pass += x;
  }

  passwordText.innerText = pass;
}

// prompt password length between 8 and 128
function passwordLength() {
  length = parseInt(prompt("How long would you like your password to be?","insert password length between 8-128"));
  if ( isNaN(length)){
    alert ("Please input a number!");
  } else if (length < 8 || length > 128){
      length = parseInt(prompt("Please choose a password length between 8 and 128!"));
  } else {
      return length;
    }
}


//establish password criteria
function passwordContent() {
  //The following if statement accounts for all choice combinations
  //choice combo: none selected
  if (upper === false && lower === false && numer === false && special === false) {
     chosen = alert("You must select at least 1 of the following: Upper Case Letter, Lower Case Letter, Numerical, Special Character.");
  } 
  //choice combo: 4 selected
  else if (upper === true && lower === true && numer === true && special === true) {
    chosen = upper.concat(lower, numer, special);
  }  
  //choice combo: 3 selected
  else if (upper === true && lower === false && numer === true && special === true) {
    chosen = upper.concat(numer, special);
  }
  else if (upper === true && lower === true && numer === false && special === true) {
    chosen = upper.concat(lower, special);
  }
  else if (upper === true && lower === true && numer === true && special === false) {
    chosen = upper.concat(numer, lower);
  }
  else if (upper === false && lower === true && numer === true && special === true) {
    chosen = lower.concat(numer, special);
  }
  //choice combo: 2 selected
  else if (upper === true && lower === true && numer === false && special === false) {
    chosen = upper.concat(lower);
  }
  else if (upper === true && lower === false && numer === true && special === false) {
    chosen = upper.concat(numer);
  }
  else if (upper === true && lower === false && numer === false && special === true) {
    chosen = upper.concat(special);
  }
  else if (upper === false && lower === true && numer === true && special === false) {
    chosen = lower.concat(numer);
  }
  else if (upper === false && lower === true && numer === false && special === true) {
    chosen = lower.concat(special);
  }
  else if (upper === false && lower === false && numer === true && special === true) {
    chosen = numer.concat(special);
  }
  //choice combo: 1 selected
  else if (upper === true && lower === false && numer === false && special === false) {
    chosen = upper;
  }
  else if (upper === false && lower === true && numer === false && special === false) {
    chosen = lower;
  }
  else if (upper === false && lower === false && numer === true && special === false) {
    chosen = numer;
  }
  else if (upper === false && lower === false && numer === false && special === true) {
    chosen = special;
  };
}


//assign random values to password array
function generateX() {
  var xarr = [];
  if (passwordhas.upper){
    xarr.push(getUpperCase()); 
  } else { console.log("no upper case selected.") }
  if (passwordhas.lower) {
    xarr.push(getLowerCase());
  } else { console.log("no lower case selected.") }
  if (passwordhas.numer) {
    xarr.push(getNumerical());
  } else { console.log("no numerical selected.") }
  if (passwordhas.special) {
    xarr.push(getSpecialCharacter());
  } else { console.log("no special character selected.") }
  alert(xarr);
  return xarr[Math.floor(Math.random() * xarr.length)];
  
}

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





