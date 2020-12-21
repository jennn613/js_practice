'use strict';

const imgBox = document.querySelector('.imgBox');
let imgBoxLeft = imgBox.getBoundingClientRect().left;
let imgBoxWidth = imgBox.offsetWidth;
let num = 292;


for(let i=1; i<num; i++){
    let counter = i;
    const imgNum = String(counter).padStart(4, '0');
    const imgCreate = document.createElement('img');
    let imgUrl = `../img/${imgNum}.jpg`;
    imgCreate.setAttribute('src', imgUrl)
    imgBox.append(imgCreate);
}

const img = imgBox.querySelectorAll('img');

img.forEach((image)=> {
    image.style.display = 'none';
    img[0].style.display = 'block';
});
  
    imgBox.addEventListener( 'mousemove', (e)=> {
        let x = e.pageX;
        let mouseX = x - imgBoxLeft;
        let imgIdx = parseInt(mouseX / imgBoxWidth * num);

        img.forEach((image)=> {
            image.style.display = 'none';
            img[imgIdx].style.display = 'block';
        });
    });

