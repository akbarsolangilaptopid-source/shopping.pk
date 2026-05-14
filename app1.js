// acha ye batao settimeout kyun nahi chal raha, 
setTimeout(() => {
     var new1 = document.createElement('p')
 new1.setAttribute('class', 'newpara')

 new1.innerText = "Welcome back"

 main1.appendChild(new1)
}, 1000);





var main1 = document.getElementById('content')
var catt = document.getElementById('category')

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => showProucts(data));

function showProucts(items){
  var proArr = items.products;
for( i =0; i<proArr.length; i++){

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

  // rating ======
  var rating = document.createElement('p')
rating.innerHTML = "Rating";

var starsContainer = document.createElement('div');
starsContainer.setAttribute('class', 'stars');

var ratingValue = Math.round(proArr[i].rating);

for (var j = 1; j <= 5; j++) {
  var star = document.createElement('div');
  star.setAttribute('class', 'star');

  star.innerText = "★";

  if (j <= ratingValue) {
    star.style.color = "gold";
  } else {
    star.style.color = "lightgray";
  }

  starsContainer.appendChild(star);
}

rating.appendChild(starsContainer);

// Rating code end =====================

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



  // .innertext

  cattt.innerText = `${proArr[i].category}`
  // console.log( cattt)

  heading.innerText = `${proArr[i].title}`
  des.innerText = `${proArr[i].description}`
  img1.src = `${proArr[i].thumbnail}`
  pricing.innerText = `$ ${proArr[i].price}`
  company.innerText = `Company: ${proArr[i].brand}`
  sku.innerText = `SKU: ${proArr[i].sku}`
  stock.innerText = `Stock: ${proArr[i].stock} Available in store`
  btn1.innerText = `Add to cart`
  btn2.innerText = `Buy now`


// .appendChild

main1.appendChild(divE1)
divE1.appendChild(heading)
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

}}



// SEARCH INPUT
var search = document.getElementById('search')

search.addEventListener('input', function () {

  var value = search.value.toLowerCase()

  var allcards = document.getElementsByClassName('inner')

  for (var i = 0; i < allcards.length; i++) {

    var productName = document.getElementsByClassName('heading1')[i].innerText.toLowerCase()

    if (productName.indexOf(value) !== -1) {
      allcards[i].style.display = "block"
    }

    else {
      allcards[i].style.display = "none"
    }
  }

})