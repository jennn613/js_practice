'use strict';

const tabTitle = document.querySelectorAll('.tab_title');
const tabCon = document.querySelectorAll('.tab_content');

tabCon[0].style.display = 'block'

tabTitle.forEach((title, i)=> {

    title.addEventListener('click', (e)=> {
        e.preventDefault();

        tabCon.forEach((con)=> {
            setTimeout(()=>{
            con.style.display = 'none';
            tabCon[i].style.display = 'block';
        });



    });

});

//to the top
const topBtn = document.querySelector('.topBtn');

topBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

