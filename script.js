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

// let inputArray = [0];
let a = '';
let b = '';
let answer = '';

one.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(1);
});

two.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(2);
});

three.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(3);
});

four.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(4);
});

five.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(5);
});

six.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(6);
});

seven.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(7);
});

eight.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(8);
});

nine.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(9);
});

zero.addEventListener('click', () => {
    if (result.innerHTML == 0 ||
        result.innerHTML == '+' ||
        result.innerHTML == '-' ||
        result.innerHTML == '*' ||
        result.innerHTML == '/') {
        result.innerHTML = '';
    }
    result.append(0);
});

add.addEventListener('click', () => {
    a = result.innerHTML;
    result.innerHTML = '+';
});




equals.addEventListener('click', () => {
    b = result.innerHTML;
    answer = +a + +b;
    result.innerHTML = answer;
    a = answer;
    b = '';
    answer = '';
    console.log(a);
    console.log(b);
    console.log(answer);
});

// equals.addEventListener('click', () => {
//     input.splice(0, 1);
//     let newResult = input.toString();
//     result.innerHTML = newResult;
// });

clear.addEventListener('click', () => {
    result.innerHTML = '0';
    a = '';
    b = '';
    answer = '';
});