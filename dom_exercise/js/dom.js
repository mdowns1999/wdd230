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

// const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = function () {
//     let item = input.value;
//     input.value=''

//     const listItem = document.createElement('li');
//     const listText = document.createElement('span');
//     const listButton = document.createElement('button');


//         listItem.appendChild(listText);
//         listText.textContent = item;
//         listItem.appendChild(listButton);
//         listBtn.textContent = 'Delete';
//         list.appendChild(listItem);

//         listBtn.onclick = function(e) {
//         list.removeChild(listItem);
//         }

//         input.focus();

// }

// const list = document.querySelector('ul');
//       const input = document.querySelector('input');
//       const button = document.querySelector('button');

//       button.onclick = function() {
//         let myItem = input.value;
//         input.value = '';

//         const listItem = document.createElement('li');
//         const listText = document.createElement('span');
//         const listBtn = document.createElement('button');

//         listItem.appendChild(listText);
//         listText.textContent = myItem;
//         listItem.appendChild(listBtn);
//         listBtn.textContent = 'Delete';
//         list.appendChild(listItem);

//         listBtn.onclick = function(e) {
//           list.removeChild(listItem);
//         }

//         input.focus();
//       }


const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){

    let myItem = input.value;
    input.value="";

    const listItem = document.createElement('li');
    const listButton = document.createElement('button')
    const listText = document.createElement('span')

    listItem.appendChild(listText)
    listText.textContent = myItem;
    listItem.appendChild(listButton)
    listButton.textContent = "❌";
    list.appendChild(listItem);

    listButton.addEventListener('click', function() {
        list.removeChild(listItem);
    })
    input.focus();
}
);