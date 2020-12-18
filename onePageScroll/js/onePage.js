'use strict';

//popup

const popUp = document.querySelector('.popUp');
const close = document.querySelector('.close');

close.addEventListener('click', ()=> {

    popUp.style.display = 'none';
});

//header 

const nav = document.querySelector('.header_nav_list');
const navMenu = nav.querySelectorAll('li');

nav.addEventListener('click', (event) => {

const target = event.target;
const link= target.dataset.link;
   if(link == null){
     return;
   } 

   const section = document.querySelector(link);
   const sectionTop = section.getBoundingClientRect().top;
   
   window.scrollTo({top: sectionTop, behavior: 'smooth'});
   console.log(section, sectionTop);

});


//section 1
const tabTitle = document.querySelectorAll('.tab_title');
const tabCon = document.querySelectorAll('.tab_content');

tabCon[0].style.display = 'block';
tabTitle[0].classList.add('clicked');

tabTitle.forEach((title, i)=> {

    title.addEventListener('click', (e)=> {
        e.preventDefault();
        
        tabTitle.forEach((t)=> {
            t.classList.remove('clicked');
        });
       
        tabCon.forEach((con)=> {
            con.style.display = 'none';
            tabCon[i].style.display = 'block';
            tabTitle[i].classList.add('clicked');
    });

    });

});

//section 2 

const tabWrap = document.querySelector('.tab_title_list');
const tabTitleList = tabWrap.querySelectorAll('li');
const tabConBox = document.querySelectorAll('.tab_con2_box');

tabConBox[0].style.display = 'block';
tabTitleList[0].classList.add('active');

tabTitleList.forEach((title, i)=> {

    title.addEventListener('click', (e)=> {
        e.preventDefault();

        tabTitleList.forEach((title)=> {
            title.classList.remove('active');
        });

        tabConBox.forEach((con)=> {
            con.style.display = 'none';
            tabConBox[i].style.display = 'block';
            tabTitleList[i].classList.add('active');
        });
    });

});

//to the top
const topBtn = document.querySelector('.topBtn');

topBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});
