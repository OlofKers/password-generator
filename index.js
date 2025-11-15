const allChars =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const noSymbolChars =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const noNumberChars =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordDisplay1 = document.getElementById("password-box1");
let passwordDisplay2 = document.getElementById("password-box2");
let slider = document.getElementById("password-length");
let charAmount = document.getElementById("char-amount");
let noSymbols = false
let noNumbers = false

slider.oninput = function updateNumbers() {
    charAmount.textContent = "Amount of characters in password: " + this.value;
}


function generatePassword() {
    let password = "";
    if (noSymbols && noNumbers) {
        for (i = 0; i < slider.value; i++) {
            password += allChars[Math.floor(Math.random() * 52)];   
        }
    } else if (noSymbols) {
        for (i = 0; i < slider.value; i++) {
            password += noSymbolChars[Math.floor(Math.random() * noSymbolChars.length)];   
        }
    } else if (noNumbers) {
        for (i = 0; i < slider.value; i++) {
            password += noNumberChars[Math.floor(Math.random() * noNumberChars.length)];   
        }
    } else
        for (i = 0; i < slider.value; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];   
        }
    return password;
}

function toggleNumbers() {
    noNumbers = !noNumbers;
}

function toggleSymbols() {
    noSymbols = !noSymbols;
}

function displayPassword(){
    passwordDisplay1.textContent = generatePassword();
    passwordDisplay2.textContent = generatePassword();
}

function copyToClipboard(element) {

    //store text to copy in a variable.
    let copyText = element.textContent;

    //use clipboard API
    navigator.clipboard.writeText(copyText)

    //add a new class which increases border size
    element.classList.add('clicked')

    //remove new class after 100 milliseconds
    setTimeout(() => element.classList.remove('clicked'), 100)
}

function toggleLightMode() {
// Select all relevant elements
const body = document.querySelector('body')
const separator = document.querySelector('.seperator')
const whiteText = document.querySelector('#white-text')
const content = document.querySelector('#content')
const slider = document.querySelector('.slider')

// Toggle light mode classes
body.classList.toggle('lightmode')
separator?.classList.toggle('lightmode')
whiteText?.classList.toggle('lightmode')
content?.classList.toggle('lightmode')
slider?.classList.toggle('lightmode')
}


tippy('.password-box', {
    trigger: 'click',
    content: 'Copied!',
    animation: 'fade',
    arrow: true,
    duration: 350,
});
