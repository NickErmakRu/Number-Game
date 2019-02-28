/*
//alert('Завтра к первой паре')
//var result = prompt('Завтра к первой паре');
//alert(result);

//PROMPT И ALERT
//ИГРА С УГАДЫВАНИЕМ ЧИСЛА - тупая версия

/* var number = 5;

var result = prompt('Введи число от 1 до 10');

if (result == number)
    alert('Ты угадал, возьми с полки пирожок');
else if (result > number)
    alert('Слишком большое число');
else
    alert('Слишком маленькое число'); */

//ПЕРЕВОД СТРОКИ В ЧИСЛО (если ===, т.е. сравнение и типа, и значения)
//1 вариант
//result = parseInt(result)
//if (result === number)
//2 вариант 
//result = +result


//ИГРА С УГАДЫВАНИЕМ ЧИСЛА - втор2я версия

/*var number = randomNumber(1, 100);

var result = -1;

while (result !== number) {
    result = prompt('Введите число от 1 до 10');
    result = parseInt(result);
    
    if (result == number)
    alert('Ты угадал, возьми с полки пирожок');
else if (result > number)
    alert('Слишком большое число');
else
    alert('Слишком маленькое число');    
    
}

//ИГРА С УГАДЫВАНИЕМ ЧИСЛА - ТР3ТЬЯ версия
result = -1;
number = randomNumber(1, 100);

var isWin = false;

for (var i = 3; i > 0; i--) {
    result = prompt('У тебя ещё ' + i + 'Попытки(ок)' + 
                    'Введите число от 1 до 10');
    result = parseInt(result);
    
    if (result === number) {
    alert('Ты угадал, возьми с полки пирожок');
    isWin = true;
    break;
} else if (result > number)
    alert('Слишком большое число');
else
    alert('Слишком маленькое число');    
}

if (!isWin)
    alert('Воробушек, число было ' + number);*/


function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//ИГРЫ В ФУНКЦИИ
function firstGame() {
    var number = randomNumber(1, 10);
    var result = -1;
    var p = document.getElementById('firstGameNumbersOfTries');
    var count = 0;

while (result !== number) {
    count++;
    result = prompt('Введите число от 1 до 10');
    result = parseInt(result);
    
    if (result == number)
    alert('Ты угадал, возьми с полки пирожок');
else if (result > number)
    alert('Слишком большое число');
else
    alert('Слишком маленькое число');      
}
    p.textContent = count;
}

function secondGame() {
var result = -1;
var number = randomNumber(1, 10);
var p = document.querySelector('.secondGameNumbersOfTries')

var p2 = document.querySelector('.loose');
var isWin = false;
var i = 5;

for (; i > 0; i--) {
    result = prompt('У тебя ещё ' + i + 'Попытки(ок)' + '; ' +
                    'Введите число от 1 до 10');
    result = parseInt(result);
    
    if (result === number) {
    alert('Ты угадал, возьми с полки пирожок');
    isWin = true;
    break;
} else if (result > number)
    alert('Слишком большое число');
else
    alert('Слишком маленькое число');    
}

if (!isWin)
    alert('Воробушек, число было ' + number);
else {
    p2.style.display = 'none' //скрываем при победе
}
    
p.textContent = 5-i;

}

firstGame();
secondGame();