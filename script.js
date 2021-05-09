// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var text;
  var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
  switch(favDrink) {
    case "Martini":
      text = "Excellent choice. Martini is good for your soul.";
      break;
    case "Daiquiri":
      text = "Daiquiri is my favorite too!";
      break;
    case "Cosmopolitan":
      text = "Really? Are you sure the Cosmopolitan is your favorite?";
      break;
    default:
      text = "I have never heard of that one..";
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
