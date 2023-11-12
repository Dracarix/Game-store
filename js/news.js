const allArticulNews = [];

document.addEventListener('DOMContentLoaded', () => {
    loadNews();
});

function loadNews() {
    fetch('../js/news.json')
        .then((response) => response.json())
        .then((data) => {
            const NewsList = document.getElementById('news-list');
            let out = '';
            for (const key in data) {
                out += `<span class="date-elem">${data[key].date}</span>`
                out += `<div class="news-elem" data-news="${key}">`;
                out += `<div class="img-elem">`;
                out += `<img src="${data[key].logoList}">`;
                out += `</div>`;
                out += `<div class="news-content">`;
                out += `<span>${data[key].nameList}</span>`;
                out += `<p>${data[key].info}</p>`;
                out += `</div>`;
                out += `</div>`;
            }
            NewsList.innerHTML = out;

            const overlay = document.getElementById('overlay');
            const modal = document.getElementById('modal');
            const newsElem = document.querySelectorAll('.news-elem');
            newsElem.forEach((item) => {
                item.addEventListener('click', function () {
                    modal.style.display = 'flex';
                    overlay.style.display = 'block';
                    const articulNews = this.getAttribute('data-news');
                    console.log(articulNews);
                    allArticulNews.push(articulNews);
                    loadGoods(data);
                });
            });
        });
}

const CloseModal = document.querySelector('#closeModalButton');
CloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    allArticulNews.length = 0;

});

function loadGoods(data) {
    const modalConteiner = document.getElementById('modal-news');
    let out = '';
    
                for (const key in data) {
                    if (allArticulNews.includes(key)) {
                        
                            if (data[key].firstimg !== null) {
                                out += `<img src="${data[key].logo}">`;
                            }
                    
                            out += `<div class="name-date">`;
                                out += `<div class="date-news"><span>ОПУБЛИКОВАНО</span>   ${data[key].date}</div>`;
                                out += `<div class="name-news">${data[key].name}</div>`;
                            out += `</div>`;
                        
                        out += `<div class="otherInfo">`;
                            if (data[key].firstimg !== null) {
                                out += `<img src="${data[key].firstimg}">`;
                            }
                    
                            if (data[key].content1 !== null) {
                                out += `${data[key].content1}`;
                            }
                    
                            if (data[key].content2 !== null) {
                                out += `${data[key].content2}`;
                            }
                    
                            if (data[key].youtube !== null) {
                                out += `<iframe width="560px" height="315"  src="${data[key].youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                            }
                    
                            if (data[key].content3 !== null) {
                                out += `${data[key].content3}`;
                            }
                    
                            if (data[key].secondimg !== null) {
                                out += `<img src="${data[key].secondimg}">`;
                            }
                    
                            if (data[key].title !== null) {
                                out += `${data[key].title}`;
                            }
                            if (data[key].titlemini !== null) {
                                out += `${data[key].titlemini}`;
                            }
                            if (data[key].content4 !== null) {
                                out += `${data[key].content4}`;
                            }
                            if (data[key].content5 !== null) {
                                out += `${data[key].content5}`;
                            }
                            
                            if(data[key].tringimg !== null){
                                out += `<img src="${data[key].tringimg}">`;
                            }
                            if (data[key].content6 !== null) {
                                out += `${data[key].content6}`;
                            }
                            if (data[key].content7 !== null) {
                                out += `${data[key].content7}`;
                            }
                        out += `</div>`;
                    }
                }
                modalConteiner.innerHTML = out;
            }

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
            
            
            checkWindowWidth();
            
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
            
    
    