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
     <link rel="stylesheet" type="text/css" href="css/shop-list.css">
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
    <div class="shop-list">
        <main>
            <div class="img-default">
                <img src="shop/img-terraria.jpg" alt="terraria"/>
            </div>
            <?php
                if($_COOKIE['user'] == ''):
             ?>  
            <a href="register.html">
                <button>Приобрести</button>
            </a>
            <?php else: ?>
            <a href="loading.html">
                <button>Приобрести</button>
            </a>
            <?php endif ?>
            <div class="sopisanie">
                <strong>Об этой игре</strong>
                <p>"Terraria" - это 2D-песочница и приключенческая игра, разработанная и выпущенная Re-Logic. В игре игрок управляет персонажем, который начинает свое путешествие в случайно генерируемом мире, полном разнообразных ландшафтов, тайн, опасностей и богатств.</p>
                <p>Целью игры является исследование мира, сбор ресурсов, создание предметов, сражение с многочисленными врагами, развитие персонажа и выполнение различных заданий. В "Terraria" игрок может копать, строить, сражаться, исследовать подземелья, сражаться с боссами и взаимодействовать с различными NPC (неконтролируемыми персонажами).</p>
                <p>В мире "Terraria" есть множество различных биомов, таких как леса, пустыни, джунгли, подземелья, хаос, ледяные земли и другие, каждый со своими особенностями и ресурсами. Игрок может собирать ресурсы, такие как дерево, камень, металлы, чтобы создавать различные предметы и оружие, строить убежища и основывать свою базу.</p>
                <p>В "Terraria" также существует акцент на сражениях. Игрок будет сталкиваться с разнообразными монстрами, злобными боссами и другими опасностями. За победу в сражениях и выполнение заданий персонаж будет получать лут, опыт и различные награды, что поможет ему стать сильнее и преодолеть более сложные вызовы.</p>
                <p>Одним из основных аспектов игры является свобода действий и творчества. Игрок может строить различные постройки, создавать сложные механизмы, разрабатывать фермы, создавать уникальные дизайны и экспериментировать с различными элементами игрового мира.</p>
                <p>"Terraria" также предлагает возможность кооперативной игры, где несколько игроков могут объединиться, чтобы исследовать мир, сражаться с врагами и строить вместе.</p>
                <p>В целом, "Terraria" предлагает захватывающий опыт, который сочетает в себе элементы выживания, песочницы, приключения, строительства и битвы, и открыт для множества способов игры и творчества.</p>
            </div>
            <div class="primary-block">
                <div>
                    <h2>Системные требования</h2>
                </div>
                <div class="nprimary">
                    <div class="game-features-left">
                        <ul>
                            <strong>Минимальные характеристики</strong>
                                <ul>
                                    <li>ОС:Windows XP, Vista, 7</li>
                                    <li>Процессор:с тактовой частотой 1,6 ГГц</li>
                                    <li>Оперативная память:512 МБ</li>
                                    <li>Жесткий диск:200 МБ свободного места</li>
                                    <li>Видеокарта: со 128 МБ видеопамяти и поддержкой шейдеров 1.1</li>
                                    <li>DirectX®:9.0c или новее</li>
                                </ul>
                            </ul>
                    </div>
                    <div class="game-features-right">
                        <ul>
                            <strong>Рекомендуемые характеристики</strong>
                                <ul>
                                    <li>ОС:Windows 7, 8/8.1, 10</li>
                                    <li>Процессор:Dual Core 3.0 Гц</li>
                                    <li>Оперативная память:4ГБ</li>
                                    <li>Жесткий диск:200МБ</li>
                                    <li>Видеокарта:256МБ видео памяти и поддержкой шейдеров 2.0+</li>
                                    <li>DirectX®:9.0c или новее</li>
                                </ul>
                        </ul>
                    </div>
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