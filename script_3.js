// EXERICE 3

// On demande à l'utilsateur de rentrer le nombre d'étages qu'il veut
let userInput = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// On définit la première ligne soit le nombre d'espaces avant le dièse en enlevant 1 au userInput
let nb_spaces = userInput - 1

// on définit:
// - 
for (counter = 1; counter <= userInput; counter++) {
	// En JS, repeat permet de répéter le string le nombre de fois voulu
	console.log(" ".repeat(nb_spaces) + "#".repeat(counter));
	// On réduit le nombre d'espaces de 1 à chaque passage de boucle.
	nb_spaces--
}

