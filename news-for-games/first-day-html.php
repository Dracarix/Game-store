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
        <div class="mini-png">
            <img src="images/logo.png"/>
        </div>
        <div class="news-list-h2">
            <span>Первый день существования сайта</span>
        </div>
        <div class="news-list-p">
            <p>
                Моя первая демо-версия сайта, созданная специально для дипломной работы, основана на HTML и CSS. Этот сайт представляет собой мои первые шаги в веб-разработке, и я постарался применить полученные знания и навыки для создания интерактивной и эстетически привлекательной пользовательской интерфейса.
                Я использовал HTML для структурирования контента сайта, размещения текста, изображений и других элементов. CSS был применен для добавления стилей и оформления, чтобы придать сайту профессиональный вид. Я экспериментировал с различными цветами, шрифтами, размерами и позиционированием элементов, чтобы создать гармоничный и современный дизайн.
                В ходе работы над этим проектом, я улучшил свои навыки в HTML и CSS, понял принципы создания адаптивного дизайна и обеспечения хорошей пользовательской доступности. Этот опыт позволил мне лучше понять процесс разработки веб-сайтов и стал хорошей отправной точкой для изучения более продвинутых технологий и инструментов.
                Несмотря на то, что эта версия сайта является демонстрацией моих начальных навыков, я горжусь своей работой и с нетерпением ожидаю дальнейшего развития веб-разработки.
            </p>
        </div>
    </main>
</body>
</html>