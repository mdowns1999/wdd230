// const button =document.querySelector('.btn')

const button = document.getElementsByClassName('btn');

// console.log(buttons[0])

function show() {
    button.classList.add('newstyle');
    // button.classList.toggle('newstyle');


};

button.addEventListener('click', show);


// button.addEventListener('click', () => {button.classList.add('newstyle')});


// Hamburger Menu:

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);