// const link = document.querySelector('a');


// link.textContent = 'Mozilla Developer Network';

// link.href = 'https://developer.mozilla.org';

// //// --------------------------ADD NEW ELEMENT
// const sect = document.querySelector('section');

// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';

// sect.appendChild(para);

// const text = document.createTextNode(' — the premier source for web development knowledge.');

// const linkPara = document.querySelector('p');
// linkPara.appendChild(text);


// sect.appendChild(linkPara);

// sect.removeChild(linkPara);


// // ADD CSS CLASS
// para.setAttribute('class', 'highlight');


// _____________________________SHOPPING EXAMPLE


const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){

    let input_value = input.value;
    input.value="";

    const list_item = document.createElement('li');
    const list_button = document.createElement('button')
    const list_text = document.createElement('span')

    list_item.appendChild(list_text)
    list_text.textContent = input_value;
    list_item.appendChild(list_button)
    list_button.textContent = "❌";
    list.appendChild(list_item);

    list_button.addEventListener('click', function() {
        list.removeChild(list_item);
    })
    input.focus();
}
);