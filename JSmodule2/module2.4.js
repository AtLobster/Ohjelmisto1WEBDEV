let numbers = [];

while (true) {
  let number = parseInt(prompt("Anna numeroita tai lopeta antamalla 0:"));

  if (number === 0) {
    break;
  } else {
    numbers.push(number);
  }
}

numbers.sort((a, b) => b - a);

console.log("Numerot suurimmasta pienimpään:" + numbers);
