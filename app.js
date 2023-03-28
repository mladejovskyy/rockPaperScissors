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
        result.value = "Tie"
    } else if(enemy == "paper") {
        result.value = "You lost"
    } else if(enemy == "scissors") {
        result.value = "Congrats, you won!"
    } else {
        result.value = "Error"
    }
});

