let luku1 = parseInt(prompt('Anna ensimmäinen luku: '));
let luku2 = parseInt(prompt('Toinen luku:'));
let luku3 = parseInt(prompt('Viimeinen luku:'));

console.log(luku1 + luku2 + luku3);

document.querySelector('#target1').innerHTML += (luku1 + luku2 + luku3);
document.querySelector('#target2').innerHTML += (luku1 * luku2 * luku3);
document.querySelector('#target3').innerHTML += (luku1 + luku2 + luku3) / 3;