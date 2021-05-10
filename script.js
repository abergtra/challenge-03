// Establish string of characters
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SpecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]" ];

var leng;
var upper;
var lower;
var numer;
var special;
var chosen;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

//generate the password
function generatePassword() {
  leng = passwordLength();
  alert("You have selected a password length of: " + leng);

  //select password character criteria
  upper = confirm("Would you like to use uppercase letters?");
  lower = confirm("Would you like to use lowercase letters?");
  numer = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");
  chosen = passwordContent();

  //create empty password array 
  var pass = [];

  //fill password array with random content to fill chosen length
  for (var i = 0; i < leng; i++) {
    var randoChosen = chosen[Math.floor(Math.random() * chosen.length)];
    pass.push(randoChosen);
  };

  //join array to create password and convert to string
  var password = pass.join("");
  passPlacement(password);
  return password;
};

//place password in text box
function passPlacement(password) {
  document.getElementById("password").textContent = password;
};


// prompt password length between 8 and 128
function passwordLength() {
  leng = parseInt(prompt("How long would you like your password to be?","insert password length between 8-128"));
  if ( isNaN(leng)){
    alert ("Please input a number!");
  } else if (leng < 8 || leng > 128){
      leng = parseInt(prompt("Please choose a password length between 8 and 128!"));
  } else {
      return leng;
    };
};


//establish password criteria
function passwordContent() {
  //The following if statement accounts for all choice combinations
  //choice combo: none selected
  if (upper === false && lower === false && numer === false && special === false) {
     chosen = alert("You must select at least 1 of the following: Upper Case Letter, Lower Case Letter, Numerical, Special Character.");
  } 
  //choice combo: 4 selected
  else if (upper === true && lower === true && numer === true && special === true) {
    chosen = UpperCase.concat(LowerCase, Numeric, SpecialCharacter);
  }  
  //choice combo: 3 selected
  else if (upper === true && lower === false && numer === true && special === true) {
    chosen = UpperCase.concat(Numeric, SpecialCharacter);
  }
  else if (upper === true && lower === true && numer === false && special === true) {
    chosen = UpperCase.concat(LowerCase, SpecialCharacter);
  }
  else if (upper === true && lower === true && numer === true && special === false) {
    chosen = UpperCase.concat(Numeric, LowerCase);
  }
  else if (upper === false && lower === true && numer === true && special === true) {
    chosen = LowerCase.concat(Numeric, SpecialCharacter);
  }
  //choice combo: 2 selected
  else if (upper === true && lower === true && numer === false && special === false) {
    chosen = UpperCase.concat(LowerCase);
  }
  else if (upper === true && lower === false && numer === true && special === false) {
    chosen = UpperCase.concat(Numeric);
  }
  else if (upper === true && lower === false && numer === false && special === true) {
    chosen = UpperCase.concat(SpecialCharacter);
  }
  else if (upper === false && lower === true && numer === true && special === false) {
    chosen = LowerCase.concat(Numeric);
  }
  else if (upper === false && lower === true && numer === false && special === true) {
    chosen = LowerCase.concat(SpecialCharacter);
  }
  else if (upper === false && lower === false && numer === true && special === true) {
    chosen = Numeric.concat(SpecialCharacter);
  }
  //choice combo: 1 selected
  else if (upper === true && lower === false && numer === false && special === false) {
    chosen = UpperCase;
  }
  else if (upper === false && lower === true && numer === false && special === false) {
    chosen = LowerCase;
  }
  else if (upper === false && lower === false && numer === true && special === false) {
    chosen = Numeric;
  }
  else if (upper === false && lower === false && numer === false && special === true) {
    chosen = SpecialCharacter;
  };
  return chosen;
};



