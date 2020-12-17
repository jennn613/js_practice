'use strict';

const bigImg = document.querySelector('.img_big') // div
const imgUl = document.querySelector('.img_list'); //ul
const smallImg = document.querySelectorAll('.img'); // ul > li > a
const zoomImg = document.querySelector('.view_img'); // zoom img box
const titleWrap = document.querySelector('.view_img_name');
const dl = titleWrap.querySelector('dl');
const title = dl.querySelector('dt');
const description = dl.querySelector('dd');

const titleArray = [
'COCO Mademoiselle Chanel Paris', 
'chanel No.5', 
'chanel No.5', 
'chanel No.5'
]

const descriptionArray = [
    'perfume img 1',
    'perfume img 2',
    'perfume img 3',
    'perfume img 4'
]

smallImg[0].classList.add('selected'); //default
zoomImg.style.backgroundPosition = '50% 50%';
zoomImg.style.backgroundImage = `url("../img/img${1}.jpg")`; // default img
bigImg.style.backgroundImage = `url("../img/img${1}.jpg")`; // default img
title.innerText = titleArray[1];
description.innerText = descriptionArray[1];

smallImg.forEach((img, i)=> {

    img.style.backgroundImage = `url("../img/img${i+1}.jpg")`; //img setting

    img.addEventListener('click', (e)=> {
        e.preventDefault();

        smallImg.forEach((img)=> {
            img.classList.remove('selected'); // reset class selected
        });
        smallImg[i].classList.add('selected'); // add selected to clicked img
        
        bigImg.style.transition = 'opacity 300ms linear';
        bigImg.style.opacity = 0;
        setTimeout(()=> {
            bigImg.style.opacity = 1;
            bigImg.style.backgroundImage = `url("../img/img${i+1}.jpg")`; // img resetting
        }, 300); // big img setting

    zoomImg.style.backgroundImage = `url("../img/img${i+1}.jpg")`;
    title.innerText = titleArray[i];
    description.innerText = descriptionArray[i];
    
    });
});

bigImg.addEventListener('mousemove', (e)=> {

    const x = e.offsetX; 
    const y = e.offsetY;

    const scaleX = x / bigImg.getBoundingClientRect().width * 100; 
    const scaleY = y / bigImg.getBoundingClientRect().height * 100;

    zoomImg.style.backgroundPosition = `${scaleX}% ${scaleY}%`;

});

