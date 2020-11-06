const wrap = document.querySelector('#wrap'); //전체 감싼 박스
const title = wrap.querySelectorAll('dt'); //제목 박스
const icon = wrap.querySelectorAll('.menu_title_icon'); //제목 박스의 아이콘

const contents = wrap.querySelectorAll('dd'); //내용 박스

// console.log(wrap)
// console.log(title)
// console.log(icon)
// console.log(contents)

icon.forEach((data)=>{
    data.classList.remove('rotate'); 
}); //rotate 클래스 초기화


title.forEach((box, idx) => {
    let num = idx;


    box.addEventListener('click', ()=> {
       
        title.forEach((dt) => {
            dt.classList.remove('clicked');
        })

        title[num].classList.add('clicked');
        
contents.forEach((dd) => {

    dd.classList.remove('show');
    setTimeout(function(){ dd.classList.remove('block');}, 100);
    contents[num].classList.add('show');
    setTimeout(function(){ contents[num].classList.add('block');}, 100);
  
});

icon.forEach((dtIcon) => {
    dtIcon.classList.remove('rotate');
    icon[num].classList.add('rotate');
});
    });

});

