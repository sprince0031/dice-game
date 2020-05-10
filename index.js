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
        document.querySelector(".title").textContent = "What do ya know.. Its a tie!";
    } else {
        let winner = rand1>rand2?"1":"2";
        document.querySelector(".title").textContent = "Player " + winner + " wins!";
    }
}