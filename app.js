// 1. Sabse pehle variables define karein jo poore code mein chahiye
var main1 = document.getElementById('content');
var search = document.getElementById('search');
var categoryList = document.getElementById('category-list');
var allProducts = [];

// 2. Popup Setup aur Timeout
// window.addEventListener('DOMContentLoaded', () => {
//     const overlay = document.getElementById('popup-overlay');
//     const closeBtn = document.getElementById('close-btn');

//     setTimeout(() => {
//         if (overlay) overlay.style.display = 'flex';
//     }, 1000);

//     if (closeBtn) {
//         closeBtn.addEventListener('click', () => {
//             overlay.style.display = 'none';
//         });
//     }
// });

// 3. Fetch Products using separate API functions
function fetchProductsAPI() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            allProducts = data.products;
            renderCategoryList(data.products);
            data.products.forEach(product => renderProductCard(product));
        })
}

function fetchCartsAPI() {
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(data => {
            data.carts.forEach(cart => {
                cart.products.forEach(cartProduct => {
                    renderCartProductCard(cartProduct);
                });
            });
        })
}

function renderCategoryList(products) {
    if (!categoryList) return;
    categoryList.innerHTML = '';

    var categories = products.map(function (product) {
        return product.category;
    }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    var allItem = document.createElement('li');
    var allLink = document.createElement('a');
    allLink.href = '#';
    allLink.innerText = 'All';
    allLink.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveCategory(allLink);
        showProductsByCategory('all');
    });
    allItem.appendChild(allLink);
    categoryList.appendChild(allItem);

    categories.forEach(function (category) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = '#';
        link.innerText = category;
        link.addEventListener('click', function (event) {
            event.preventDefault();
            setActiveCategory(link);
            showProductsByCategory(category);
        });
        li.appendChild(link);
        categoryList.appendChild(li);
    });
}

function showProductsByCategory(category) {
    if (!main1) return;
    main1.innerHTML = '';

    if (category === 'all') {
        allProducts.forEach(function (product) {
            renderProductCard(product);
        });
        return;
    }

    allProducts.filter(function (product) {
        return product.category === category;
    }).forEach(function (product) {
        renderProductCard(product);
    });
}

function setActiveCategory(link) {
    if (!categoryList) return;
    var links = categoryList.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active-category');
    }
    link.classList.add('active-category');
}

// Fetch both APIs on page load
fetchProductsAPI();
fetchCartsAPI();

// 4. Render Products Function for full product API
function renderProductCard(product) {
    if (!product) return;

    var cattt = document.createElement('p')
    cattt.setAttribute('class', 'catlog')

    var divE1 = document.createElement('div')
    divE1.setAttribute('class', 'inner')

    var heading = document.createElement('h1')
    heading.setAttribute('class', 'heading1')

    var des = document.createElement('p')
    des.setAttribute('class', 'description')

    var img1 = document.createElement('img')
    img1.setAttribute('class', 'img1')

    var divE2 = document.createElement('div')
    divE2.setAttribute('class', 'PR')

    var pricing = document.createElement('p')
    pricing.setAttribute('class', 'price')

    var rating = document.createElement('p')
    rating.innerHTML = "Rating"

    var starsContainer = document.createElement('div')
    starsContainer.setAttribute('class', 'stars')

    var ratingValue = Math.round(product.rating || 0)
    for (var j = 1; j <= 5; j++) {
        var star = document.createElement('div')
        star.setAttribute('class', 'star')
        star.innerText = "★"
        star.style.color = j <= ratingValue ? "gold" : "lightgray"
        starsContainer.appendChild(star)
    }

    rating.appendChild(starsContainer)

    var company = document.createElement('p')
    company.setAttribute('class', 'company')

    var sku = document.createElement('p')
    sku.setAttribute('class', 'sku')

    var stock = document.createElement('p')
    stock.setAttribute('class', 'stock')

    var div3 = document.createElement('div')
    div3.setAttribute('class', 'div3')
    var btn1 = document.createElement('button')
    var btn2 = document.createElement('button')

    cattt.innerText = product.category || 'Product'
    heading.innerText = product.title || 'No title'
    des.innerText = product.description || ''
    img1.src = product.thumbnail || ''
    pricing.innerText = `$ ${product.price || 0}`
    company.innerText = `Company: ${product.brand || 'N/A'}`
    sku.innerText = `SKU: ${product.sku || 'N/A'}`
    stock.innerText = `Stock: ${product.stock || 0} Available in store`
    btn1.innerText = `Add to cart`
    btn2.innerText = `Buy now`

    main1.appendChild(divE1)
    divE1.appendChild(heading)
    divE1.appendChild(cattt)
    divE1.appendChild(des)
    divE1.appendChild(img1)
    divE1.appendChild(divE2)
    divE2.appendChild(pricing)
    divE2.appendChild(rating)
    divE1.appendChild(company)
    divE1.appendChild(sku)
    divE1.appendChild(stock)
    divE1.appendChild(div3)
    div3.appendChild(btn1)
    div3.appendChild(btn2)
}

// 5. Render Cart Product Function for cart API
function renderCartProductCard(cartProduct) {
    if (!cartProduct) return;

    var cattt = document.createElement('p')
    cattt.setAttribute('class', 'catlog')

    var divE1 = document.createElement('div')
    divE1.setAttribute('class', 'inner')

    var heading = document.createElement('h1')
    heading.setAttribute('class', 'heading1')

    var des = document.createElement('p')
    des.setAttribute('class', 'description')

    var img1 = document.createElement('img')
    img1.setAttribute('class', 'img1')

    var divE2 = document.createElement('div')
    divE2.setAttribute('class', 'PR')

    var pricing = document.createElement('p')
    pricing.setAttribute('class', 'price')

    var quantity = document.createElement('p')
    quantity.setAttribute('class', 'quantity')

    var total = document.createElement('p')
    total.setAttribute('class', 'total')

    var discount = document.createElement('p')
    discount.setAttribute('class', 'discount')

    var div3 = document.createElement('div')
    div3.setAttribute('class', 'div3')
    var btn1 = document.createElement('button')
    var btn2 = document.createElement('button')

    heading.innerText = cartProduct.title
    img1.src = cartProduct.thumbnail
    pricing.innerText = `$ ${cartProduct.price}`
    quantity.innerText = `Qty: ${cartProduct.quantity}`
    total.innerText = `Total: $ ${cartProduct.total}`
    discount.innerText = `Discount: ${cartProduct.discountPercentage}%`
    btn1.innerText = `Add to cart`
    btn2.innerText = `Buy now`

    main1.appendChild(divE1)
    divE1.appendChild(heading)
    divE1.appendChild(img1)
    divE1.appendChild(divE2)
    divE2.appendChild(pricing)
    divE1.appendChild(quantity)
    divE1.appendChild(total)
    divE1.appendChild(discount)
    divE1.appendChild(div3)
    div3.appendChild(btn1)
    div3.appendChild(btn2)
}

// 5. Search Logic
if (search) {
    search.addEventListener('input', function () {
        var value = search.value.toLowerCase();
        var allcards = document.getElementsByClassName('inner');

        for (var i = 0; i < allcards.length; i++) {
            var productName = document.getElementsByClassName('heading1')[i].innerText.toLowerCase();
            if (productName.indexOf(value) !== -1) {
                allcards[i].style.display = "block";
            } else {
                allcards[i].style.display = "none";
            }
        }
    });
}

