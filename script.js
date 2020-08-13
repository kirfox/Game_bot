'usestrict';

//checking for a numeric value
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);    
};

let guess = function(){
    // random numeric
    let num = Math.floor(Math.random() * 100) + 1;

    let guessNum = prompt('Угадай число от 1 до 100');
    
    let guessFun = function(){
    
        //checking a random number
        if (guessNum > num && isNumber(guessNum)) {
            guessNum = prompt('Загаданное число меньше \nУгадай число от 1 до 100');
        } else if (guessNum < num && isNumber(guessNum)){
            guessNum = prompt('Загаданное число больше \nУгадай число от 1 до 100');
        } else if (guessNum === null){
        } else if (!isNumber(guessNum)){
            alert('Введи число!');
            guessNum = prompt('Угадай число от 1 до 100');
        } else  {
            alert('Вы вышли из игры!');
        }

        //recursion: check for victory
        if (guessNum == num) {
            alert('Победа, Вы угадали число');
        } else if (guessNum === null){
            alert('Вы вышли из игры!');
        } else {
            return guessFun();
        }
    };

    return guessFun();
};

guess();













    

 
    



   