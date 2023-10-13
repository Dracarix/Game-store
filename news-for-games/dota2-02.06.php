<!DOCTYPE html>
<html lang="ru">
<head>
     <title>Lebedkov.net</title>
     <meta http-equiv="content-type" content="text/html; charset=utf-8" /> 
     <meta name="keywords" content="магазин игр, интернет игры, покупка игр" />
     <meta name="description" content="Магазин игр, Lebedkov.net"/>
     <link rel="shortcup icon" type="image/x-icon" href="favicon.ico" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" type="text/css" href="css/style.css">
     <link rel="stylesheet" type="text/css" href="css/news-list.css">
     <link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
    <header>
        <div class="top">
            <div class="logo">
                <a href="index.php">
                    <img src="images/logo.png" alt="Логотип"/>
                </a>
                <a class="nazvanie"href="index.php">lebedkov.com</a>
                
            </div>
            <?php
                if($_COOKIE['user'] == ''):
             ?>  
            <nav>
                <ul>
                    <li><a href="index.php">Магазин</a></li>
                    <li><a href="news.php">Новости</a></li>
                    <li><a href="login.php">Логин</a></li>
                </ul>
            </nav>
            <?php else: ?>
            <nav >
                <ul>
                <li><a href="index.php">Магазин</a></li>
                <li><a href="news.php">Новости</a></li>
                <button class="popup-btn">Здравствуйте <?php echo $_COOKIE['user']; ?></button>

                        <div class="popup">
                            <a href="php/exit.php">Выйти</a>
                        </div>
                        <script src="js/popup.js"></script>
                        <div class="avatar">
                            <img src="images/logo.png"/>
                        </div>

                </ul>
            </nav>
            <?php endif; ?>
        </div>
    </header>
    <main class="full-info">
        <div class="normal-png">
            <img src="news-logo/Обновление Dota plus.png"/>
        </div>
        <div class="news-list-h2">
            <span>Обновление Dota plus: лето 2023</span>
        </div>
        <div class="news-list-p">
            <p>
                Честно говоря, весну есть за что не любить: повсюду лужи, букашки и осмелившиеся влюбляться дурачки. К счастью, вселенский кошмар остаётся позади — потому что выходит<span> летнее обновление Dota Plus</span>, призванное порадовать всех и каждого. В него входят обновлённые сезонные задания и награды гильдий, а также совершенно новая сокровищница.
            </p>
        </div>
        <div class="news-list-h2">
            <span>Сезонная сокровищница Dota Plus</span>
        </div>
        <div class="news-list-p">
            <p>Представляем сезонную летнюю сокровищницу 2023, которую можно приобрести за осколки. Она содержит новые наборы для Axe, Ember Spirit, Troll Warlord, Zeus, Oracle, Queen of Pain, Sand King и Treant Protector. С каждой открытой сокровищницей у вас есть шанс получить очень редкого курьера Moil the Fettered, в котором сразу есть два случайных самоцвета: призматический и потусторонний.</p>
            <p>Кроме того, теперь наборы из весенней сокровищницы 2022 года можно напрямую приобрести в магазине за 15 000 осколков. Ищите их в разделе «Наследие».</p>
        </div>
        <div class="news-list-h2">
            <span>Обновленные сезонные задания и награды гильдии</span>
        </div>
        <div class="news-list-p">
            <p>Сегодняшнее обновление также включает новый набор сезонных заданий для Dota Plus, чтобы вы могли заработать как можно больше осколков для новых реликвий и сокровищниц. В сумме за все задания можно получить до 115 200 осколков. Награды для гильдий также обновились, открывая успешным гильдиям доступ к новым смайликам, граффити и фразам для колеса чата.</p>
        </div>
        <div class="news-list-h2">
            <span>И в завершение...</span>
        </div>
        <div class="news-list-p">
            <p>Просим почтить память Ми «YammerS» Хунвэя, горячо любимого члена китайского комментаторского сообщества, умершего несколько дней назад. Чтобы отдать ему дань уважения, мы добавили одну из его самых популярных фраз в список наград для гильдий платинового разряда.</p>
        </div>
    </main>
</body>
</html>