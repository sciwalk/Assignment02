let randomnum = Math.round(Math.random())
let coinFlip = randomnum
let choice = prompt("Please select heads (h) or tails (t) for a coin flip")

if (choice == "h")||(choice == "t") {
    if (choice == "h") && (coinFlip < 0.5){
        alert("The flip was heads and you chose heads...you win!")
    }
    if (choice == "t") && (coinFlip < 0.5) {
        alert("The flip was heads but you chose tails...you lose!")
    }
    if (choice == "h") && (coinFlip > 0.5 ) {
        alert("The flip was tails but you chose heads...you lose!")
    }

}
