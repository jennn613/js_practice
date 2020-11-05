const wrap = document.querySelector('.product'); //div
wrap.style.overflow = 'hidden';

const slider = document.querySelector('.product_list'); //ul
const products = document.querySelectorAll ('.product_list_item'); //li
let productWidth = products[0].offsetWidth; // 박스 하나 가로 받아오기

let productsNum = products.length; //박스 개수 받아오기
let productView = 1; // 보일 박스

const indicator = document.querySelectorAll('.indicator_list_item'); //인디케이터 li 받아오기
// console.log(indicator)

for(let i=0; i<productView; i++) {
    copyProduct = products[productsNum-(i+1)].cloneNode(true);
    slider.prepend(copyProduct);
} // 마지막 박스 복사해서 앞에 붙이기

const newProduct = document.querySelectorAll('.product_list_item'); // 원래 박스 + 클론된 박스
let newProductNum = newProduct.length; // 원래 박스 + 클론된 박스 개수


slider.style.width = productWidth * newProductNum + 'px'; //slider 길이 늘이기
slider.style.marginLeft = -productWidth * productView + 'px'; // 0을 시작 위치로


let indicatorNum = indicator.length; // 인디케이터 버튼 개수 받아옴
// console.log(indicatorNum);

let indiNum = 0; // 인디케이터 배열 받을 변수 설정

indicator.forEach(function(data,idx){
    
    data.addEventListener('click',(e)=>{
        e.preventDefault(); //이벤트 초기화 시켜주기
  
        indiNum = idx;
        slider.style.left = -productWidth * indiNum + 'px'; 
        //버튼 누를 때마다 idx번 째 박스 보이기

        indicator.forEach((d,i) => {
            d.classList.remove('clicked'); //clicked class 제거해주기 = default
        });

        data.classList.add('clicked'); //눌렀을 때 추가해주기
    });
});



//자동 움직임 설정
slider.style.position = 'relative';

let move;

let sliderMove = function() {
    move = setInterval(() => {
        indiNum+=1;
        slider.style.left = -productWidth * indiNum + 'px';


        if(indiNum >= productsNum - 1) {
            slider.style.left = -productWidth * indiNum + 'px';
            indiNum=-1;
        };
        indicator.forEach((d,i) => {
            d.classList.remove('clicked'); //clicked class 제거해주기 = default
        });
        if(indiNum >= 0){
          indicator[indiNum].classList.add('clicked'); //눌렀을 때 추가해주기
        }else{
            indicator[indicatorNum-1].classList.add('clicked'); //눌렀을 때 추가해주기 
        }



    }, 2400);
};

sliderMove();

let sliderStop = function(){
    clearInterval(move);
};

slider.addEventListener('mouseenter', ()=> {
    sliderStop();
});

slider.addEventListener('mouseleave', ()=> {
    sliderMove();
});


