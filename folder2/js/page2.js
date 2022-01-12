// Getting current year
let date = new Date();
let year = date.getFullYear()


document.querySelector("#year").innerHTML = year;

// document.querySelector('#date').innerHTML = date;


let currentdate = document.lastModified;
document.getElementById('current_date').textContent = `Last Updated ${currentdate}`;
console.log(currentdate)