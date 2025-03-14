let humanScore = 0;
let computerScore = 0;
//------Funcion para tomar la decision de manera aleatorea
function getComputerChoice() {
    let randomNum = Math.random() * 100; // Número entre 0 y 100
    let computerChoice;

    if (randomNum <= 33) {
        computerChoice = "Piedra";
    } else if (randomNum >= 68) {
        computerChoice = "Papel";
    } else {
        computerChoice = "Tijeras";
    }
    return computerChoice;
}
//console.log("Comp01", getComputerChoice()); // Prueba la función

//----------Funcion para tomar la decision humana
function getHumanChoice() {
    let humanChoice = prompt("Ingresa: Piedra, Papel o Tijeras");
    return humanChoice;
}
//console.log("Hum01", getHumanChoice()); // Prueba la función

function playRound(computerChoice, humanChoice) {
    return console.log(computerChoice, humanChoice);
}
