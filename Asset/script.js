var specialCharacters = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = [
    'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCaseCharacter = [
    'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// function to get options from user
function getOptionsFromUser() {
    // Ask user for their option
    var length = parseInt (prompt('How many characters do you want to be included in your password? (please note that password characters must be at least 8)'));
    if (isNaN(length)===true) {
        alert('Your password length must be a whole number');
        return;
    }
    if (length <8) {
        alert('Your password length must be at least 8');
        return;
    }
    if (length > 120) {
        alert('Your password length must be less than 120');
        return;
    }
    // Check if user wants to have special C, numbers, Uppercase C or Lowercase included
    var hasSpecial = confirm('Do you want your passwords to have special characters?');
    var hasNumbers = confirm("Do you want your passwords to have numbers?");
    var hasUpperCase = confirm('Do you want your passwords to have Uppcase characters?');
    var hasLowerCase = confirm('Do you want your Passwords to have lowercase characters');
    // Check user must input at least one type of characters
    if (hasSpecial=== false &&
        hasNumbers===false &&
        hasUpperCase===false &&
        hasLowerCase===false) {
            alert('You must opt for at least one type of character!');
            return;
        }
    var passwordOptions = {
        length: length,
        hasSpecial: hasSpecial,
        hasNumbers: hasNumbers,
        hasLowerCase: hasLowerCase,
        hasUpperCase: hasUpperCase
    };
    return passwordOptions;
}
//function to get a random element from an array
function getRandom (arr) {
    var randIndex = Math.floor(Math.random()*arr.length);
    var randElement = arr[randIndex];
    return randElement;
}
// function to create password with user options
function generatePassword() {
    var options = getOptionsFromUser();
    // define result and push element to it as we progress
    var result = [];
    // define the collection of possible characters
    var possibleCharacters = [];
    // define characters that must be included
    var mustHaveCharacters = [];
    // concat characters of each required type to mustHaveCharacters
    // push random character in each required type of characters to mustHaveCharacters
    if (options.hasSpecial) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        mustHaveCharacters.push(getRandom(specialCharacters));
    }
    if (options.hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        mustHaveCharacters.push(getRandom(numericCharacters));
    }
    if (options.hasLowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
        mustHaveCharacters.push(getRandom(lowerCaseCharacters));
    }
    if (options.hasUpperCase) {
        possibleCharacters=possibleCharacters.concat(upperCaseCharacter);
        mustHaveCharacters.push(getRandom(upperCaseCharacter));
    }
    //Push mustHaveCharacters to result with a loop within the length required
    for (var i=0; i<options.length; i++) {
        result.push(getRandom(possibleCharacters));
    }
    for (var i; i<mustHaveCharacters.length; i++) {
        result[i] = mustHaveCharacters[i];
    }
   
    //Transform the result into a string
    return result.join("");
}

var createBtn = document.querySelector('#create');
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  createBtn.addEventListener('click', writePassword);
