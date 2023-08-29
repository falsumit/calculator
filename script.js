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
let answer;

one.addEventListener('click', () => {
    input.push(1);
    result.innerHTML = 1;
});

two.addEventListener('click', () => {
    input.push(2);
    result.innerHTML = 2;
});

three.addEventListener('click', () => {
    input.push(3);
    result.innerHTML = 3;
});

four.addEventListener('click', () => {
    input.push(4);
    result.innerHTML = 4;
});

five.addEventListener('click', () => {
    input.push(5);
    result.innerHTML = 5;
});

six.addEventListener('click', () => {
    input.push(6);
    result.innerHTML = 6;
});

seven.addEventListener('click', () => {
    input.push(7);
    result.innerHTML = 7;
});

eight.addEventListener('click', () => {
    input.push(8);
    result.innerHTML = 8;
});

nine.addEventListener('click', () => {
    input.push(9);
    result.innerHTML = 9;
});

zero.addEventListener('click', () => {
    input.push(0);
    result.innerHTML = 0;
});








equals.addEventListener('click', () => {
    result.innerHTML = input;
});

clear.addEventListener('click', () => {
    input = [0];
    result.innerHTML = input;
});