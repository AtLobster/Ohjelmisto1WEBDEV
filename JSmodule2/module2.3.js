let dogs = [];

for (let i = 0; i < 6; i++) {
    let dogName = prompt("Kerro " + (i + 1) + ". koiran nimi: ");
    dogs.push(dogName);
}

dogs.sort().reverse();

let koirat = document.getElementById("target");

let ul = document.createElement("ul");

for (let i = 0; i < dogs.length; i += 1) {
    let li = document.createElement("li");
    li.innerHTML = dogs[i];
    ul.appendChild(li);
}

koirat.appendChild(ul);