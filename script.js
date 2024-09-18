let carouselObjects = [
    {
        src: 'img/carousel_1.png',
        alt: 'Carousel image',
        link: 'index.html'
    },

    {
        src: 'img/carousel_2.png',
        alt: 'Carousel image',
        link: 'index.html'
    },

    {
        src: 'img/carousel_3.png',
        alt: 'Carousel image',
        link: 'index.html'
    },

    {
        src: 'img/carousel_4.png',
        alt: 'Carousel image',
        link: 'index.html'
    },

    {
        src: 'img/carousel_5.png',
        alt: 'Carousel image',
        link: 'index.html'
    }
]

for (let i = 0; i < carouselObjects.length; i++) {
    let newObject = document.createElement('a')
    let newImage = document.createElement('img')
    newObject.href = carouselObjects[i].link
    newObject.target = '_blank'
    newObject.classList.add('carousel-object')
    newImage.src = carouselObjects[i].src
    newImage.alt = carouselObjects[i].alt
    newObject.appendChild(newImage)
    document.querySelector('.carousel').appendChild(newObject)
}

let carouselInterval = ()=>{
    setInterval(() => {
        let currentRemove = document.querySelectorAll('.carousel-object')[0]
        currentRemove.style.marginLeft = '-1200px'
        setTimeout(()=>{
            document.querySelector('.carousel').removeChild(currentRemove)
            document.querySelector('.carousel').appendChild(currentRemove)
            currentRemove.style.marginLeft = '0px'
        }, 1000)
    }, 8000)
}
carouselInterval()


document.querySelector('.carousel-arrow-left').addEventListener('click', () => {
    let currentRemove = document.querySelectorAll('.carousel-object')[document.querySelectorAll('.carousel-object').length - 1];
    document.querySelector('.carousel').removeChild(currentRemove);
    currentRemove.style.marginLeft = '-1200px';
    document.querySelector('.carousel').insertBefore(currentRemove, document.querySelectorAll('.carousel-object')[0]);
    
    setTimeout(() => {
        currentRemove.style.marginLeft = '0px';
    }, 100);
});

document.querySelector('.carousel-arrow-right').addEventListener('click', () =>{
    let currentRemove = document.querySelectorAll('.carousel-object')[0]
    currentRemove.style.marginLeft = '-1200px'
    setTimeout(()=>{
        document.querySelector('.carousel').removeChild(currentRemove)
        document.querySelector('.carousel').appendChild(currentRemove)
        currentRemove.style.marginLeft = '0px'
    }, 1000)
})