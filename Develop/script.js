// Assignment code here
//character types
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
var numberStr = "1234567890"
var symbolStr = "!@#$%^&*()_+,./<>?`~-"
//strings to array
var upperArr = upperCaseStr.split("");
var lowerArr = lowerCaseStr.split("");
var numberArr = numberStr.split("");
var symbolArr = symbolStr.split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passLength = window.prompt("How long do you want your password?")
  console.log(passLength);

  if (passLength >=8 && passLength <= 125) {
    var isUpper = window.confirm("Do you want upper case characters?");
    var isLower = window.confirm("do you want lower case characters?");
    var isNum = window.confirm("do you want number?");
    var isSym = window.confirm("do you want symbols?");

    //define array as empty
    var totalArray = [];

    //
    if (isUpper === true) {
      totalArray = totalArray.concat(upperArr)
    }
    if (isLower === true) {
      totalArray = totalArray.concat(lowerArr)
    }
    if (isNum === true) {
      totalArray = totalArray.concat(numberArr)
    }
    if (isSym === true) {
      totalArray = totalArray.concat(symbolArr)
    }

    //run function in for loop
    for (var i = 0; i < passLength; i++) {
      var singleDigit = Math.floor(Math.random() * totalArray.length);
      var passDigit = totalArray[singleDigit]
      totalArray.push(passDigit);
    }
    console.log(totalArray)
    var results = totalArray.join("");

  }

  // check empty passwork field
  else if(passLength === "") {
    window.alert("please fill in the password.");
  }

  else {
    window.alert("password length must be between 8 and 125 character");
  }

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
