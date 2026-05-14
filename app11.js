// 1. Variables Definition
var main1 = document.getElementById('content');
var search = document.getElementById('search');

// 2. Fetch Calls (Dono APIs ke liye alag functions)
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log("Products API Load Hogayi"); // Debugging
        showProucts(data.products); 
    })
    .catch(err => console.error("Products Fetch Error:", err));

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        console.log("Carts API Load Hogayi"); // Debugging
        data.carts.forEach(cart => {
            showCartItems(cart.products); 
        });
    })
    .catch(err => console.error("Carts Fetch Error:", err));

// 3. Pehla Function: Products API ke liye
function showProucts(proArr) {
    if (!main1 || !proArr) return;

    for (var i = 0; i < proArr.length; i++) {
        createCard(proArr[i]); // Card banane wala kaam common rakha hai taake code ganda na ho
    }
}

// 4. Doosra Function: Carts API ke liye (Same name mana hai toh name thora change karna para)
function showCartItems(cartArr) {
    if (!main1 || !cartArr) return;

    for (var i = 0; i < cartArr.length; i++) {
        createCard(cartArr[i]);
    }
}

// 5. Card Banane ka Common Logic (Dono functions isay use karenge)
function createCard(item) {
    var divE1 = document.createElement('div');
    divE1.setAttribute('class', 'inner');

    // Heading & Image
    var heading = document.createElement('h1');
    heading.setAttribute('class', 'heading1');
    heading.innerText = item.title;

    var img1 = document.createElement('img');
    img1.setAttribute('class', 'img1');
    // Cart API mein thumbnail nahi hota, isliye placeholder lagaya hai
    img1.src = item.thumbnail || "https://via.placeholder.com/150"; 

    // Pricing & Rating Container
    var divE2 = document.createElement('div');
    divE2.setAttribute('class', 'PR');
    var pricing = document.createElement('p');
    pricing.setAttribute('class', 'price');
    pricing.innerText = `$ ${item.price}`;

    // Rating Logic
    var starsContainer = document.createElement('div');
    starsContainer.setAttribute('class', 'stars');
    var ratingValue = Math.round(item.rating || 0);
    for (var j = 1; j <= 5; j++) {
        var star = document.createElement('div');
        star.innerText = "★";
        star.style.color = (j <= ratingValue) ? "gold" : "lightgray";
        starsContainer.appendChild(star);
    }

    
    // Extra Data (Company, SKU, Stock)
    var company = document.createElement('p');
    company.innerText = `Company: ${item.brand || "Generic"}`;
    var sku = document.createElement('p');
    sku.innerText = `SKU: ${item.sku || "N/A"}`;
    var stock = document.createElement('p');
    stock.innerText = `Stock: ${item.stock || "In Stock"}`;

    // Buttons
    var div3 = document.createElement('div');
    div3.setAttribute('class', 'div3');
    var btn1 = document.createElement('button');
    btn1.innerText = "Add to cart";
    var btn2 = document.createElement('button');
    btn2.innerText = "Buy now";
    div3.append(btn1, btn2);

    // Final Appending
    divE1.append(heading, img1, divE2, company, sku, stock, div3);
    divE2.append(pricing, starsContainer);
    main1.appendChild(divE1);
}