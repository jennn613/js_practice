'use strict';

const header = document.querySelector('.header'); //header

header.style.position = 'absolute';
header.style.top = 45 + 'px';
header.style.left = 50 + '%';
header.style.transform = 'translateX(-50%)';
// default 위치

// 2번 스크롤값 45px 이상 상단 여백 없이 고정
    document.addEventListener('scroll', ()=>{
        if(window.scrollY > 45){
            header.style.position = 'fixed';
            header.style.top = 0;
            header.style.left = 50 + '%';
            header.style.transform = 'translateX(-50%)';
        }

        else {
            header.style.position = 'absolute';
            header.style.top = 45 + 'px';
            header.style.left = 50 + '%';
            header.style.transform = 'translateX(-50%)';
        }
    });


    // slider 

    const home = document.querySelector('.home_img'); // 감싼 div
    let homeWidth = home.offsetWidth; // home width
    home.style.height= window.innerHeight + 'px';
    const slider = document.querySelector('.home_img_slider'); // ul
    const indicatorWrap = document.querySelector('.indicator_wrap'); //ul
    const indicator = indicatorWrap.querySelectorAll('li') // li
    const chevronWrap = document.querySelector('.indicator_chevron_wrap'); //ul
    const chevron = chevronWrap.querySelectorAll('li'); //li
    const prev = chevron[0]; // <
    const next = chevron[1]; // >
    const adNumWrap = document.querySelector('.home_img_pic_num');
    const adNum = adNumWrap.querySelectorAll('span');

    let picNum = 5; //li 개수
    let picShow = 1; // 보여질 사진 개수

    // 8번 현재 광고, 전체 광고 수 표시 
    adNum[2].innerText = picNum;
   
    for(let i=0; i<picNum; i++){

        let li = document.createElement('li'); //li 추가해주는 변수
        let imgUrl = '../css/img/pic' +(i+1)+ '.jpg'; //img url
        let imgAdd =`<img src="">`; // li안의 img

        li.innerHTML = imgAdd; //li 안에 <img src=""> 추가
        slider.append(li); //li 복사

        let img = li.querySelectorAll('img'); // li안의 img 선택

        img.forEach((pic) => {
            pic.setAttribute('src', imgUrl); //img 안의 src 설정
        });

    } // <li><img =""></li>

    let picList = slider.querySelectorAll('li'); //새로 생긴 li 선택

picList.forEach((li) => {
li.style.width = homeWidth + 'px';
}); // li가로 = home width

for(let i=0; i<picShow; i++) {
    let copyLast = picList[picList.length-(i+1)].cloneNode(true);
    slider.prepend(copyLast);
} //마지막 박스 복사

let imgIdx = 0; // 버튼 클릭 시 img 순서
adNum[0].innerText = imgIdx + 1; //default 순서

let pic = slider.querySelectorAll('li'); //기존 박스 + copy 된 박스
let picWidth = picList[0].offsetWidth; //사진 하나 가로값 받아오기

picList.forEach((pic)=> {
    pic.style.width = homeWidth + 'px';
}); // 사진 하나 가로 = home width

slider.style.width = picWidth * pic.length + 'px'; //slider 길이 늘이기

slider.style.marginLeft = -picWidth + 'px'; //첫 번째 사진이 보이게

indicator.forEach((indi)=> {
    indi.classList.remove('active');
}); // active 클래스 초기화

indicator[imgIdx].classList.add('active');
//첫번째 인디케이터에 active

prev.addEventListener('click', (e)=> {
e.preventDefault();

imgIdx --;
slider.style.left = -picWidth * imgIdx + 'px';
adNum[0].innerText = imgIdx + 1;

if(imgIdx <= -1) {
    slider.style.left = -picWidth * imgIdx + 'px';
    imgIdx = picList.length - picShow;
    indicator[imgIdx].classList.add('active');
    adNum[0].innerHTML = imgIdx + 1;
}

indicator.forEach((indi)=> {
    indi.classList.remove('active');
});

if(imgIdx >= 0){
    indicator[imgIdx].classList.add('active'); 
  }

  
}); // < 눌렀을 때

next.addEventListener('click', (e)=> {
    e.preventDefault();
    
    if(imgIdx >= picList.length - picShow){
        slider.style.left = -picWidth * imgIdx + 'px';
        imgIdx = -1;
    }
    
    imgIdx ++;
    slider.style.left = -picWidth * imgIdx + 'px';
    adNum[0].innerText = imgIdx + 1;

indicator.forEach((indi)=> {
    indi.classList.remove('active');
});

if(imgIdx >= 0){
    indicator[imgIdx].classList.add('active'); 
  } else {
    indicator[picList.length - picShow].classList.add('active');
  }

}); // > 눌렀을 때

indicator.forEach((indiClick, i)=> {

    indiClick.addEventListener('click', (e)=> {
    e.preventDefault();

    imgIdx = i;
    slider.style.left = -picWidth * imgIdx + 'px';
    adNum[0].innerHTML = imgIdx+1;

    indicator.forEach((indi) => {
indi.classList.remove('active');
    });

    indiClick.classList.add('active');
});

}); // 인디케이터 눌렀을 때


let move;

let sliderMove = function() {
    move = setInterval(function() {

        imgIdx+=1;
        slider.style.left = -picWidth * imgIdx + 'px';
        adNum[0].innerHTML = imgIdx+1;
        if (imgIdx >= picList.length-1) {
            slider.style.left = -picWidth * imgIdx + 'px';
            imgIdx = -1;
        }

        indicator.forEach((d) => {
            d.classList.remove('active');
        });

        if(imgIdx >= 0){
            indicator[imgIdx].classList.add('active'); 
          } else {
            indicator[picList.length - picShow].classList.add('active');
            adNum[0].innerHTML = pic.length-1;
          }

    }, 2000);
}; // 자동 재생 함수

let sliderStop = function(){
    clearInterval(move);
}; //slider 멈춤

sliderMove(); // 자동 재생

home.addEventListener('mouseenter', ()=>{
    sliderStop();
}); // home mouseenter시 slider 멈춤

home.addEventListener('mouseleave', ()=> {
    sliderMove();
}); // home mouseleave > slider 움직이게


    //10번 top button

    const topBtn = document.querySelector('.topBtn'); //top button

    topBtn.addEventListener('click', ()=> {
        window.scrollTo({top: 0, behavior:'smooth'});
    }); //누르면 상단으로

    document.addEventListener('scroll', ()=> {

        if(window.scrollY > 300){

            topBtn.style.display = 'block';
            topBtn.classList.remove('hide');
            //300 이상일시 보이기
        }
        else {

            topBtn.classList.add('hide');
            setTimeout(()=>{ topBtn.style.display = 'none';}, 200);
        } //평상시 display nones
    });


    //11번 전체 focus일시 배경색 #ff0
let elements = document.querySelectorAll('a');

        elements.forEach((a) => {
     
            a.addEventListener('focus', (e)=> {
                e.preventDefault();
                a.classList.add('focus');
                a.style.color = 'black';
            });
            
            a.addEventListener('focusout', (e)=> {
                e.preventDefault();
                a.classList.remove('focus');
                a.style.color = 'white';
            });

    });
