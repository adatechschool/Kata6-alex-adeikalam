function fizzBuzz(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer[i] = "FizzBuzz";
    } else if (i % 3 === 0) {
      answer[i] = "Fizz";
    } else if (i % 5 === 0) {
      answer[i] = "Buzz";
    } else {
      answer[i] = String(i);
    }
  }

  return answer.slice(1); // pr retirer l'index 0 et avoir un tableau indexé à partir de 1
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
