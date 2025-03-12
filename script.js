//------Funcion para tomar la decision de manera aleatorea
function getComputerChoice() {
    let randomNum = Math.random() * 100; // Número entre 0 y 100
    let choice;

    if (randomNum <= 33) {
        choice = "Rock";
    } else if (randomNum >= 68) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;

}
console.log(getComputerChoice()); // Prueba la función

//----------Funcion para tomar la decision humana

function getHumanChoice() {
    let HumanChoice = prompt("Ingresa algo");
    return HumanChoice;
}
console.log(getHumanChoice());