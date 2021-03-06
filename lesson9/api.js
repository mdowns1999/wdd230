//USING JAVASCRIPT TO BRING IN DATA

// const url = 'https://learnwebcode.github.io/json-example/animals-1.json';

const url = 'https://github.com/mdowns1999/wdd230/chamber/js/bussiness.json';

// const results = fetch(url);

// console.log(results)

//NORMAL FUNCTION

//ARROW FUNCITON
let result = fetch(url).then((result)=>{
    if(result.ok){
        return result.json();
    }
    else {
        alert('Data is missing');
    }
});

        result.then((data)=>{
            let h1 = document.querySelector('h1');
            h1.textContent= (data[0].foods.likes[1])
            console.log(data[0].foods.likes[1]);
            console.log(data);
        });

let data = [
    {
        "name": "Rexburg Floral",
        "address": "233 1st N",
        "number": "(208) 233-3333",
        "website": "floralrexburg.com",


    },
    {
        "name": "Tony's Hardware",
        "address": "100 1st E",
        "number": "(208) 255-5555",
        "website": "tonyshardware.com"

    },
    {
        "name": "Ben's Dinner",
        "address": "300 1st S",
        "number": "(208) 333-1333",
        "website": "bensdinner.com"

    },{
        "name": "Johns Cleaning",
        "address": "200 1st E",
        "number": "(208) 111-2222",
        "website": "johnscleaning.com"

    },
    {
        "name": "Kens Autoshop",
        "address": "250 2nd E",
        "number": "(208) 344-6758",
        "website": "rexburgautobody.com"

    },
    {
        "name": "Everyday Grocery",
        "address": "300 1st E",
        "number": "(208) 233-3333",
        "website": "everydaygrocery.com"

    },
    {
        "name": "The Paint Shop",
        "address": "200 3rd E",
        "number": "(208) 122-3333",
        "website": "rexpaint.com"

    },
    {
        "name": "Idaho Bank",
        "address": "150 3rd E",
        "number": "(208) 555-5555",
        "website": "rexbank.com"

    },
    {
        "name": "Cal-Ranch",
        "address": "250 2nd E",
        "number": "(208) 222-3333",
        "website": "cal-ranch.com"

    },
    {
        "name": "Clover's Dress Shop",
        "address": "500 2nd E",
        "number": "(208) 111-0002",
        "website": "rexdress.com"

    },
    {
        "name": "Tony's Pizzeria",
        "address": "201 3rd E",
        "number": "(208) 142-3333",
        "website": "rexpizza.com"

    },
    {
        "name": "Europe Shoe Store",
        "address": "200 Main st",
        "number": "(208) 122-5533",
        "website": "rexshoe.com"

    }

] 

console.log(data[0].name)

{"data":[
    {
        "name": "Rexburg Floral",
        "address": "233 1st N",
        "number": "(208) 233-3333",
        "website": "floralrexburg.com",
        "image": "images/resized_icons/rsz_1cleaning.png"


    },
    {
        "name": "Tony's Hardware",
        "address": "100 1st E",
        "number": "(208) 255-5555",
        "website": "tonyshardware.com",
        "image": "hardware.png"
    },
    {
        "name": "Ben's Dinner",
        "address": "300 1st S",
        "number": "(208) 333-1333",
        "website": "bensdinner.com",
        "image": "hardware.png"

    },{
        "name": "Johns Cleaning",
        "address": "200 1st E",
        "number": "(208) 111-2222",
        "website": "johnscleaning.com",
        "image": "hardware.png"

    },
    {
        "name": "Kens Autoshop",
        "address": "250 2nd E",
        "number": "(208) 344-6758",
        "website": "rexburgautobody.com",
        "image": "hardware.png"

    },
    {
        "name": "Everyday Grocery",
        "address": "300 1st E",
        "number": "(208) 233-3333",
        "website": "everydaygrocery.com",
        "image": "hardware.png"

    },
    {
        "name": "The Paint Shop",
        "address": "200 3rd E",
        "number": "(208) 122-3333",
        "website": "rexpaint.com",
        "image": "hardware.png"

    },
    {
        "name": "Idaho Bank",
        "address": "150 3rd E",
        "number": "(208) 555-5555",
        "website": "rexbank.com",
        "image": "hardware.png"

    },
    {
        "name": "Cal-Ranch",
        "address": "250 2nd E",
        "number": "(208) 222-3333",
        "website": "cal-ranch.com",
        "image": "hardware.png"

    },
    {
        "name": "Clover's Dress Shop",
        "address": "500 2nd E",
        "number": "(208) 111-0002",
        "website": "rexdress.com",
        "image": "hardware.png"

    },
    {
        "name": "Tony's Pizzeria",
        "address": "201 3rd E",
        "number": "(208) 142-3333",
        "website": "rexpizza.com",
        "image": "hardware.png"

    },
    {
        "name": "Europe Shoe Store",
        "address": "200 Main st",
        "number": "(208) 122-5533",
        "website": "rexshoe.com",
        "image": "hardware.png"

    }

] }

