let startYear = parseInt(prompt("Kerro aloitusvuosi:"))
let endYear = parseInt(prompt("Kerro lopetusvuosi: "))

let results = document.getElementById("target");

for (let year = startYear; year <= endYear; year = year + 1) {
  let leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  if (leapYear) {
    let p = document.createElement("p");
    p.innerHTML = year + " on karkausvuosi!";
    results.appendChild(p);
  }
}













