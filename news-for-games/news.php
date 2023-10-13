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
     <link rel="stylesheet" type="text/css" href="css/news.css">
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
    <main class="novosty">
        <div class="news-list">
            <ul>
                <li> 
                    <div class="li-block">
                        <div class="img-news">
                            <a href="dota2-02.06.php">
                                <img src="news-logo\Обновление Dota plus.png" />
                            </a>
                        </div>
                        <div class="news-block">
                            <span class="news1">02.06.2023г</span>
                            <div class="news-zagolovok">
                                <a href="dota2-02.06.php"><p>Обновление Dota plus: лето 2023</p></a>
                            </div>
                            <div class="news-opisanie">
                                <p>Честно говоря, весну есть за что любить:повсюду лужи, букашки и осмелившиеся влюбляться дурачки. К счастью вселенсикй остается позади - потому что выходит летнее... </p>
                            </div>
                            <a href="dota2-02.06.php"><span class="news2">Подробнее</span></a>
                        </div>    
                    </div> 
                </li>
                <li>
                    <div class="li-block">
                        <div class="img-news">
                           <a href="first-day-html.php">
                                <img src="images/logo.png"/>
                           </a>
                        </div>
                        <div class="news-block">
                            <span class="news1">02.06.2023г</span>
                            <div class="news-zagolovok">
                                <a href="first-day-html.php"><p>Первый день существования сайта</p></a>
                            </div>
                            <div class="news-opisanie">
                                <p>Моя первая демо версия сайта,созданная специально для дипломной работы. Сайт создан на HTML и CSS </p>
                            </div>
                            <a href="first-day-html.php">
                                <span class="news2">Подробнее</span>  
                            </a>
                        </div>    
                    </div>
                </li> 
                <li> 
                    <div class="li-block">
                        <div class="img-news">
                            <a href="csgo-02.06.php">
                                <img src="news-logo\team-vitality.png" />
                            </a>
                        </div>
                        <div class="news-block">
                            <span class="news1">02.06.2023г</span>
                            <div class="news-zagolovok">
                                <a href="csgo-02.06.php"><p>Team Vitality - Major Champions!</p></a>
                            </div>
                            <div class="news-opisanie">
                                <p>Congratulations to Team Vitality, champions of the BLAST.TV Paris Major! They defeated GamerLegion and completed a dominating performance, sailing through the event without losing a single map. </p>
                            </div>
                            <a href="csgo-02.06.php"><span class="news2">Подробнее</span></a>
                        </div>    
                    </div> 
                </li>
                <li>
                    <div class="li-block">
                        <div class="img-news">
                            <a href="terraria-27.04.php">
                                <img src="news-logo\Terraria state april 2023.png" />
                            </a>
                        </div>
                        <div class="news-block">
                            <span class="news1">27.04.2023г</span>
                            <div class="news-zagolovok">
                                <a href="terraria-27.04.php"><p>Terraria State of the Game - April 2023</p></a>
                            </div>
                            <div class="news-opisanie">
                                <p>Check out laters and greatest happening from Terraria development and the community!</p>
                            </div>
                            <a href="terraria-27.04.php"><span class="news2">Подробнее</span></a>  
                        </div>    
                    </div>                                        
                </li>
                <li>
                    <div class="li-block">
                        <div class="img-news">
                            <a href="csgo-24.05.php">
                                <img src="news-logo\Grand final.png" />
                            </a>
                        </div>
                        <div class="news-block">
                            <span class="news1">24.05.2023г</span>
                            <div class="news-zagolovok">
                                <a href="csgo-24.05.php"><p>Гранд финал</p></a>
                            </div>
                            <div class="news-opisanie">
                                <p>На BLAST.tv Paris Major из 24 команд осталось 2 финалиста: GamerLegion и Team Vitality. На этапе чемпионов GamerLegion победили Monte со счетом 2:0, а Heroic - со счётом 2:1, тем...</p>
                            </div>
                            <a href="csgo-24.05.php"><span class="news2">Подробнее</span></a>  
                        </div>    
                    </div>                                        
                </li>
            </ul>
        </div>
    </main>
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