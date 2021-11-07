const imgList = [
    {
        imgSrc: 'images/img1.jpg',
        textH1: 'Pierwszy teskt',
    },
    {
        imgSrc: 'images/img2.jpg',
        textH1: 'Drugi teskt',
    },
    {
        imgSrc: 'images/img3.jpg',
        textH1: 'Trzeci teskt',
    },
]

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


const time = 1000;
let indexActive = 0;

function changeDots(){
    const indexDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[indexDot].classList.remove('active');
    dots[indexActive].classList.add('active');
}



function changeSlider(){
    indexActive++;
    if(indexActive === imgList.length){
        indexActive = 0;
    }
    img.src = imgList[indexActive].imgSrc;
    h1.textContent = imgList[indexActive].textH1;
    changeDots();
}
let indexInterval = setInterval(changeSlider, time);

function keyChangeSlider(e){
    console.log(e.keyCode);
    clearInterval(indexInterval);
    if(e.keyCode == 37 || e.keyCode == 39){
        e.keyCode == 37 ? indexActive-- : indexActive++;
    }
    if(indexActive === imgList.length){
        indexActive = 0;
    }else if(indexActive < 0){
        indexActive = imgList.length-1;
    }
    img.src = imgList[indexActive].imgSrc;
    h1.textContent = imgList[indexActive].textH1;
    changeDots();
    indexInterval = setInterval(changeSlider, time);
}



window.addEventListener('keydown', keyChangeSlider);