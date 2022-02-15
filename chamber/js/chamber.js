// FOOTER INFO
// Getting current year
let date = new Date();
let year = date.getFullYear()


document.querySelector("#year").innerHTML = year;

// document.querySelector('#date').innerHTML = date;


let currentdate = document.lastModified;
document.getElementById('current_date').textContent = `Last Updated ${currentdate}`;
console.log(currentdate)

// HAM TOGGLE

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);

// FULL DATE

const date_area = document.querySelector('.date')

// We have the current date from up above.
const date_now = new Date();

const full_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date_now);

date_area.innerHTML = `<em>${full_date}</em>`


// Advertisment Banner

const day = date_now.getDay();
// Sunday - Saturday : 0 - 6


// expected output: 2

function show_banner(announcement) {
    announcement.innerHTML = `<em>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</em>`
    announcement.classList.add('announce_style');
};

if (day === 1 || day === 2) {
    const announcement = document.querySelector('.announce')
    show_banner(announcement)
}

// -----------------LAZY LOADING IMAGES CODE-------------------
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    // Change the data-src to the src
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        // Remove data-src
        image.removeAttribute('data-src')
    }
}

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            // IF THE USER"S WINDOW IS ON TH EIMAGE
            if(item.isIntersecting) {
                //LOAD IMAGE
                loadImages(item.target);
                //IF USER IS NOT ON IMAGE< DON"T SHOW IT
                observer.unobserve(item.target);
            }
        });
    });
    //LOAD EACH IMAGE
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
//------------------------------------------



//GET KEY AND CONVERT VALUE TO NUMBER
let numVisits = Number(window.localStorage.getItem("num_visits"));
let visit_heading = document.querySelector('.visited')

console.log(numVisits)

if (numVisits != 0){
    visit_heading.textContent = numVisits;
}
else{
    visit_heading.textContent = 'This is your first visit!  Welcome!';
}

//Increment by 1 after each visit
numVisits++

//Store new variable
localStorage.setItem('num_visits', numVisits);
