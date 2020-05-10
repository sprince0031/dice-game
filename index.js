let diceBasePath = "images/dice";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function randomDice() {
    let rand1;
    let rand2;
    for (let index = 0; index < 6; index++) {
        
        rand1 = Math.floor(Math.random() * 6) + 1;
        rand2 = Math.floor(Math.random() * 6) + 1;
        // console.log(rand1 + " ," + rand2);
        document.querySelector("#dice1 img").setAttribute("src", diceBasePath + rand1 + ".png");
        document.querySelector("#dice2 img").setAttribute("src", diceBasePath + rand2 + ".png");

        await sleep(100);      
    }
    if (rand1 === rand2) {
        document.querySelector(".title").innerHTML = "&#128681; Well what do ya know.. Its a tie! &#128681;";
    } else {
        if (rand1 > rand2) {
            document.querySelector(".title").innerHTML = "&#128681; Player 1 wins!";
        } else {
            document.querySelector(".title").innerHTML = "Player 2 wins! &#128681;";
        }
    }
}