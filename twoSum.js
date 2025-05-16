const number = [3, 2, 8, 3];
const target = 6;

function twoSum(number, target) {
  // boucle 1
  for (let i = 0; i < number.length; i++) {
    // boucle 2
    for (let j = i + 1; j < number.length; j++) {
      // si la somme des 2 éléments est égale au nombre target
      if (number[i] + number[j] === target) {
        return [i, j]; // return les indices des 2 éléments
      }
    }
  }
  return "Pas de solution";
}

console.log(twoSum(number, target));
