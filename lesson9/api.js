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
        });

