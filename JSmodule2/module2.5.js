let numbers = [];

while (true) {
  let number = parseInt(prompt("Anna luku: "));

  if (numbers.includes(number)) {
    console.log("Tämä luku on jo annettu.");
    break;
  } else {
    numbers.push(number);
  }
}

numbers.sort((a, b) => a - b);
console.log("Annetut numerot: " + numbers);


