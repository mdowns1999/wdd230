let body = document.querySelector('body');

// // PUT IN NEW KEY VALUE
// let choice = localStorage.setItem('bgcolor', '0000FF');

// let currentColor = localStorage.getItem('bgcolor');

// body.style.backgroundColor = '#' + currentColor;

// Second:

var bgcolorForm = document.getElementById('bgcolor');


if(!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', bgcolorForm.value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');

    // document.getElementById('bgcolor').value = currentColor;

    body.style.backgroundColor = '#' + currentColor;

}

bgcolorForm.addEventListener('change', populateStorage);