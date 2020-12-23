'use strict';

const cardBox = document.querySelector('#cardBox');
const cardBoxUl = cardBox.querySelector('ul');

for(let i=0; i<20; i++){

    const addList = document.createElement('li');
    // li 생성할 변수
    let liCode = `<a href="#"><div class="img_temp"><img src="#"></div><span>title</span></a>`;
    // li 안의 코드
    addList.innerHTML= liCode;
    // li 안 코드 설정
    cardBoxUl.append(addList);
    // ul 안 li 생성하기
}

const imgbox = cardBoxUl.querySelectorAll('li');
let boxMargin = 20; // box 하나의 margin-right 값
const imgBoxWidth = imgbox[0].offsetWidth; // just width
let imgboxMargin = imgBoxWidth + boxMargin; // width + margin 


const refresh = function() {

    imgbox.forEach((img)=> {
    img.style.marginRight = boxMargin + 'px';
    });
    let windowWidth = window.innerWidth; // window width
    
    let imgBoxLength = parseInt(windowWidth / imgboxMargin);
    // window width / img box의 width + margin 값 = 가로에 들어갈 수 있는 imgbox 개수 구함
    // 정수화처리 : parseInt() 
    // 버림, 올림, 반올림:  Math.floor(), Math.ceil(), Math.round()
    let cardBoxWidth = (imgboxMargin * imgBoxLength) - boxMargin;
    // ul box의 길이는 margin 포함 img box width * 가로에 들어갈 수 있는 개수 - 마지막 박스의 margin-right
    
    cardBoxUl.style.width = cardBoxWidth + 'px';
    //ul 가로 길이 설정해주기
    
    let imgBoxColumn = Math.ceil(imgbox.length / imgBoxLength);
    // li 개수 / 가로에 들어갈 수 있는 li의 개수 = 열 개수
    
    for(let i=1; i <= imgBoxColumn; i++){
        //i는 li 열 개수보다 작을 때까지, i는 1부터 시작
        
        let lastBoxIdx = (imgBoxLength * i) - 1;
        //각 행의 마지막 박스 idx 구하기
        console.log(lastBoxIdx)
        imgbox[lastBoxIdx].style.marginRight = 0;
        //각 행의 마지막 박스 margin-right 제거해주기
    };
    
};   
refresh();


window.addEventListener('resize', ()=> {
    refresh();

});