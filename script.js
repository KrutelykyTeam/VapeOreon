// Механизм карусели начало

let carouselObjects = [
    {
        src: 'img/carousel_1.png',
        alt: 'Carousel image',
        link: '404.html'
    },

    {
        src: 'img/carousel_2.png',
        alt: 'Carousel image',
        link: '404.html'
    },

    {
        src: 'img/carousel_3.png',
        alt: 'Carousel image',
        link: '404.html'
    },

    {
        src: 'img/carousel_4.png',
        alt: 'Carousel image',
        link: '404.html'
    },

    {
        src: 'img/carousel_5.png',
        alt: 'Carousel image',
        link: '404.html'
    }
]

for (let i = 0; i < carouselObjects.length; i++) {
    let newObject = document.createElement('a')
    let newImage = document.createElement('img')
    newObject.href = carouselObjects[i].link
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

document.querySelector('.carousel').addEventListener('mouseenter', ()=>{
    document.querySelector('.carousel-arrow-left').style.opacity = 1
    document.querySelector('.carousel-arrow-right').style.opacity = 1
})

document.querySelector('.carousel').addEventListener('mouseleave', ()=>{
    document.querySelector('.carousel-arrow-left').style.opacity = 0
    document.querySelector('.carousel-arrow-right').style.opacity = 0
})

// Механизм карусели конец

// =================================================================================================

// Механизм популярных товаров начало

let offers = [
    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 750,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 800,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 850,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 900,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 950,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 1000,
        link: '404.html'
    },

    {
        src: 'img/test_offer.webp',
        name: 'Стартовый набор Vaporesso XROS 4 mini (Original)',
        price: 1050,
        link: '404.html'
    }
]

for (let i = 0; i < offers.length; i++) {
    let newObject = document.createElement('div')
    newObject.classList.add('offers-carousel-item')

    // Обработчик клика на саму карточку
    newObject.addEventListener('click', ()=>{
        window.location.href = offers[i].link
    })

    let newImage = document.createElement('img')
    newImage.src = offers[i].src
    newImage.alt = offers[i].name

    let newName = document.createElement('h3')
    newName.textContent = offers[i].name

    let objectFlexbox = document.createElement('div')
    objectFlexbox.classList.add('flexbox-sp-btw')

    let newPrice = document.createElement('h2')
    newPrice.textContent = `${offers[i].price} грн`

    let newButton = document.createElement('button')
    let buttonImg = document.createElement('img')
    buttonImg.src = 'img/cart.svg'
    newButton.appendChild(buttonImg)

    // Остановка всплытия события для кнопки
    newButton.addEventListener('click', (event)=>{
        event.stopPropagation()
        // Здесь можно добавить логику для кнопки
    })

    newObject.appendChild(newImage)
    newObject.appendChild(newName)
    objectFlexbox.appendChild(newPrice)
    objectFlexbox.appendChild(newButton)
    newObject.appendChild(objectFlexbox)

    document.querySelector('.offers-carousel').appendChild(newObject)
}



document.querySelector('.offers-arrow-left').addEventListener('click', () => {
    let currentRemove = document.querySelectorAll('.offers-carousel-item')[document.querySelectorAll('.offers-carousel-item').length - 1];
    document.querySelector('.offers-carousel').removeChild(currentRemove);
    currentRemove.style.marginLeft = '-300px';
    document.querySelector('.offers-carousel').insertBefore(currentRemove, document.querySelectorAll('.offers-carousel-item')[0]);
    
    setTimeout(() => {
        currentRemove.style.marginLeft = '0px';
    }, 100);
});

document.querySelector('.offers-arrow-right').addEventListener('click', () =>{
    let currentRemove1 = document.querySelectorAll('.offers-carousel-item')[0]
    currentRemove1.style.marginLeft = '-300px'
    setTimeout(()=>{
        document.querySelector('.offers-carousel').removeChild(currentRemove1)
        document.querySelector('.offers-carousel').appendChild(currentRemove1)
        currentRemove1.style.marginLeft = '0px'
    }, 1000)
})

// Механизм популярных товаров конец





// Адаптив старт

function checkWidth() {
    let offersCards = document.querySelectorAll('.offers-carousel-item')
    if (window.innerWidth <= 950 && window.innerWidth >= 601) {
        offersCards[0].style.border = 'none'
        offersCards[0].style.borderRight = '1px solid #d0d0d0'
        for (let i = 0; i < offersCards.length; i++) {
            if(i == 1){
                document.querySelectorAll('.offers-carousel-item')[i].style.border = 'none'
            }else if(i == offersCards.length - 1 && !isEven(offersCards.length)){
                offersCards[i].style.border = 'none'
                offersCards[i - 1].style.borderBottom = '1px solid #d0d0d0'
                offersCards[i - 2].style.borderBottom = '1px solid #d0d0d0'
            }else if(isEven(i) && i != 1 && i != 0 && i != document.querySelectorAll('.offers-carousel-item').length) {
                offersCards[i].style.border = 'none'
                offersCards[i].style.borderRight = '1px solid #d0d0d0'
                offersCards[i].style.borderTop = '1px solid #d0d0d0'
            }else if(!isEven(i) && i != 1 && i != 0 && i != document.querySelectorAll('.offers-carousel-item').length){
                offersCards[i].style.border = 'none'
                offersCards[i].style.borderTop = '1px solid #d0d0d0'
            }
        }
    }else if(window.innerWidth <= 600){
        for (let i = 0; i < offersCards.length; i++) {
            offersCards[i].style.border = 'none'
            offersCards[i].style.borderBottom = '1px solid #d0d0d0'
            offersCards[offersCards.length - 1].style.borderBottom = 'none'
        }
    }
}
function isEven(num) {
    return num % 2 === 0;
}

window.addEventListener('resize', checkWidth);
checkWidth();

// Адаптив конец