//USING JAVASCRIPT TO BRING IN DATA

const url = 'https://learnwebcode.github.io/json-example/animals-1.json';

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
        });

let test_json = [
    {
        "name": "Rexburg Floral",
        "address": "233 1st N",
        "number": "(208) 233-3333",
        "website": "floralrexburg.com"

    },
    {
        "name": "Tony's Hardware",
        "address": "100 1st E",
        "number": "(208) 255-5555",
        "website": "tonyshardware.com"

    }
]

console.log(test_json[1].name)