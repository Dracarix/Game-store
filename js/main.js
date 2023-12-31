const listItems = document.querySelectorAll('.list-games');
const infoBox = document.querySelector('.info-box');
const infoContent = document.querySelector('.info-content');

document.getElementById('tab1').style.display = 'block';

const mediaLeftColumn = window.matchMedia("(min-width:1550px)");

const mediaListitem = window.matchMedia("(min-width:1160px)");

const leftColumn = document.querySelector('.left_column');

const fullScrean = document.getElementById('menu_toggle');
const Header = document.getElementById('header');
const checkboxed = document.getElementById('checkboxed');
const addClassfromHeader = window.matchMedia("(max-width: 715px)");

const do924 = window.matchMedia("(min-width: 924px)");
const ot924 = window.matchMedia("(max-width: 924px)");

let currentInfo = null;
let lastHoveredItem = null;
listItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const info = item.getAttribute('data-info');
        const gradient = 'linear-gradient(to right,#95BCD3, #859BAC)';
        infoContent.innerHTML = info;
        currentInfo = info;
        setTimeout(() => {
            item.style.background = gradient;
        }, 10);

        listItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });

        item.classList.add('active');

        const opacityElements = document.querySelectorAll('.img-content-info');

        opacityElements.forEach((element) => {
            requestAnimationFrame(() => {
                element.classList.add('active');
            });
        });

        lastHoveredItem = item;
        

        

        item.addEventListener('mouseout', () => {
                
        });
    });
            
    });

window.addEventListener('load', () => {
    if (listItems.length > 0) {
        const firstItem = listItems[0];
        firstItem.dispatchEvent(new Event('mouseenter'));
    }
});
    

function openTab(tabId) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';  
};
const btnTab = document.querySelectorAll('.tab-button');
btnTab.forEach(function(elem){
    elem.addEventListener('click',()=>{
        const activeTab = document.querySelector('.tab-button.active');
        if (activeTab) {
            activeTab.classList.remove('active');
        }

        
        requestAnimationFrame(() => {
            elem.classList.add('active');
            
        });
    })
});


function openTabmedia(tabId) {
    const tabsMedia = document.querySelectorAll('.tab-content-media');
    tabsMedia.forEach(function(tab) {
        tab.style.display = 'none';
    });

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

const spliders = document.querySelectorAll('#featured-product .splide__slide');

spliders.forEach(item => {
    item.addEventListener('mouseenter', () => {
        
        const imgBox = item.querySelector('.img_box');
        requestAnimationFrame(() => {
            imgBox.style.transform = 'scale(0.9)';
        });
    });

    item.addEventListener('mouseleave', () => {

        const imgBox = item.querySelector('.img_box');
            imgBox.style.transform = 'scale(1)';
    });
});



function handleMediaLeftColumn(event) {
  if (event.matches) {
    
    leftColumn.classList.remove('uletel')
  } else {
    leftColumn.classList.add('uletel')
  }
}

mediaLeftColumn.addEventListener('change', handleMediaLeftColumn); 

handleMediaLeftColumn(mediaLeftColumn);

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
    
  })

  const searchGames = document.getElementById('store_nav_search_term');
  const searchList = document.querySelectorAll('.search-list');

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
                
            }if(!cartData){
                miniCart.style.display = 'none'
            }else{
                if(cartLength <= 0){
                    miniCart.style.display = 'none';
                }else{
                    miniCart.style.display = 'block' ;
                    console.log('3')
                }
            }
                  
                
        }

        mediaQueryList.addEventListener("change", handleMediaChange);
        handleMediaChange(mediaQueryList);

        
        
});

      
      
