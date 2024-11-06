let year = parseInt(prompt("Kerro vuosiluku:"))

let leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
if (leapYear) {
    document.getElementById("target").innerHTML = year + " on karkausvuosi";
} else {
    document.getElementById("target").innerHTML = year + " ei ole karkausvuosi";
}











