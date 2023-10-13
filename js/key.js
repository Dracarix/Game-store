document.addEventListener('DOMContentLoaded', function() {
    const keyElement = document.getElementById('key-value');
    
    function generateRandomKey() {
        let key = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const sections = [5, 5, 5, 5, 5]; // Длина каждой секции ключа

        for (let i = 0; i < sections.length; i++) {
            for (let j = 0; j < sections[i]; j++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                key += characters[randomIndex];
            }

            if (i !== sections.length - 1) {
                key += '-';
            }
        }

        return key;
    }

    const randomKey = generateRandomKey();
    const currentURL = window.location.href;

    // Отправка ключа и ссылки на сервер с помощью AJAX-запроса
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_key.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Вывод ответа от сервера
        }
    };
    xhr.send('key=' + randomKey + '&source=' + encodeURIComponent(currentURL));

    keyElement.textContent = randomKey;
});
