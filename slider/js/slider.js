
const productWrap = document.querySelector('.product_wrap') //감싼 박스
let productWrapWidth = productWrap.offsetWidth; //감싼 박스 가로
console.log(productWrapWidth)

const slider = document.querySelector('.product'); //감싼 ul
let sliderWidth = slider.offsetWidth; //ul의 가로값

const products = document.querySelectorAll('.product_list'); // li박스
console.log(products)
let productWidth = products[0].offsetWidth; //li 박스 하나 가로 값
console.log(productWidth)

const nextBtn =document.querySelector(".next"); //왼쪽 버튼
const prevBtn=document.querySelector(".prev"); //오른쪽 버튼

let productNum = products.length; // 박스 개수

const productShow = 1; //보일 박스 변수

let cloneProduct //마지막 박스 복사본

for(let i=0; i<productShow; i++) {
    cloneProduct = products[productNum-(i+1)].cloneNode(true);
    slider.prepend(cloneProduct); //마지막 박스 복사해서 첫번재 전에 넣기
}

// let indiWidth = document.querySelector('.indicator');
// indiWidth.style.width = productWidth + 300 + 'px'; // 인디케이터 width 설정


let clonedProducts = document.querySelectorAll('.product_list'); // 박스 전체 선택 + 클론
let clonedproductsLength = clonedProducts.length; // 원래 개수 + 클론 된 개수;

slider.style.width = sliderWidth * clonedproductsLength + 'px'; // slider 길이 설정

slider.style.position = 'relative';
slider.style.marginLeft = -(productWidth * productShow) + 'px'; // slider 이동시켜주기

let click = 0;

let move ;

let sliderMove = function(){
    move = setInterval(function (){

   click+=1;
    slider.style.left = -productWidth * click + 'px';

    if(click >= productNum-1) {
        slider.style.left = -productWidth * click + 'px';
        click = -1;
    }

}, 2000); // slider 자동 움직임
};

let sliderStop = function(){
    clearInterval(move);
}

sliderMove();

slider.addEventListener('mouseenter', ()=>{
    sliderStop();
});

slider.addEventListener('mouseleave', ()=> {
    sliderMove();
})

nextBtn.addEventListener('mouseenter', ()=>{
    sliderStop();
});

nextBtn.addEventListener('mouseleave', ()=> {
    sliderMove();
})

prevBtn.addEventListener('mouseenter', ()=>{
    sliderStop();
});

prevBtn.addEventListener('mouseleave', ()=> {
    sliderMove();
})





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

console.log(indicator.offsetWidth)