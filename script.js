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

let a, b, answer;
let divi = false;
let mult = false;
let subt = false;
let addi = false;
let i = 0;

one.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(1);
});

two.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(2);
});

three.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(3);
});

four.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(4);
});

five.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(5);
});

six.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(6);
});

seven.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(7);
});

eight.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(8);
});

nine.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(9);
});

zero.addEventListener('click', () => {
    if (result.textContent == 0 ||
        result.textContent == '+' ||
        result.textContent == '-' ||
        result.textContent == '*' ||
        result.textContent == '%' ||
        i > 0) {
            result.textContent = '';
            i = 0;
    }
    result.append(0);
});

divide.addEventListener('click', () => {
    a = result.textContent;
    result.textContent = '%';
    divi = true;
});

multiply.addEventListener('click', () => {
    a = result.textContent;
    result.textContent = '*';
    mult = true;
});

subtract.addEventListener('click', () => {
    a = result.textContent;
    result.textContent = '-';
    subt = true;
});

add.addEventListener('click', () => {
    a = result.textContent;
    result.textContent = '+';
    addi = true;
});

equals.addEventListener('click', () => {
    b = result.textContent;
    if (divi == true) {
        answer = +a / +b;
        divi = false;
    } else if (mult == true) {
        answer = +a * +b;
        mult = false;
    } else if (subt == true) {
        answer = +a - +b;
        subt = false;
    } else if (addi == true) {
        answer = +a + +b;
        addi = false;
    }
    result.textContent = answer;
    i++
    a = answer;
    b = '';
    answer = '';
});

clear.addEventListener('click', () => {
    result.textContent = '0';
    i = 0;
    a = '';
    b = '';
    answer = '';
});