'use strict';

const menuArray = [
    {
        "name": "Japan",
        "thum": "thumb1",
        "img": "img1",
        "description": "pic of Japan",
    },
    {
        "name": "Singapore",
        "thum": "thumb2",
        "img": "img2",
        "description": "Pic of Singapore",
    },
    {
        "name": "Turkey",
        "thum": "thumb3",
        "img": "img3",
        "description": "pic of Turkey",
    },
    {
        "name": "Spain",
        "thum": "thumb4",
        "img": "img4",
        "description": "pic of Spain",
    },
]

const boxWrap = document.querySelector('.box_list');

for(let i=0; i<menuArray.length; i++){

    const createLi = document.createElement('li');
    let liContent = `<a href="#" class="box"><span>${menuArray[i].name}</span></a>`;

    createLi.innerHTML = liContent;
    boxWrap.append(createLi);

    const boxList = boxWrap.querySelectorAll('li');

    boxList.forEach((li, idx)=> {

        li.setAttribute('data-big', `img${idx + 1}`);
        li.setAttribute('data-narr', `${menuArray[idx].description}`);
    });
}

const box = document.querySelectorAll('.box');
const imgWrap = document.querySelector('.img_wrap');

box.forEach((a, i)=> {
    a.style.backgroundImage = `url('../img/thumb${i+1}.jpg')`;

    a.addEventListener('click', (e)=> {

        e.preventDefault();

        imgWrap.style.display = 'block';
        imgWrap.innerHTML = `<div class="img_area">
        <div class="close"><a href="#"><i class="fas fa-times"></i></a></div>
        <div class="img">
          <p>description</p>
        </div>
      </div>`;

      const img = document.querySelector('.img');
      const imgText = img.querySelector('p');

      img.style.backgroundImage = `url('../img/img${i+1}.jpg')`;
      imgText.innerText = `${menuArray[i].description}`;

      setTimeout(() => {
          imgText.classList.add('click');    
      }, 160);
    
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        imgWrap.style.display="none";
        imgWrap.innerHTML = "";
        imgText.classList.remove('click');
    });

    });
});