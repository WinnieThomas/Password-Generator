// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 //sets default values to object variables
function generatePassword(){
var options ={
  numberOfChars:0,
  hasLowerChars:false,
  hasUpperChars:false,
  hasSpecialChars:false,
  hasNumberChars:false
};
//validate the length the user entered
var length = window.prompt("Please enter the number of characters in the password");
// check whether the answer is a number
if(isNaN(length)){
  window.alert("Please enter a valid number");
}
else if(length<8 || length>128){
  window.alert("Please enter caharacter length between 8 and 128");
  return;
}
options.numberOfChars=length;
//display questions for the user to pick their choice
options.hasLowerChars =window.confirm("Whether include lowercase characters");
options.hasUpperChars =window.confirm("Whether include uppercase characters");
options.hasSpecialChars =window.confirm("Whether include special characters");
options.hasNumberChars =window.confirm("Whether include number characters");

//stores values in the array
var LowerChars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperChars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialchars=["!","@","£","$","%","&","*","#"];
var numberchars=["1","2","3","4","5","6","7","8","9"];

var chars =[];

//checkwhether the user selected the option as yes, then add values from the array

if(options.hasLowerChars){
  chars = chars.concat(LowerChars);
}
if(options.hasUpperChars){
  chars = chars.concat(UpperChars);
}
if(options.hasSpecialChars){
  chars = chars.concat(specialchars);
}
if(options.hasNumberChars){
  chars = chars.concat(numberchars);
}

var password ="";
for(var i=0; i<options.numberOfChars; i++){
  password+=chars[Math.floor(Math.random()*chars.length)];
}
return(password);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
