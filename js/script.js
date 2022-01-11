const orderNumberField = document.getElementById('orderNumberField'); /* поле текста номера вопроса */
const answerField = document.getElementById('answerField'); /* поле текста вопросов и сообщений */
let minValue; /* минимальное значение */
let maxValue; /* максимальное значение */
let answerNumber; /* значение ответа */
let gameRun; /* статус работы игры */
let orderNumber; /* номер вопроса */
let phraseRandom; /* номер выводимого вопроса или сообщения */


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
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}    

StartGame(); /* запуск игры */

document.getElementById('btnRetry').addEventListener('click', StartGame); /* кнопка "Заново" запускает начало игры */

document.getElementById('btnOver').addEventListener('click', function () { /* кнопка "больше" */    
    if (gameRun){
        if (minValue === maxValue){
            answerField.style.color = 'blue'; /* цвет сообщения в случае неудачи */
            phraseRandom = Math.round(Math.random()*2); /* 3 варианта сообщения в случае неудачи */
            switch (phraseRandom) { 
                case 0: 
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerField.innerText = `Очень странно, что я не угадал...\n\u{1F612}`;
                    break;
            }
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round(Math.random()*2); /* 3 варианта вопросов */
            switch (phraseRandom) {
                case 0: 
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Скорее всего, это число ${answerNumber }. Верно?`;
                    break;
                case 2:
                    answerField.innerText = `Проще простого! Это число ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { /* кнопка "меньше" */
    if (gameRun){
        if (minValue === maxValue){
            answerField.style.color = 'blue'; /* цвет сообщения в случае неудачи */
            phraseRandom = Math.round(Math.random()*2); /* 3 варианта сообщения в случае неудачи */
            switch (phraseRandom) {
                case 0: 
                    answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerField.innerText = `Очень странно, что я не угадал...\n\u{1F612}`;
                    break;
            }
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round(Math.random()*2); /* 3 варианта вопросов */
            switch (phraseRandom) {
                case 0: 
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Скорее всего, это число ${answerNumber }. Верно?`;
                    break;
                case 2:
                    answerField.innerText = `Проще простого! Это число ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.style.color = 'red'; /* цвет сообщения в случае успеха */
        phraseRandom = Math.round(Math.random()*2); /* 3 варианта сообщения в случае успеха */
        switch (phraseRandom) {
            case 0: 
                answerField.innerText = `Я всегда угадываю!\n\u{1F60E}`;
                break;
            case 1:
                answerField.innerText = `Меня невозможно выиграть!\n\u{1F60E}`;
                break;
            case 2:
                answerField.innerText = `Я читаю Ваши мысли!\n\u{1F60E}`;
                break;
        }
        gameRun = false;
    }
})

