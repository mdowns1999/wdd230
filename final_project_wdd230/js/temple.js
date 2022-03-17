// HAM TOGGLE FOR NAV BAR

const hamBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);

// FOOTER DATE
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;