`use strict`;

const min = 0;
let max = 5; // start
let balance = 0;
let attempt = 0;
let maxAttempt = 3;
let gameCounter = 0;
let prizes = [10, 5, 2];
let coeff = 3; // prize coefficient

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min)) + min) + 1;
}

function showBalance(){
    return console.log(`Balance was increased to ${balance}$`)
}

function askAgain(){
    const again = confirm('Do you want to play again?')
    if(again){
        attempt = 0;
        return game();
    } else return console.log(`Thank you for a game. Your prize is: ${balance}`);
}

function game(){
    const num = getRandomInt(min, max);
    // console.log(num); //uncomment if you want to cheat
    while (attempt < maxAttempt){
        let trying = prompt(`
            Enter the num from ${min} to ${max}
            Attempt left: ${attempt}
            Total prize: ${balance}$
            Possible prize on current attempt: ${(prizes[attempt] * (coeff ** gameCounter))}  
        `)

        if(trying === null) {
            console.log(`Thank you for a game. Your prize is: ${balance}`)
            break;
        }

        if(+trying === num){

            balance += (prizes[attempt] * (coeff ** gameCounter))

            console.log('Congratulation');
            gameCounter++;
            max *= 2;
            showBalance();
            askAgain();
            break;
        } else if(attempt < maxAttempt-1){
            console.log('Please try again');
            attempt++;
        } else {
            balance = 0;
            attempt = 0;
            gameCounter = 0;
            max = 5;
            console.log('Sorry. You loose. Balance was reset')
            askAgain();
            break;
        }
    }
}

const agreement  = confirm('Do you want to play a game?')

if(agreement){
    game();
} else {
    console.log('You did not become a millionaire')
}
