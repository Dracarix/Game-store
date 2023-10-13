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
            <img src="news-logo/Grand final.png"/>
        </div>
        <div class="news-list-h2">
            <span>Гранд финал</span>
        </div>
        <div class="news-list-p">
            <p>Стали известны финалисты BLAST.tv Paris Major</p>
            <p>На BLAST.tv Paris Major из 24 команд осталось 2 финалиста: GamerLegion и Team Vitality.</p>
            <p>На этапе чемпионов GamerLegion победили Monte со счётом 2:0, а Heroic — со счётом 2:1, тем самым обеспечив себе место в финале.</p>
            <p>А Team Vitality два раза подряд выиграли перед домашней аудиторией со счётом 2:0, сразив Into the Breach и Apeks. Гранд-финал последнего мейджора по CS:GO состоится завтра, 21 мая, на «Аккор Арене» в Париже.</p>
            <p>Удачи финалистам!</p>
        </div>
    </main>
</body>
</html>