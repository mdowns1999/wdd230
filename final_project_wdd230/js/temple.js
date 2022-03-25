// HAM TOGGLE FOR NAV BAR

const hamBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false);

// FOOTER DATE
let date = new Date();
let year = date.getFullYear();

document.querySelector('#year').textContent = year;


// FETCH JSON FILE FOR DIRECTORY PAGE

const requestURL = 'https://mdowns1999.github.io/wdd230/final_project_wdd230/js/temple_data.json';

fetch(requestURL)
    .then(function(response){
        return response.json()
    })
    .then(function (jsonObject){
        console.table(jsonObject)//See the data appears

        const data = jsonObject['data'];

        displayTempleCards(data[0])


        salt_button = document.querySelector('#button1');
        payson_button = document.querySelector('#button2');
        center_button = document.querySelector('#button3');
        provo_button = document.querySelector('#button4');

        salt_button.addEventListener('click',  add_salt_lake)
        payson_button.addEventListener('click',  add_payson_temple)
        center_button.addEventListener('click',  add_provo_center_temple)
        provo_button.addEventListener('click',  add_provo_temple)

        function add_salt_lake(){
            removeTemples()
            displayTempleCards(data[2])
        };

        function add_payson_temple(){
            removeTemples()
            displayTempleCards(data[3])
        };

        function add_provo_center_temple(){
            removeTemples()
            displayTempleCards(data[0])
        };

        function add_provo_temple(){
            removeTemples()
            displayTempleCards(data[1])
        };



        function displayTempleCards(temple){
            let card = document.createElement('section');
            card.setAttribute('class', 'temple_card');
            card.classList.add('temple_card');

            //ADD TEMPLE TITLE
            let name = document.createElement('h1');
            name.textContent = `${temple.name}`
            card.appendChild(name);
            document.querySelector('.temples').appendChild(card);

            //CREATE TEMPLE IMAGE
            let temple_img = document.createElement('img');
            temple_img.setAttribute('alt', 'Temple Image');
            temple_img.setAttribute('src', temple.image);
            temple_img.classList.add('temple_img_size');
            card.appendChild(temple_img);
            document.querySelector('.temples').appendChild(card);

            //CREATE Address
            let address = document.createElement('p');
            address.textContent = `${temple.address}`
            card.appendChild(address);
            document.querySelector('.temples').appendChild(card);



            let phone = document.createElement('p');
            phone.textContent = `Phone Number:    ${temple.number}`
            card.appendChild(phone);
            document.querySelector('.temples').appendChild(card);




            let schedule_heading = document.createElement('h3');
            schedule_heading.textContent = `Closure Dates`
            card.appendChild(schedule_heading);
            document.querySelector('.temples').appendChild(card);

            let list = document.createElement('ul')
            list.classList.add('temple_list');
            let closures = temple.schedule
            console.log(closures[0])
            for (let i = 0; i < closures.length; i++) {
                let item = document.createElement('li')
                item.textContent = `${closures[i]}`
                list.appendChild(item);
              }

            card.appendChild(list);
            document.querySelector('.temples').appendChild(card);




            //CREATE SCHEDULE BUTTON
            let schedule_link = document.createElement('a')
            schedule_link.textContent = `Click Here to See Avaliable Appointment Times`
            schedule_link.setAttribute('href', `https://www.churchofjesuschrist.org/temples/schedule/appointment?lang=eng`)
            schedule_link.setAttribute('target', "_blank")
            schedule_link.classList.add('button_style')
            card.appendChild(schedule_link);
            document.querySelector('.temples').appendChild(card);

        }


        function removeTemples() {
            document.querySelector('.temple_card').remove();
        }

        //address, telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule
    })
