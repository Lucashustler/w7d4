// EXERCICE 2

// on demande à l'utilisateur le nombre jusqu'au quel il faut multiplier 
let Number = prompt("De quel nombre veux-tu calculer la factorielle ?")

// on définit la valeur de base de notre résultat que l'on va mutliplier
let result = 1

// on définit:
// - la valeur de base de notre compteur
// - jusqu'à quelle valeur on doit incrémenter notre compteur
// - de combien on doit incrémenter notre compteur à chaque passage de boucle
// - par combien on doit multiplier notre valeur à chaque passage de boucle
for (let counter = 1; counter <= Number; counter += 1){
    result *= counter
}

// on affiche la factorielle du nombre
console.log(`La factorielle de ${Number} est ${result}`)

