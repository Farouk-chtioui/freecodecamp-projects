let result = document.querySelector('#result');
let input = document.querySelector('#text-input');
let button = document.querySelector('#check-btn');

button.onclick = check;

function check() {
    let inputValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    let reversedInputValue = inputValue.split('').reverse().join('');

    if (inputValue === '') {
        alert("Please input a value");
    } else if (inputValue === reversedInputValue) {
        result.innerHTML = input.value + " is a palindrome";
    } else {
        result.innerHTML = input.value + " is not a palindrome";
    }
}