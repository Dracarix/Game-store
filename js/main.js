const listItems = document.querySelectorAll('.list-games');
const infoBox = document.querySelector('.info-box');
const infoContent = document.querySelector('.info-content');
document.getElementById('tab1').style.display = 'block';
const mediaLeftColumn = window.matchMedia("(min-width:1550px)");
const mediaListitem = window.matchMedia("(min-width:1160px)");
const leftColumn = document.querySelector('.left_column');
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
    

// открытие таба по кнопкам
function openTab(tabId) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });
    // Отобразить выбранную вкладку
    document.getElementById(tabId).style.display = 'block';  
};
//активные кнопки таба
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

mediaLeftColumn.addListener(handleMediaLeftColumn); 

handleMediaLeftColumn(mediaLeftColumn);

