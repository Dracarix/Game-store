

document.addEventListener('DOMContentLoaded', function(){
    loadCategories();
    checkCart();
    
})


const categoriesList = document.getElementById('list-category');
            function loadCategories(){
                fetch('../js/games.json')
                    .then((response) => response.json())
                    .then((data) =>{
                        
                        const category = categoriesList.getAttribute('data-category')
                        let out = '';
                        for(const key in data){
                            if(data[key].categories.includes(category)){
                                out += '<li class="category-elem">';
                                    out += `<div class="link-img-category">`;
                                        out += `<a class="div-img-category" href="${data[key].link}">`;
                                            out += `<img src="${data[key].image_mini}">`;
                                            out += `<video autoplay loop muted preload="auto">`;
                                                out += `<source src="${data[key].video}" type="video/webm">`;
                                            out += `</video>`;
                                        out += `</a>`;
                                    out += `</div>`;
                                    out += `<div class="content-list-category">`;
                                    out += `<span>${data[key].name}</span>`;
                                    out += `<div class="platform-category">`;
                                    if (data[key].windows) {
                                        out += `<div class="platform-img windows"><img src="../images/windows.png" alt=""></div>`;
                                        if (data[key].macOS) {
                                            out += `<div class="platform-img macOS"><img src="../images/mac os.png" alt=""></div>`;
                                            if (data[key].linux) {
                                                out += `<div class="platform-img linux none"><img src="../images/linux.png" alt=""></div>`;
                                            }
                                        }
                                    }
                                    out += `</div>`;
                                    out += `</div>`;
                                    out += `<div class="search-content-category">`;
                                    if (data[key].price !== undefined) {
                                        out += `<p>${data[key].price} руб. </p>`;
                                        out += `<a class="add-cart-shop" data-art="${key}" href="../shop-link/basket.html">В корзину</a>`;
                                    } else {
                                        out += `<p>${data[key].FreeOrAnons} </p>`;
                                        out += `<a class="add-cart-shop" data-art="${key}" href="#">Играть</a>`;
                                    }
                                    out += `</div>`;
                                out += '</li>';
                                
                             }
                        }
                        categoriesList.innerHTML = out;
                        const categoryElem = document.querySelectorAll('.category-elem');
                        categoryElem.forEach((item)=> {
                            item.addEventListener('mouseover', () => {
                                requestAnimationFrame(()=>{
                                    item.classList.add('scale');
                                });
                                item.addEventListener('mouseout', ()=>{
                                    requestAnimationFrame(()=>{
                                        item.classList.remove('scale');
                                    })
                                    
                                });
                            });
                        });
                        const addCartLinkShop = document.querySelectorAll('a.add-cart-shop');
                        addCartLinkShop.forEach((item) => {
                            item.addEventListener('click', addToCart);
                        });
                    })
            

            }
            function checkCart () {
                if(localStorage.getItem('cart') !== null){
                    cart = JSON.parse(localStorage.getItem('cart'));
                }
            };
            function addToCart() {
                // Добавляем товар в корзину
                const articul = this.getAttribute('data-art');
                if (cart[articul] !== undefined) {
                    
                } else {
                    cart[articul] = 1;
                }
                localStorage.setItem('cart' , JSON.stringify(cart));
            };
            
           
            const miniCart = document.querySelector('.mini-cart');
            document.addEventListener("DOMContentLoaded", function() {
                    
                    const kolvo = document.getElementById('kolvo')
                    var cartData = localStorage.getItem('cart');
                    var cartArr = JSON.parse(cartData);
                    var cartKeys = Object.keys(cartArr);
                    var cartLength = cartKeys.length;
                    kolvo.textContent = cartLength;
                    
            
                    var mediaQueryList = window.matchMedia("(max-width: 924px)");
                    function handleMediaChange(event) {
                        if(event.matches){
                            miniCart.style.display = 'none'
                        }else{
                            if(cartLength <= 0){
                                miniCart.style.display = 'none';
                            }else{
                                miniCart.style.display = 'block' ;
                            }
                        }       
                    }
                    mediaQueryList.addEventListener("change", handleMediaChange);
                    handleMediaChange(mediaQueryList);     
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
addClassfromHeader.addEventListener('change', kakjeyaustal);

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

});

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