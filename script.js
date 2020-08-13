'use strict';

//checking for a numeric value
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);    
};

let guess = function(){

    let attempt = 10;
    // random numeric
    let num = Math.floor(Math.random() * 100) + 1;
    console.log(num);
    let guessNum = prompt('Угадай число от 1 до 100');
    attempt--;
    let guessFun = function(){
        
        
        //checking a random number
        if (guessNum > num && isNumber(guessNum) && attempt !== 0) {
            guessNum = prompt('Загаданное число меньше, осталось попыток - '+ attempt );
            attempt--;
            
        } else if (guessNum < num && isNumber(guessNum) && attempt !== 0){
            guessNum = prompt('Загаданное число больше, осталось попыток - '+ attempt );
            attempt--;
            
        } else if (guessNum === null){
        } else if (!isNumber(guessNum) ){
            alert('Введи число!');
            guessNum = prompt('осталось попыток - '+ attempt);    
        } else  {
            if (attempt <= 0) {
                let result = confirm('Попытки закончились, хотите сыграть еще?'); 
                if (result) {
                    guess();
                } else {
                    alert('Вы вышли из игры! До встречи!');
                    return;
                }  
            }
        }

        //recursion: check for victory
        if (guessNum == num) {
            let won = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (won) {
                guess();
            } else {
                alert('Вы вышли из игры! До встречи!');
                return;
            }  
        } else if (guessNum === null){
            alert('Вы вышли из игры! До встречи!');
        } else {
            return guessFun();
        }
    };
    return guessFun();
};

guess();













    

 
    



   