// // on demande à l'utilisateur d'entrer le nombre d'étage qu'il souhaite voir afficher en pyramide

// let Nombre = prompt("Combien d'étage voulez-vous à votre pyramide ?")

// let Espace = Nombre
// let Etage = 1

// for (let compteur = 1; compteur <= Nombre; compteur += 1){
//     Etage += compteur
//     Espace -= Etage
// }

// console.log(`${Espace}*)


// EXERICE 3

// On demande à l'utilsateur de rentrer le nombre d'étages qu'il veut
let userInput = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// On définit le nombre d'espaces avant la dièse en enlevant 1 au userInput
// (pour laisser place à la dièse)
let nb_spaces = userInput - 1

for (number = 1; number <= userInput; number++) {
	// En JS, repeat permet de répéter le string le nombre de fois voulu
	console.log(" ".repeat(nb_spaces) + "#".repeat(number));
	// On réduit le nombre d'espaces de 1 à chaque passage de boucle.
	nb_spaces--
}

