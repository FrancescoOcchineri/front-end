// Esercizio 1 

let button1 = document.querySelector('.saveLocal');
let button2 = document.querySelector('.delete');
let input = document.querySelector('input');

button1.addEventListener('click', () => {
    event.preventDefault();
    let inputValue = input.value;
    localStorage.setItem("user", inputValue);
    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.innerHTML = inputValue;
    ol.appendChild(li);
})

button2.addEventListener('click', () => {
    localStorage.clear();
})

// Esercizio 2

function contatore() {
    let count = parseInt(sessionStorage.getItem("count")) || 0;
    let contatore = document.querySelector('.contatore');
    let timer = setInterval(() => {
        count++;
        contatore.textContent = "Timer: " + count;
        sessionStorage.setItem("count", count);
    }, 1000);
}

contatore();

// To Do List

let buttonList = document.querySelector('.buttonList');
let inputList = document.querySelector('.inputt');
let olList = document.querySelector('.ool');

let stampList = localStorage.getItem("list");
if (stampList) {
    let liList = document.createElement('li');
    liList.innerHTML = stampList;
    olList.appendChild(liList);
}

buttonList.addEventListener('click', () => {
    event.preventDefault();
    let inputtValue = inputList.value;
    localStorage.setItem("list", inputtValue);
    let local = localStorage.getItem("list")
    let liList = document.createElement('li');
    liList.innerHTML = local
    olList.appendChild(liList);

})