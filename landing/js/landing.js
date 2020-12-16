'use strict';

const content = document.querySelector('#contentBox');
const more = document.querySelector('#moreBox');
const landingBox1 = document.querySelector('.con_landing_box');
const landingBox2 = document.querySelector('.more_landing_box');
const contentBox = document.querySelector('.content_area');
const moreBox = document.querySelector('.more_area');

let windowHeight = window.innerHeight / 4 * 3;

let contentTop = content.offsetTop;
let moreTop = more.offsetTop;

window.addEventListener('scroll', ()=> {

if(window.scrollY >= content.offsetHeight / 15 * 14) {
    landingBox1.classList.add('action');
    contentBox.classList.add('action');
}
else {
    landingBox1.classList.remove('action');
    contentBox.classList.remove('action');
}

if(window.scrollY >= moreTop - 500 ) {
    landingBox2.classList.add('action');
    moreBox.classList.add('action');
    // more.classList.add('changeColor');
    more.style.backgroundColor = 'lightgreen';
}

else {
    landingBox2.classList.remove('action');
    moreBox.classList.remove('action');
    more.classList.remove('changeColor');
    more.style.backgroundColor = 'lightgray';
}

});