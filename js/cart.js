let cart = {}; // Моя корзина

document.addEventListener('DOMContentLoaded', function () {
    loadGoods();
    checkCart ();
    showCart();
});

function loadGoods() {
    fetch('../js/games.json')
        .then((response) => response.json())
        .then((data) => {
            const searchContainer = document.getElementById('search');
            let out = '';
            for (const key in data) {
                out += '<li class="search-cart">';
                    out += `<img src="${data[key].image}">`;
                    out += `<div class="search-content-cart">`
                        out += `<a href="${data[key].link}">${data[key].name}</a>`;
                        out += `<p> ${data[key].price} руб.</p>`;
                    out += `</div>`
                    out += `<button class="add-cart" data-art="${key}">+</button>`;
                out += '</li>';
            }
            searchContainer.innerHTML = out;
            
            const addCartButtons = document.querySelectorAll('button.add-cart');
            addCartButtons.forEach((button) => {
                button.addEventListener('click', addToCart);
            });
            
        });
}


function addToCart() {
    const articul = this.getAttribute('data-art');
    if (cart[articul] !== undefined) {
        
    } else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart' , JSON.stringify(cart));
    

    showCart();
}

function checkCart () {
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showCart(){
        fetch('../js/games.json')
            .then((response) => response.json())
            .then((data) => {
                const goods = data;
                // console.log(goods)
                let out = '';
                
                const CartInHTML = document.getElementById('cart')
                
                for(const item in cart ){
                    out += `<li class="goods-cart">`
                        out += `<img src="${goods[item].image}">`;
                        out += `<div class="name-block-goods">`
                            out += `<a href="${goods[item].link}" class="goods-name">${goods[item].name}</a>`;
                        out += `</div>`
                        out += `<div class="last-block-goods">`
                            out += `<p> ${goods[item].price} руб.</p>`;
                            out += `<button class="removeCart" data-art="${item}">Удалить</button>`
                        out += `</div>`
                    out += `</li>`

                    
                }

                CartInHTML.innerHTML = out;
                const removeCart = document.querySelectorAll('button.removeCart');
                removeCart.forEach((button) =>{
                    button.addEventListener('click', DeleteThisProduct);
                })


                const totalPrice = document.querySelector('#totalPrice');
                if( Object.keys(cart).length === 0){
                    totalPrice.textContent = 'Нет ничего'
                }else{
                    let total = 0;
                        for (const item in cart) {
                            total += cart[item] * goods[item].price;
                        }

                    totalPrice.textContent = ` ${total} руб.`;
                }
               
                const KolVo = document.querySelector('.cart-summa sup');
                KolVo.textContent = Object.keys(cart).length;
                

        });
        
}

function DeleteThisProduct(){
    const articul = this.getAttribute('data-art');
    delete cart[articul]
    localStorage.setItem('cart' , JSON.stringify(cart));
    

    showCart();
}


const deleteFullCart = document.getElementById('deleteFullCart');
deleteFullCart.addEventListener('click', clearCart);

function clearCart(){
    cart = {};
    localStorage.setItem('cart' , JSON.stringify(cart));
    showCart();
    const CartInHTML = document.getElementById('cart');
    CartInHTML.innerHTML = '';
}

function openTabmedia(tabId) {
    // Скрыть все вкладки
    const tabsMedia = document.querySelectorAll('.tab-content-media');
    tabsMedia.forEach(function(tab) {
        tab.style.display = 'none';
    });
    // Отобразить выбранную вкладку
    document.getElementById(tabId).style.display = 'block';  
};
const btnTabmedia = document.querySelectorAll('.tab-button-media');
btnTabmedia.forEach(function(elem){
    elem.addEventListener('click',()=>{
        const activeTabmedia = document.querySelector('.tab-button-media.active');
        if (activeTabmedia) {
            activeTabmedia.classList.remove('active');
        }

        
        requestAnimationFrame(() => {
            elem.classList.add('active');
            
        });
    })
});
const fullScrean = document.getElementById('menu_toggle');
const Header = document.getElementById('header');
const checkboxed = document.getElementById('checkboxed');
const addClassfromHeader = window.matchMedia("(max-width: 715px)");

function kakjeyaustal() {
    if (addClassfromHeader.matches) {
        Header.classList.add('ne-checked');
    } else {
        Header.classList.remove('ne-checked');
    }
}
kakjeyaustal();
addClassfromHeader.addListener(kakjeyaustal);

fullScrean.addEventListener("change", function() {
    if (fullScrean.checked) {
        Header.classList.add('ne-checked');
    } else {
        Header.classList.remove('ne-checked');
    }
});

const category = document.querySelector('#category-drop-block');
const downBlock = document.querySelector('.drop-down-block-navigation');

function handleCategoryMouseEnter() {
downBlock.classList.add('droppeds');
if (downBlock.classList.contains('lifts')) {
downBlock.classList.remove('lifts');
}
}

function handleCategoryMouseOut() {
if (downBlock.classList.contains('droppeds')) {
downBlock.classList.remove('droppeds');
}
downBlock.classList.add('lifts');
}

function handleDownBlockMouseOver() {
downBlock.classList.add('droppeds');
if (downBlock.classList.contains('lifts')) {
downBlock.classList.remove('lifts');
}
}

function handleDownBlockMouseOut() {
if (downBlock.classList.contains('droppeds')) {
downBlock.classList.remove('droppeds');
}
downBlock.classList.add('lifts');
}

function addEventListeners() {
category.addEventListener('mouseenter', handleCategoryMouseEnter);
category.addEventListener('mouseout', handleCategoryMouseOut);
downBlock.addEventListener('mouseover', handleDownBlockMouseOver);
downBlock.addEventListener('mouseout', handleDownBlockMouseOut);
}

function removeEventListeners() {
category.removeEventListener('mouseenter', handleCategoryMouseEnter);
category.removeEventListener('mouseout', handleCategoryMouseOut);
downBlock.removeEventListener('mouseover', handleDownBlockMouseOver);
downBlock.removeEventListener('mouseout', handleDownBlockMouseOut);
}

function checkWindowWidth() {
if (window.innerWidth >= 924 && window.innerWidth <= 2000) {
addEventListeners();
} else {
removeEventListeners();
}
}

// Вызовите функцию checkWindowWidth, чтобы установить обработчики событий
checkWindowWidth();

// Добавьте обработчик события изменения размера окна
window.addEventListener('resize', checkWindowWidth);



const downBlockMedia = document.querySelector('#dropDown'); 


category.addEventListener('click',() =>{
if(downBlockMedia.classList.contains("animate-slide-up")){
downBlockMedia.classList.add("animate-slide-down");
downBlockMedia.classList.remove("animate-slide-up");
}else {
downBlockMedia.classList.remove("animate-slide-down");
downBlockMedia.classList.add("animate-slide-up");
}

})
const searchGames = document.getElementById('store_nav_search_term');
const searchList = document.querySelectorAll('.search-list')

searchGames.oninput = function () {
  const valueList = this.value.trim();

  if (valueList) {
      searchList.forEach((elem) => {
          if (elem.innerText.toLowerCase().includes(valueList.toLowerCase())) {
              elem.classList.remove('hide-search');
          } else {
              elem.classList.add('hide-search');
          };
      });
  } else {
      searchList.forEach((elem) => {
          elem.classList.add('hide-search');
      });
  };
};

searchList.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
        requestAnimationFrame(() => {
            elem.classList.add('hovered');
        });
        
    });

    elem.addEventListener('mouseout', () => {
        requestAnimationFrame(() => {
            elem.classList.remove('hovered');
        });
        
    });
});





const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', handleSearch);
function handleSearch() {
    
    const query = searchInput.value.toLowerCase(); // Преобразование запроса в нижний регистр для удобства сравнения

    const searchResults = document.querySelectorAll('.search-cart');
    
    searchResults.forEach((result) => {
        const productName = result.querySelector('a').textContent.toLowerCase();

        if (productName.includes(query)) {
            result.style.display = 'flex'; // Показать товар, если имя содержит запрос
        } else {
            result.style.display = 'none'; // Скрыть товар, если имя не содержит запрос
        }
    });
}
