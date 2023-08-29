const result = document.getElementById('result');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let input = [0];

one.addEventListener('click', () => {
    input.push(1);
});

equals.addEventListener('click', () => {
    result.innerHTML = input;
});

clear.addEventListener('click', () => {
    input = [0];
    result.innerHTML = input;
});