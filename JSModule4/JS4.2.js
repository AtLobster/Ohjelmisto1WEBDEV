'use strict';


const airportForm = document.querySelector('#airport-form')
airportForm.addEventListener('submit', async function(evt) {

    evt.preventDefault();
    const code = document.querySelector('input[name=icao]').value;
    try {
        const response = await fetch(`http://127.0.0.1:3000/airport/${code}`);
        const jsonData = await response.json();
        console.log(jsonData.ICAO, jsonData.Name);
    } catch (error) {
        console.log(error.message);
    }
});