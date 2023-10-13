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
     <link rel="stylesheet" type="text/css" href="css/category.css">
     <link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
    <header>
        <div class="top">
            <div class="logo">
                <a href="index.html">
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
            <nav class="logins" >
                <ul>
                    <li><a href="index.php">Магазин</a></li>
                    <li><a href="news.php">Новости</a></li>
                    <button class="popup-btn">Здравствуйте <?php echo $_COOKIE['user']; ?></button>

                        <div class="popup">
                            <a href="php/exit.php">Выйти</a>
                        </div>
                        <script src="js/popup.js"></script>
                    <div class="avatar">
                        <img src="images/logo.png" alt="Аватар"/>
                    </div>

                </ul>
            </nav>
            <?php endif; ?>
        </div>
    </header>
    
    <div class="seredina">
        <div class="left-column">
            <ul>
                <li><p>Категории</p></li>
                <li><a href="shuter.php">Шутер</a></li>
                <li><a href="sandgame.php">Песочницы</a></li>
                <li><a href="race.php">Гонки</a></li>
            </ul>
        </div>
        <main>
            <div class="game1" >
                <div class="block1">
                    <a href="scsgo.php" >
                        <img src="game.logo/csgo.logo.jpg" alt="csgo" /> 
                    </a>
                </div>
                <div class="block2">
                    <div>
                        <h2>CS GO</h2>
                    </div>
                    <div class="p"> 
                        <p>Бесплатно</p> 
                    </div>
                </div>
        </main>
    </div>
    <footer>
        <div class="reglament">
            <p>
                © 2023 Lebedkov. Все права защищены.НДС включён во все цены, где он применим.
            </p>
        </div>
        <div class="contact">
            <p>Tel:</p>
            <p>+78005553535</p>
            <p>Email:</p>
            <p>lebedkov20022002@gmail.com</p>
        </div>
    </footer>
</body>
</html>