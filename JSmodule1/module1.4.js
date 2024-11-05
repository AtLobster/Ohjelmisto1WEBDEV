const name = prompt('Tell me your name please: ')
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const choice = houses[Math.floor(Math.random() * houses.length)];

document.querySelector('#target').innerHTML = name + ', your Hogwarts house shall be ' + choice + '!';


