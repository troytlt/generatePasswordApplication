//Target button and create a listener
var btn = document.getElementById('createBtn');
var output = document.getElementById('password');
function goAhead () {
    output.textContent = createPass();
};
// Create all arrays for special, number, lowercase and uppercase characters
var speCha = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numCha = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowCha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upCha =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Define global varibales
var num, wantSpe, wantNum, wantLow, wantUp;
// Function to get input from users
function getInput() {
    num = parseInt (prompt ('How many characters do you want to include in your password?'));
    // validate number entered by user
    if (isNaN(num) === true) {
        alert('Please enter a valid number');
        return;
    }
    if (num>100) {
        alert('You do not need your password that long!');
        return;
    }
    if (num<6) {
        alert('Password must be at least 6 characters');
        return;
    }
    wantSpe = confirm ('Do ya want to include special characters in your password?');
    wantNum = confirm ('Do you want to include numeric characters in your password?');
    wantLow = confirm ('Do you want to include lowercase characters in your password?');
    wantUp = confirm ('Do you want to include uppercase characters in your password?');   
    // Check to see at least one feature must be selected
    if (wantSpe === false && wantNum===false && wantLow===false && wantUp===false) {
    alert('At least one feature must be selected');
    } 
};
//Function to get random value from an array
function rand(arr) {
    var ranIndex = Math.floor(Math.random()*arr.length);
    var ranEl = arr[ranIndex];
    return ranEl;
}
//Function to write password
function createPass() {
    getInput();
    // Call a temporary password variable that contain must-have characters
    var temptPass=[];
    // Call an array that contains all remaining characters after must-have characters are selected
    var remainCha=[];
   if(wantSpe) {
            temptPass.push(rand(speCha));
            remainCha = remainCha.concat(speCha);
   };
    if(wantNum) {
            temptPass.push(rand(numCha));
            remainCha = remainCha.concat(numCha);
    };
    if (wantLow) {
            temptPass.push(rand(lowCha));
            remainCha = remainCha.concat(lowCha);
    };
    if (wantUp) {
      
            temptPass.push(rand(upCha));
            remainCha = remainCha.concat(upCha);
    };    
    // Connect the temptPass and remainCha to ensure the number of password characters is what user wants
    for (var i=temptPass.length-1; i<num;i++) {
        temptPass.push(rand(remainCha));
    };
    // create final password variable
    var finalPass= temptPass.join('');
    return finalPass;
};
// Execute the password function once the button is clicked
btn.addEventListener('click',goAhead);