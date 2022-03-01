const button =document.querySelector('.btn')
const button1 =document.querySelector('.btn1')

// const button = document.getElementsByClassName('btn');

// console.log(buttons[0])

function show() {
    button.classList.add('newstyle');
    button1.classList.remove('newstyle2')
    // button.classList.toggle('newstyle');


};

function show2() {
    button1.classList.add('newstyle2');
    button.classList.remove('newstyle')
    // button.classList.toggle('newstyle');


};

button.addEventListener('click', show);
button1.addEventListener('click', show2);


// button.addEventListener('click', () => {button.classList.add('newstyle')});


// Hamburger Menu:

// const hamburgerBtn = document.querySelector('.ham');
// const navigation = document.querySelector('.navigation');

// hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);