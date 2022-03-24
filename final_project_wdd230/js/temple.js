// HAM TOGGLE FOR NAV BAR

const hamBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);

// FOOTER DATE
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;


// FETCH JSON FILE FOR DIRECTORY PAGE

const requestURL = 'https://mdowns1999.github.io/wdd230/chamber/js/data.json';

fetch(requestURL)
    .then(function(response){
        return response.json()
    })
    .then(function (jsonObject){
        console.table(jsonObject)//See the data appears

        const data = jsonObject['data'];

        data.forEach(displayTempleCards);


        function displayTempleCards(temple){
            let card = document.createElement('section');


            //CREATE TEMPLE IMAGE
            let temple_img = document.createElement('img');
            temple_img.setAttribute('alt', 'Temple Image');
            temple_img.setAttribute('src', temple.image);
            card.appendChild(temple_img);
            document.querySelector('.temples').appendChild(card);

            let address = document.createElement('p');
            address.textContent = `${temple.info[0]}`
            card.appendChild(address);
            document.querySelector('.temples').appendChild(card);

            let phone = document.createElement('p');
            address.textContent = `${temple.info[1]}`
            card.appendChild(phone);
            document.querySelector('.temples').appendChild(card);

            let email = document.createElement('p');
            address.textContent = `${temple.info[0]}`
            card.appendChild(email);
            document.querySelector('.temples').appendChild(card);

        }


        //address, telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule
    })