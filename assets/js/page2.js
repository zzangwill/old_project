let getBread = document.getElementById("img1");
let getEntrees = document.getElementById("img2");
let getDessert = document.getElementById("img3");

let getBread2 = document.getElementById("bread2");
let getEntrees2 = document.getElementById("entrees2");
let getDessert2 = document.getElementById("dessert2");

function Bread() {
    getEntrees.classList.add('hidden');
    getDessert.classList.add('hidden');
    getBread.classList.remove('hidden');

    getEntrees2.classList.add('hidden');
    getDessert2.classList.add('hidden');
    getBread2.classList.remove('hidden');

}

document.getElementById("bread-btn").onclick = Bread;

function Entrees() {
    getDessert.classList.add('hidden');
    getBread.classList.add('hidden');
    getEntrees.classList.remove('hidden');

    getDessert2.classList.add('hidden');
    getBread2.classList.add('hidden');
    getEntrees2.classList.remove('hidden');
}

document.getElementById("entrees-btn").onclick = Entrees;

function Dessert() {
    getBread.classList.add('hidden');
    getEntrees.classList.add('hidden');
    getDessert.classList.remove('hidden');

    getBread2.classList.add('hidden');
    getEntrees2.classList.add('hidden');
    getDessert2.classList.remove('hidden');
}

document.getElementById("dessert-btn").onclick = Dessert;