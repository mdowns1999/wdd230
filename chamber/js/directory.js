// ----------------------DIRECTORY PAGE BRINGING IN JSON FILE----------------------------

const requestURL = 'https://mdowns1999.github.io/wdd230/chamber/js/data.json';

button1 = document.querySelector('.button1')
button2 = document.querySelector('.button2')





fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const data = jsonObject['data'];

    //ADD MEDIA SCREEN HERE FOR START DISPLAY
    console.log(window.innerWidth)
    if (800 > window.innerWidth && 600 < window.innerWidth ){
    data.forEach(displayList);
    } 
    else {
      data.forEach(displayCards);
    }


    function show_column(){
        data.forEach(removeCards);
        data.forEach(removeList);
        data.forEach(displayCards);
    };
    
    function show_rows(){
        data.forEach(removeCards);
        data.forEach(removeList);
        data.forEach(displayList);
    };

    function removeCards() {
        let section = document.querySelectorAll('.column');
        section.forEach((item) => {
            item.remove();
        })
     }

     function removeList() {
        let section = document.querySelectorAll('tr');
        section.forEach((item) => {
            item.remove();
        })
     }

    button1.addEventListener('click',  show_column)
    button2.addEventListener('click',  show_rows)

  });



  function displayCards(cards) {  // Create elements to add to the document
    let card = document.createElement('section');
    card_div_c = document.querySelector('.cards')
    card_div_c.setAttribute('id', 'column-layout')
    card.setAttribute('class', 'column');
    card.classList.add('column');

    //ADD IMG
    let img = document.createElement('img');    // Change the textContent property of the h2 element to contain the prophet's full name
    img.setAttribute('alt', 'Bussiness Card Image');
    img.setAttribute('src', `./${cards.image}`);
    img.classList.add('size');
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);


    let h2 = document.createElement('p');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${cards.name}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

    // ADD ADDRESS
    let p = document.createElement('p');    // Change the textContent property of the h2 element to contain the birthplace
    p.textContent = ` ${cards.address}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(p);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);


    //ADD Number
    let phone_p = document.createElement('p');    // Change the textContent property of the h2 element to contain the Birthdate
    phone_p.textContent = `${cards.number}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(phone_p);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

    //ADD Website
    let web_p = document.createElement('a');    // Change the textContent property of the h2 element to contain the Birthdate
    web_p.textContent = `${cards.website}`;
    web_p.setAttribute('href', '#');
    // Add/append the section(card) with the h2 element
    card.appendChild(web_p);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

  }

function displayList(list) {  // Create elements to add to the document
    let list_row = document.createElement('tr');
    let td_name = document.createElement('td');
    td_name.textContent = `${list.name}`;

    let td_address = document.createElement('td');
    td_address.textContent = `${list.address}`;

    let td_number = document.createElement('td');
    td_number.textContent = `${list.number}`;

    let td_web = document.createElement('td');
    let web_p = document.createElement('a')
    web_p.setAttribute('href', list.website);
    web_p.textContent = `${list.website}`;

    td_web.appendChild(web_p)
    list_row.appendChild(td_name)
    list_row.appendChild(td_address)
    list_row.appendChild(td_number)
    list_row.appendChild(td_web)
    document.querySelector('table').appendChild(list_row);

  }
