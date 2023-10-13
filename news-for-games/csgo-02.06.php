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
            <img src="news-logo/team-vitality.png"/>
        </div>
        <div class="news-list-h2">
            <h2>Team Vitality - Major Champions!</h2>
        </div>
        <div class="news-list-p">
            <p>Congratulations to Team Vitality, champions of the BLAST.TV Paris Major! They defeated GamerLegion and completed a dominating performance, sailing through the event without losing a single map.</p>
            <p>Today we are releasing the Paris 2023 Champions Autograph Capsule, featuring autographs from apEX, dupreeh, Magisk, Spinx, and ZywOo. Celebrate the champions in style, with paper, glitter, holo, and gold player autograph stickers!</p>
        </div>
    </main>
</body>
</html>