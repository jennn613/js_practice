const wrap = document.querySelector('.product'); // wrap 받아옴
wrap.style.overflow = 'hidden'; 

const slider = document.querySelector('.product_list'); //ul

const products = document.querySelectorAll('.product_list_item'); //li
let productWidth = products[0].offsetWidth; //li 박스 하나 길이
let productNum = products.length; // box 개수

const indicator = document.querySelectorAll('.indicator_list_item'); //인디케이터 li

const nextBtn = document.querySelector('.next'); // < 버튼
const prevBtn = document.querySelector('.prev'); // > 버튼

let boxShow = 1; // 보여질 박스 개수

let copyLastBox;

for(let i=0; i < boxShow; i++) {
    copyLastBox = products[productNum-(i+1)].cloneNode(true);
    slider.prepend(copyLastBox);
} //마지막 박스 복사 

let clonedProducts = document.querySelectorAll('.product_list_item'); 
let clonedProductsLength = clonedProducts.length; // 원래 개수 + 클론 된 개수;

slider.style.width = productWidth * clonedProductsLength + 'px';
slider.style.marginLeft = -productWidth + 'px'; // 0번째 박스를 첫번째로 보이기

slider.style.position = 'relative'; 

let num = 0;
let indicatorNum = indicator.length; //indicator 개수

let move;

let sliderMove = function() {
    move = setInterval(function() {

        num+=1;
        slider.style.left = -productWidth * num + 'px';
        
        if (num >= productNum-1) {
            slider.style.left = -productWidth * num + 'px';
            num = -1;
        }

        indicator.forEach((d,i) => {
            d.classList.remove('active'); //active class 제거해주기 = default
        });
        if(num >= 0){
          indicator[num].classList.add('active'); //눌렀을 때 추가해주기
        }else{
            indicator[indicatorNum-1].classList.add('active'); //눌렀을 때 추가해주기 
        }

    }, 2000);
};

let sliderStop = function(){
    clearInterval(move);
}


sliderMove();

wrap.addEventListener('mouseenter', ()=>{
    sliderStop();
});

wrap.addEventListener('mouseleave', ()=> {
    sliderMove();
});

prevBtn.addEventListener('click', () => {
    num++;
    slider.style.left = -productWidth * num + 'px';

    if(num >= productNum-1) {
        slider.style.left = -productWidth * num + 'px';
        num = -1;
    }
    indicator.forEach((d,i) => {
        d.classList.remove('active'); //active class 제거해주기 = default
    });
    if(num >= 0){
      indicator[num].classList.add('active'); //눌렀을 때 추가해주기
    }else{
        indicator[indicatorNum-1].classList.add('active'); //눌렀을 때 추가해주기 
    }
});

nextBtn.addEventListener('click', () =>{
    num--;
    slider.style.left = -productWidth * num + 'px';

    if(num <= -1) {
        slider.style.left = -productWidth * num + 'px';
        num = productNum-1;
    }
    indicator.forEach((d,i) => {
        d.classList.remove('active'); //active class 제거해주기 = default
    });
    if(num >= 0){
      indicator[num].classList.add('active'); //눌렀을 때 추가해주기
    }else{
        indicator[indicatorNum-1].classList.add('active'); //눌렀을 때 추가해주기 
    }
}); // > 버튼 눌렀을 때

indicator.forEach(function(data, idx){


data.addEventListener('click', (e)=>{
    e.preventDefault();

    num = idx;
    slider.style.left = -productWidth * num + 'px';

    indicator.forEach((d) => {
        d.classList.remove('active');
    });
 
    data.classList.add('active');
});


});