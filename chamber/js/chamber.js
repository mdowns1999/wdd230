// FOOTER INFO
// Getting current year
let date = new Date();
let year = date.getFullYear()


document.querySelector("#year").innerHTML = year;

// document.querySelector('#date').innerHTML = date;


let currentdate = document.lastModified;
document.getElementById('current_date').textContent = `Last Updated ${currentdate}`;
// console.log(currentdate)

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
const images = document.querySelectorAll('.picture');

// OPTIONS TO AFFECT IMAGE
const options = {
    threshold: [.01]
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) =>{

        entries.forEach(entry => {
            // console.log(entries);
            if(!entry.isIntersecting){
                return;
            } else{
                //Call a function on th eimage it is currently seeing
                preloadImage(entry.target)
                io.unobserve(entry.target) // Stop observing it
            }
        })
    },
    options
)

//SEE ALL IMAGES
images.forEach(image => {
    io.observe(image);
})

//------------------------------------------
// A function that will calculate th edifference of days
function calc_diff_days(date1, date2){
    let diff_milliseconds = date2.getTime() - date1.getTime()

    let difference_days = Math.floor(diff_milliseconds / (1000 * 3600 * 24))

    return difference_days
};
//GET KEY AND CONVERT VALUE TO NUMBER
let visit_heading = document.querySelector('.visited')


if (!localStorage.getItem('last_visited')){
    localStorage.setItem('last_visited', new Date());
    //DAYS SINCE LAST VISIT
    visit_heading.textContent = 'This is your first visit!  Welcome!';
}
else{
    let last_visited = localStorage.getItem('last_visited')
    let date1 = new Date(last_visited);
    let date2 = new Date();
    diff_days = calc_diff_days(date1, date2);
    localStorage.setItem('last_visited', last_visited);
    console.log(diff_days)

    visit_heading.textContent = `${diff_days} days`;
}

localStorage.setItem('last_visited', last_visited);

// DATE FOR HIDDEN INPUT
document.getElementById('hidden').value = date;
