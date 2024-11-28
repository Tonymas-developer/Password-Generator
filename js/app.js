let lowerChar = 'abcdefghijklmnopqrstuvwxyz';
let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '0123456789';
let symbol = '!@#$%^&*()-_=';

const passwordLength = document.querySelector('#p-length');

const upper_case = document.querySelector('#p-uppercase');
const lower_case = document.querySelector('#p-lowercase');
const numberChar = document.querySelector('#p-number');
const symbolChar = document.querySelector('#p-symbol');
const Btn = document.querySelector('#submit-btn');
const passWord = document.querySelector('#password-input');

Btn.addEventListener('click', function(){
    if (passwordLength.value < 8) {
        alert('Password sholud be at least 8 Chars!!!');
    }
    else {

        let initialPassword = '';
        
        (upper_case.checked) ? initialPassword += upperChar : "";
        (lower_case.checked) ? initialPassword += lowerChar : "";
        (numberChar.checked) ? initialPassword += number : "";
        (symbolChar.checked) ? initialPassword += symbol : "";
        
        passWord.value = generatePassword(passwordLength.value, initialPassword)
    
        // console.log(initialPassword);
    }
  });


  function generatePassword(l, pWord){
    let pwd = "";
  
    for(let i = 0; i < l; i++){
      pwd += pWord.charAt(Math.floor(Math.random() * pWord.length * 1))
    }
    // console.log(pWord.length);
    return pwd;
  }

  
// copy to clipboard
let copy_pwd = document.querySelector('#copy');

copy_pwd.addEventListener('click', function(){
  if(passWord.value == ""){
    alert('Please generate a password');
  }else{
    passWord.select();
    document.execCommand('copy');
    alert('Password copied');
  }
});