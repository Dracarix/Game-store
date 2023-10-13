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
                <img src="shop/img-dota2.jpg" alt="Dota 2"/>
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
                <p>Dota 2 представляет собой командную игру, где две команды, Radiant и Dire, состоящие из пяти игроков каждая, сражаются друг с другом на фантастической арене. Цель каждой команды - разрушить Артефакт противника, называемый Ancient, расположенный в его базе. Игроки выбирают героев из огромного пула персонажей, каждый из которых обладает уникальными способностями, стилем игры и ролями.</p>
                <p>В начале матча, игроки размещают своих героев на трех основных линиях (верхней, средней и нижней) на карте, где они сражаются с противниками, управляемыми другими игроками или компьютером. В процессе игры, герои получают опыт и золото, позволяющие им повышать свой уровень и покупать предметы, усиливающие их способности и характеристики.</p>
                <p>Dota 2 предлагает глубокую стратегическую игру, где командная работа, координация и тактическое планирование играют важную роль. Каждый герой имеет свою роль в команде, такие как носитель (carry), поддержка (support), инитиатор (initiator) и т. д., и успешное взаимодействие между ними является ключевым фактором победы. Команды также могут использовать стратегии, такие как контр-пикинг (выбор героя, чтобы противостоять противнику) и координированные атаки, чтобы одержать победу.</p>
                <p>Dota 2 также известна своим огромным международным соревновательным сообществом и огромными призовыми фондами на турнирах. Ежегодно проводятся множество крупных событий, включая The International, которое собирает лучших игроков со всего мира. Игра является популярной в электронном спорте и считается одной из самых конкурентных и сложных игр в этой области.</p>
                <p>Dota 2 также постоянно обновляется и развивается, добавляя новых героев, изменяя баланс, улучшая графику и предлагая новые возможности игрового опыта. Она предлагает множество режимов игры, включая соревновательные матчи, режимы игры с ботами и неформальные матчи для развлечения.</p>
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
                                    <li>ОС:Windows 7 или новее</li>
                                    <li>Процессор:Двухъядерный процессор с тактовой частотой 2,80 ГГц от Intel или AMD</li>
                                    <li>Оперативная память: 4 GB ОЗУ</li>
                                    <li>Жесткий диск:60 GB</li>
                                    <li>Видеокарта: NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600</li>
                                    <li>DirectX®: Версии 11</li>
                                    <li>Сеть: Широкополосное подключение к интернету</li>
                                    <li>Звуковая карта: Совместимая с DirectX</li>
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