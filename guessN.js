const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempt =0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`enter the number between${minNum}- ${maxNum} : `);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("please enter a number");
    }
    else if (guess < 1 || guess > 100) {
        window.alert(`please enter a value between ${minNum}-${maxNum}!`);
    }
    else {
        attempt++;
        if (guess > answer) {
            window.alert("number is too high!");

        }
        else if (guess < answer) {
            window.alert("number is too low");

        }
        else {
            window.alert(`sucsess number was ${answer} ,and you guess in ${attempt} attempt`);
            running = false;
        }
    }
}