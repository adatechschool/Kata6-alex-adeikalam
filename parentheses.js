const string = "(]";

function isValid(string) {
  const pile = []; //tableau vide pour stocker les parenthèses ouvertes
  const paires = {
    //objet pour stocker les parenthèses ouvertes et fermées
    "(": ")",
    "[": "]",
    "{": "}",
  };

  //boucle qui parcourt la chaîne string
  for (let i = 0; i < string.length; i++) {
    //si la parenthèse est ouverte
    if (string[i] in paires) {
      pile.push(string[i]); //on l'ajoute à pile
      //si la pile n'est pas vide et la parenthèse fermante est la même que la dernière ouverte
    } else if (pile.length > 0 && paires[pile[pile.length - 1]] === string[i]) {
      pile.pop(); //on retire la dernière ouverte de pile
    } else {
      //si la pile est vide ou la parenthèse fermante n'est pas la même que la dernière ouverte, on return false
      return false;
    }
  }

  return pile.length === 0; //true si la pile est vide, sinon false
}

console.log(isValid(string));
