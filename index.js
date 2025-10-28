const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordDisplay1 = document.getElementById("password-box1");
let passwordDisplay2 = document.getElementById("password-box2");
var slider = document.getElementById("password-length");
var charAmount = document.getElementById("char-amount");


slider.oninput = function updateNumbers() {
    charAmount.textContent = "Amount of characters in password: " + this.value;
}


function generatePassword() {
    let password = "";
    for (i = 0; i < slider.value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];   
    }
    return password;
}



function displayPassword(){
    passwordDisplay1.textContent = generatePassword();
    passwordDisplay2.textContent = generatePassword();
}

function copyToClipboard(element) {

    //store text to copy in a variable.
    var copyText = element.textContent;

    //use clipboard API
    navigator.clipboard.writeText(copyText)

    //add a new class which increases border size
    element.classList.add('clicked')
    
    //remove new class after 100 milliseconds
    setTimeout(() => element.classList.remove('clicked'), 100)
}

// console.log(generatePassword())