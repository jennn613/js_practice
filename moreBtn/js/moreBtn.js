'use strict';


const xhr = new XMLHttpRequest();

xhr.onload = function() {
    const data =  JSON.parse(xhr.responseText);
    if (xhr.status === 200) {
    const wrap = document.getElementById("wrap");
    const part = document.querySelector('.part');
    const partUl = document.querySelector('ul');
    const btn = document.querySelector('.more_btn');
    let view = 15;
    
function more(num){
    for(let i=0; i<view; i++){

        const li = document.createElement('li');
        partUl.append(li);
    }
    const partLi = partUl.querySelectorAll('li');

    partLi.forEach((li, i)=> {

        li.innerHTML = `<div class="image"></div>
        <dl>
        <dt class="name">${data[i].first_name}</dt>
        <dd class="address">${data[i].address}</dd>
        </dl>`;
    });
    
    const img = document.querySelectorAll('.image');
    img.forEach((img, i)=> {

        img.style.backgroundImage = `url("${data[i].image_data}")`;
    });
}
more();

    btn.addEventListener('click', (e)=> {
        e.preventDefault();
        more(view);
    });

  }
};

xhr.open("GET", "../data/random_people.json", true);
xhr.send(null);