// const button =document.querySelector('.btn')

const buttons = document.getElementsByClassName('btn');

console.log(buttons[0])

function show() {
    // button.classList.add('newstyle');
    // button.classList.toggle('newstyle');


};

// buttons.addEventListener('click', show);


// button.addEventListener('click', () => {button.classList.add('newstyle')});


// Hamburger Menu:

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);