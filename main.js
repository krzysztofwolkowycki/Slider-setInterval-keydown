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
const time = 2000;
let indexActive = 0;

function changeSlider(){
    indexActive++;
    if(indexActive === imgList.length){
        indexActive = 0;
    }
    img.src = imgList[indexActive].imgSrc;
    h1.textContent = imgList[indexActive].textH1;
}


setInterval(changeSlider, time);