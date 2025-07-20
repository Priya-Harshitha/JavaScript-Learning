const min = 1;
const max = 100;
const random = Math.floor(Math.random()*(max-min+1))+min;

let running = true;
let guess;
let attempts = 0;

while(running){
    guess = window.prompt(`Enter a number between ${min} and ${max}`);
    guess = Number(guess);
    attempts++;
    if(isNaN(guess)){
        window.alert(`Please select a Valid Number`);
    }
    else if(guess > max || guess < min){
        window.alert(`Please select the number in the given range`);
    }
    else{
        if(guess < random){
        window.alert(`Its TOO LOW! number`);
        }
       else if(guess > random){
        window.alert(`Its TOO HIGH! number`);
        }
       else{
        window.alert(`Congratulations, The correct answer is ${random} and the number of attempts is ${attempts}`);
        running = false;
        attempts = 0;
        }
    }   
}