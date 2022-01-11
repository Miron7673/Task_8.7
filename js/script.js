const orderNumberField = document.getElementById('orderNumberField'); /* поле текста номера вопроса */
const answerField = document.getElementById('answerField'); /* поле текста вопросов и ответов */
let minValue; /* минимальное значение */
let maxValue; /* максимальное значение */
let answerNumber; /* значение ответа */
let gameRun; /* статус работы игры */
let orderNumber; /* номер вопроса */
let phraseRandom; /* номер выводимого вопроса или сообщения */

let num0 = 0;
let num1 = 'один'; /* вывод числа в тесктовой форме */
let num2 = 'два';
let num3 = 'три';
let num4 = 'четыре';
let num5 = 'пять';
let num6 = 'шесть';
let num7 = 'семь';
let num8 = 'восемь';
let num9 = 'девять';
let num10 = 'десять';
let num11 = 'одинадцать';
let num12 = 'двенадцать';
let num13 = 'тринадцать';
let num14 = 'четырнадцать';
let num15 = 'пятнадцать';
let num16 = 'шестнадцать';
let num17 = 'семнадцать';
let num18 = 'восемнадцать';
let num19 = 'девятнадцать';
let num20 = 'двадцать';
let num30 = 'тридцать';
let num40 = 'сорок';
let num50 = 'пятьдесят';
let num60 = 'шестьдесят';
let num70 = 'семьдесят';
let num80 = 'восемьдесят';
let num90 = 'девяносто';
let param1;
let param2;
let param3;
let param_sign;

function StartGame() { /* функция ввода значений для начала игры */ 
    minValue = parseInt(prompt('Укажите минимальное значение числа для игры','0')) || 0; /* если NaN, то минимальное значение по умолчанию 0 */
    maxValue = parseInt(prompt('Укажите максимальное значение числа для игры','100')) || 100; /* если NaN, то максимальное значение по умолчанию 100 */
    minValue = (minValue < -999) ? -999 : minValue; /* при вводе минимума меньше -999 число изменяется на -999 */
    maxValue = (maxValue > 999) ? 999 : maxValue; /* при вводе максимума больше 999 число изменяется на 999 */
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true; 
    orderNumberField.innerText = orderNumber;
    answerField.style.color = 'black'; 
    answerField.innerText = `Вы загадали число ${answerNumber } ?`;
}    

function Reply(form1, form2, form3) { /* функция вывода случайных сообщений */
    phraseRandom = Math.round(Math.random()*2); /* 3 варианта сообщения в случайном порядке*/
    switch (phraseRandom) { 
        case 0: return form1;
        case 1: return form2;
        case 2: return form3;
    }
} 

function Text_Value(input_number) {
    param_sign = (input_number < 0) ? 'минус ' : '';
    switch (input_number) {
        case 0:
            param1 = num0

        
    }
    return answerNumber = param_sign + param1;
}


StartGame(); /* запуск игры */

document.getElementById('btnRetry').addEventListener('click', StartGame); /* кнопка "Заново" запускает начало игры */

document.getElementById('btnOver').addEventListener('click', function () { /* кнопка "больше" */    
    if (gameRun){
        if (minValue >= maxValue){
            answerField.style.color = 'blue'; /* цвет сообщения в случае неудачи */
            answerField.innerText = Reply('Вы загадали неправильное число!\n\u{1F914}', 'Я сдаюсь..\n\u{1F92F}', 'Очень странно, что я не угадал...\n\u{1F612}');
            gameRun = false;
        } else {
            minValue = ++answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = Reply('Вы загадали число ', 'Наверное, это число ', 'Проще простого! Это число ') + answerNumber + ' ?';
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { /* кнопка "меньше" */
    if (gameRun){
        if (minValue >= maxValue){
            answerField.style.color = 'blue'; /* цвет сообщения в случае неудачи */
            answerField.innerText = Reply('Вы загадали неправильное число!\n\u{1F914}', 'Я сдаюсь..\n\u{1F92F}', 'Очень странно, что я не угадал...\n\u{1F612}');
            gameRun = false;
        } else {
            maxValue = --answerNumber;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = Reply('Вы загадали число ', 'Наверное, это число ', 'Проще простого! Это число ') + answerNumber + ' ?';
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.style.color = 'red'; /* цвет сообщения в случае успеха */
        answerField.innerText = Reply('Я всегда угадываю!\n\u{1F60E}', 'Меня невозможно выиграть!\n\u{1F60E}', 'Я читаю Ваши мысли!\n\u{1F60E}');
        gameRun = false;
    }
})