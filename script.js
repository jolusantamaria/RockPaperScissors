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

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Convertir a minúsculas para evitar errores
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Empate. Ambos eligieron ${humanChoice}`);
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijeras") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijeras" && computerChoice === "papel")
    ) {
        console.log(`Ganaste esta ronda! ${humanChoice} le gana a ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Perdiste esta ronda! ${computerChoice} le gana a ${humanChoice}`);
        computerScore++;
    }
}

// Función para jugar el juego completo
function playGame() {
    for (let i = 0; i < 5; i++) { // 5 rondas
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Puntaje -> Humano: ${humanScore} | Computadora: ${computerScore}`);
    }

    // Resultado final
    if (humanScore > computerScore) {
        console.log("¡Felicidades! Ganaste el juego.");
    } else if (humanScore < computerScore) {
        console.log("Lo siento. La computadora ganó el juego.");
    } else {
        console.log("¡Empate total!");
    }
}

// Inicia el juego
playGame();