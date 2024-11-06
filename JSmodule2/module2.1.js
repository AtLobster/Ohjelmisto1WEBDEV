let numbers = [];

for (let i = 0; i < 5; i = i + 1) {
  let number = parseInt(prompt("Kerro numero:"));
  numbers.push(number);
}

console.log("Lista alkuperäisessä järjestyksessä: " + numbers);

for (let i = numbers.length - 1; i >= 0; i = i - 1) {
  console.log("Lista in reversed järjestyksessä :D : " + numbers[i]);
}