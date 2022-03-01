const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


let jsonObject = fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });


  const prophets = jsonObject['prophets'];

  prophets.forEach(displayProphets);




//   const prophets = jsonObject['prophets'];



function displayProphets(prophet) {  // Create elements to add to the documentlet card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);

    // //ADD BIRTH
    // let p = document.createElement('p');    // Change the textContent property of the h2 element to contain the prophet's full name
    // p.textContent = prophet.birthplace;
    // // Add/append the section(card) with the h2 element
    // card.appendChild(p);
    // // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector('div.cards').appendChild(card);


    // //ADD DEATHPLACE
    // let death_p = document.createElement('p');    // Change the textContent property of the h2 element to contain the prophet's full name
    // death_p.textContent = prophet.death;
    // // Add/append the section(card) with the h2 element
    // card.appendChild(death_p);
    // // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector('div.cards').appendChild(card);

    // //ADD IMG
    // let img = document.createElement('img');    // Change the textContent property of the h2 element to contain the prophet's full name
    // img.setAttribute('src', prophet.imageurl);

    // image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
    // // Add/append the section(card) with the h2 element
    // card.appendChild(img);
    // // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector('div.cards').appendChild(card);

  }
  
