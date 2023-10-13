document.addEventListener('DOMContentLoaded', function() {
    var popupBtn = document.querySelector('.popup-btn');
    var popup = document.querySelector('.popup');

    popupBtn.addEventListener('click', function() {
        popup.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (!target.closest('.popup') && !target.closest('.popup-btn')) {
        popup.classList.remove('show');
        }
    });
    });

