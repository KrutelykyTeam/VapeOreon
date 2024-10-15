const productPreview = document.querySelector('.product-preview')
const productImgList = document.querySelector('.product-imglist')
const productName = document.querySelector('#product-name')
const productArticle = document.querySelector('#product-article')
const productBrand = document.querySelector('#brand')
const isAvailable = document.querySelector('#is-product-available')
const productPrice = document.querySelector('#price')
const productDescription = {
    header: document.querySelector('#productDesc_header'),
    content: document.querySelector('#productDesc_main')
}
const productSelectionList = {
    header: document.querySelector('#selection_header'),
    content: document.querySelector('#selection_list')
}
const miniProduct = {
    preview: document.querySelector('#miniproduct-preview'),
    name: document.querySelector('#miniproduct-name')
}


let product = {
    name: 'Рідина Elf Liq 30 мл на сольовому нікотині',

    images: [
        // не больше 6!!!
        {src: 'img/bigproduct-test-1.jpg', alt:'testimage1'},
        {src: 'img/bigproduct-test-2.jpg', alt:'testimage2'},
        {src: 'img/bigproduct-test-3.jpg', alt:'testimage3'},
        {src: 'img/bigproduct-test-1.jpg', alt:'testimage1'},
        {src: 'img/bigproduct-test-2.jpg', alt:'testimage2'},
        {src: 'img/bigproduct-test-3.jpg', alt:'testimage3'}
    ],

    article: 123456,

    brand: {name: 'Elf Liq', url: '404.html'},

    price: 135,

    offers: [
        // В offers должно быть не более 2 разделов. В разделе первый элемент - строка, отвечающая за название. Внимательно в цикле подгрузки, ведь a = 1
        [
            // Желательно сильно длинные вставлять в конец
            'Смак',
            {name: 'Pink Lemonade', url: '404.html'},
            {name: 'Watermelon', url: '404.html'},
            {name: 'Cotton Candy Ice', url: '404.html'},
            {name: 'Blue Razz Lemonade', url: '404.html'},
            {name: 'Cream Tobacco', url: '404.html'},
            {name: 'Blueberry', url: '404.html'},
            {name: 'Apple Peach', url: '404.html'},
            {name: 'Spearmint', url: '404.html'},
            {name: 'Kivi Passionfruit Guava', url: '404.html'},
            {name: 'Blueberry Sour Paspberry', url: '404.html'}
        ],

        [
            // Желательно сильно длинные вставлять в конец
            'Міцність',
            {name: '30 мг', url: '404.html'},
            {name: '50 мг', url: '404.html'},
            {name: '65 мг', url: '404.html'},
        ]
    ],

    description: {
        header: 'Опис товару',
        content: `Elf Liq – це нова сольова рідина виняткової якості від популярного виробника ElfBar. Вона створена на основі високоякісних інгредієнтів, що гарантує надзвичайно приємний і насичений смак. Він розроблений таким чином, щоб бути максимально схожим на смак одноразових пристроїв цієї ж компанії, проте не повністю ідентичним, що додає рідині унікальності. Серед важливих характеристик Elf Liq є не лише ароматизатори, але й її економічність у використанні, а також екологічна безпечність. Флакон, в якому постачається рідина, має об’єм 30 мл і повністю придатний для повторного використання – його можна розплавити і застосувати для інших потреб, що сприяє збереженню навколишнього середовища. Сольовий нікотин, що входить до складу рідини, відомий своєю м'якою дією на горло і тим, що значно швидше насичує організм, порівняно з традиційним нікотином. Elf Liq має збалансоване співвідношення VG/PG 50/50, що робить її ідеальною для пристроїв із низькою потужністю та pod-систем. Доступна міцність нікотину становить 30 або 50 мг, що дозволяє підібрати рідину відповідно до індивідуальних вподобань користувача.`
    },

    selection: {
        header: 'Вибір рідини',
        options: [
            'Apple Peach – стигле зелене яблуко, яке ідеально поєднується з соковитим персиком.',
            'Blueberry – найсолодша стигла чорниця, яка точно сподобається кожному.',
            'Blueberry Sour Raspberry – мікс кислої чорниці та солодкої малини.',
            'Pink Lemonade – освіжаючий малиновий лимонад із легкою кислинкою.',
            'Cotton Candy Ice – улюблений смак солодкої вати.',
            'Cream Tobacco – фірмове поєднання м’якого тютюнового смаку із вершками.',
            'Elf bull Ice – освіжаючий енергетик із льодом, який точно вас збадьорить.',
            'Kiwi Passion Fruit Guava – екзотичний фруктовий мікс стиглого ківі, гуави і маракуї',
            'Pink Grapefruit – насичений рожевий грейпфрут для поціновувачів кисленьких цитрусових смаків.',
            'Watermelon – улюблений кавуновий смак, що асоціюється із сонячними літніми днями.'
        ]
    },

    characteristics: [
        // Желательно добавлять от 2 и больше
        {prop: `Вид нікотину`, value: `Сольовий`},
        {prop: `Виробник`, value: `Elf Liq`},
        {prop: `Група смаку`, value: `Фруктові, Цитрусові`},
        {prop: `Країна виробника`, value: `Китай`},
        {prop: `Міцність нікотину`, value: `30 мг`},
        {prop: `Смак`, value: `Pink Grapefruit`},
        {prop: `Об'єм`, value: `30 мл`},
        {prop: `VG/PG`, value: `50/50`}
    ]
}

// Подгрузка товара старт

productName.innerHTML = product.name // Подгрузка названия

for (let i = 0; i < product.images.length; i++) {
    let newImage = document.createElement('img')
    newImage.src = product.images[i].src
    newImage.alt = product.images[i].alt
    newImage.classList.add('product-imglist-item')
    productImgList.appendChild(newImage)
    newImage.addEventListener('click', (e)=>{
        productPreview.src = newImage.src
        productPreview.alt = newImage.alt
    })
} // Подгрузка всех картинок

productPreview.src = product.images[0].src // Присвоение главной картинке значений первой в списке
productPreview.alt = product.images[0].alt // ↑↑↑

miniProduct.preview.src = product.images[0].src // Присвоение мини картинке значений первой в списке
miniProduct.preview.alt = product.images[0].alt // ↑↑↑

productArticle.innerHTML = product.article // Подгрузка артикула

productBrand.innerHTML = product.brand.name // Подгрузка названия и ссылки на бренд
productBrand.href = product.brand.url       // ↑↑↑  

productPrice.innerHTML = product.price + ' грн' // Подгрузка цены

for (let i = 0; i < product.offers.length; i++) {
    let newOfferBox = document.createElement('div')
    newOfferBox.classList.add('flexbox-column')
    newOfferBox.classList.add('product-info-offers-container')

    let offerHeader = document.createElement('h2')
    offerHeader.innerHTML = product.offers[i][0] //Присваиваем заголовок
    newOfferBox.appendChild(offerHeader)

    let offerContainer = document.createElement('div')
    offerContainer.classList.add('product-info-offers')
    newOfferBox.appendChild(offerContainer)

    for (let a = 1; a < product.offers[i].length; a++) {
        let offerItem = document.createElement('a')
        offerItem.innerHTML = product.offers[i][a].name
        offerItem.href = product.offers[i][a].url
        offerContainer.appendChild(offerItem)
    }

    document.querySelector('.product-info').appendChild(newOfferBox)

    const buyContainer = document.querySelector('.buy-container');
    document.querySelector('.product-info').appendChild(buyContainer);

} // Подгрузка ассортимента

productDescription.header.innerHTML = product.description.header   // Подгрузка описания
productDescription.content.innerHTML = product.description.content // ↑↑↑

// Подгрузка описания ассортимента старт
productSelectionList.header.innerHTML = product.selection.header

for (let i = 0; i < product.selection.options.length; i++) {
    let newOption = document.createElement('li')
    newOption.innerHTML = product.selection.options[i]
    productSelectionList.content.appendChild(newOption)

}
// Подгрузка описания ассортимента конец


for (let i = 0; i < product.characteristics.length; i++) {
    const flexbox = document.createElement('div');
    flexbox.classList.add('flexbox');

    const prop = document.createElement('div');
    prop.classList.add('characs_prop');
    prop.innerHTML = product.characteristics[i].prop;
    flexbox.appendChild(prop)

    const value = document.createElement('div');
    value.classList.add('characs_value');
    value.innerHTML = product.characteristics[i].value;
    flexbox.appendChild(value)

    document.querySelector('.characteristics').appendChild(flexbox)
} // Подгрузка характеристик 



// Подгрузка товара конец