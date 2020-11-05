
const setSlideWidth = 900;
const productWrap = document.querySelector('.product_wrap'); //감싼 박스
productWrap.style.width = setSlideWidth + 'px';

const slider = document.querySelector('.product'); //감싼 ul
const products = document.querySelectorAll('.product_list'); // li박스

let productNum = products.length; // 이전 박스 개수

for(let i=0; i<products.length; i+=1){
    products[i].style.width = setSlideWidth + 'px';
}

const productShow = 1; //보일 박스 변수
let cloneProduct //마지막 박스 복사본

for(let i=0; i<productShow; i++) {
    cloneProduct = products[productNum-(i+1)].cloneNode(true);
    slider.prepend(cloneProduct); //마지막 박스 복사해서 첫번재 전에 넣기
}

let clonedProducts = document.querySelectorAll('.product_list'); // 박스 전체 선택 + 클론
let clonedProductsLength = clonedProducts.length; // 원래 개수 + 클론 된 개수;

slider.style.width = clonedProductsLength * setSlideWidth + 'px';
slider.style.marginLeft = - setSlideWidth;

// let sliderWidth = setSlideWidth *  productNum;//ul의 가로값(수정)

// console.log(products)
let productWidth = products[0].offsetWidth; //li 박스 하나 가로 값 파악
// console.log(productWidth)

const nextBtn =document.querySelector(".next"); //왼쪽 버튼
const prevBtn=document.querySelector(".prev"); //오른쪽 버튼

slider.style.width = setSlideWidth * clonedProductsLength + 'px'; // slider 길이 설정

slider.style.position = 'relative';
slider.style.marginLeft = -(productWidth * productShow) + 'px'; // slider 이동시켜주기

let click = 0; // 클릭 횟수 받을 변수

let move ;


 let sliderMove = function(){
     move = setInterval(function (){

     click+=1;
     slider.style.left = -productWidth * click + 'px';

     if(click >= productNum-1) {
         slider.style.left = -productWidth * click + 'px';
         click = -1;
     }

     indicator.forEach((d,i) => {
        d.classList.remove('clicked'); //clicked class 제거해주기 = default
    });
    if(indiNum >= 0){
      indicator[indiNum].classList.add('clicked'); //눌렀을 때 추가해주기
    }else{
        indicator[indicatorNum-1].classList.add('clicked'); //눌렀을 때 추가해주기 
    }

 }, 2000); // slider 자동 움직임
};

let sliderStop = function(){
    clearInterval(move);
} //slider 움직임 멈춤

sliderMove();

slider.addEventListener('mouseenter', ()=>{
    sliderStop();
});

slider.addEventListener('mouseleave', ()=> {
    sliderMove();
});

nextBtn.addEventListener('mouseenter', ()=>{
    sliderStop();
});

nextBtn.addEventListener('mouseleave', ()=> {
    sliderMove();
});

prevBtn.addEventListener('mouseenter', ()=>{
    sliderStop();
});

prevBtn.addEventListener('mouseleave', ()=> {
    sliderMove();
});



prevBtn.addEventListener('click', () =>{
    click++;
    slider.style.left = -productWidth * click + 'px';

    if(click >= productNum-1) {
        slider.style.left = -productWidth * click + 'px';
        click = -1;
    }
}); // < 버튼 눌렀을 때


nextBtn.addEventListener('click', () =>{
    click--;
    slider.style.left = -productWidth * click + 'px';

    if(click <= -1) {
        slider.style.left = -productWidth * click + 'px';
        click = productNum-1;
    }
}); // > 버튼 눌렀을 때

productWrap.style.width = productWidth + 'px'; // 감싼 박스 width

const indicator = document.querySelector('.indicator');

indicator.style.width = productWidth + 300 + 'px';
