let osallistujat = parseInt(prompt("Kuinka monta ihmistä osallistuu: "));

let names = [];

for (let i = 0; i < osallistujat; i += 1) {
    let name = prompt("Kerro " + (i + 1) + ". osallistujan nimi: ");
    names.push(name);
}
names.sort();

// Changed this line - we get the existing div instead of creating a new element
let nimet = document.getElementById("target");

let ol = document.createElement("ol");

for (let i = 0; i < names.length; i += 1) {
    let li = document.createElement("li");
    li.innerHTML = names[i];
    ol.appendChild(li);
}

nimet.appendChild(ol);