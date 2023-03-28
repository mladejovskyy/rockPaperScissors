const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#input')


const rps = ["rock", "paper", "scissors"];



rock.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 3);

    let enemy = rps[rand]
    console.log(enemy);
    if(enemy == "rock") {
        result.value = "Rock x Rock, Tie"
    } else if(enemy == "paper") {
        result.value = "Rock x Paper, You lost!"
    } else if(enemy == "scissors") {
        result.value = "Rock x Scissors, Congrats, you won!"
    } else {
        result.value = "Error"
    }
});

paper.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 3);

    let enemy = rps[rand]
    console.log(enemy);
    if(enemy == "rock") {
        result.value = "Paper x rock, congrats, you won!"
    } else if(enemy == "paper") {
        result.value = "Paper x Paper, Tie"
    } else if(enemy == "scissors") {
        result.value = "Paper x Scissors, You lost!"
    } else {
        result.value = "Error"
    }
});

scissors.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 3);

    let enemy = rps[rand]
    console.log(enemy);
    if(enemy == "rock") {
        result.value = "Scissors x Rock, You lost!"
    } else if(enemy == "paper") {
        result.value = "Scissors x Paper, Congrats, you won!"
    } else if(enemy == "scissors") {
        result.value = "Scissors x Scissors, Tie"
    } else {
        result.value = "Error"
    }
});