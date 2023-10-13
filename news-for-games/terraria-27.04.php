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
        <div class="long-news">
            <img src="news-logo/Terraria state april 2023-1.png"/>
        </div>
        <div class="news-list-h2">
            <h2>Terraria State of the Game - April 2023</h2>
        </div>
        <div class="news-list-p">
            <p>Greetings Terrarians!</p>
            <p>
                Can we just say that we are always so excited when Spring finally arrives? Everything turning green, the temperature outside finally making it pleasant to get outdoors - new life springing up everywhere. Sort of how it has felt on the Terraria teams as well, with everyone finding their stride again as we push towards the completion of the 1.4.5 update. Even so, it is hard not to look beyond that into the work in front of us to try and make crossplay a reality (no promises!) and whatever else lies ahead. This is a really exciting time for our team, and we hope that all of you are ready to embark on the journey ahead alongside us. However, that's a story for another State of the Game.
            </p>
            <p>For now, let's get rolling on the latest and greatest Terraria news!</p>
        </div>
        <div class="long-news">
            <img src="news-logo/Terraria state april 2023-slide.png" />
        </div>
        <div class="news-list-h2">
            <h2>PC - RE-LOGIC</h2>
        </div>
        <div class="news-list-h2">
            <span>TERRARIA - 1.4.5 IS DRAWING EVER-CLOSER</span>
        </div>
        <div class="news-list-p">
            <p>
                The team has started to adjust to the new normal, and we have accomplished a lot over the past month towards getting Terraria 1.4.5 back on track. We are starting to get a more clear sense for what remains to finish and for when we might be able to get this out to everyone. No, that does not mean that we have a date to give you yet - unfortunately, QA and Balancing work is part of what remains to do... and that will be where we are most challenged in the new structure. Still, we hope that we can provide a time frame for 1.4.5 soon.
            </p>
            <p>As for what the team has been working on, we have recently been laying the groundwork to add a few new languages to Terraria for PC - Japanese, Korean, and (potentially) Traditional Chinese. These are large playerbases that have had Terraria on other platforms, but have never had it localized to their native language. This will also be important for Crossplay (should we be successful in those efforts), we feel, to enable Terrarians in those countries to have a shared experience.</p>
            <p>That said, is it spoiler time? Why, I believe it is!</p>
            <p>A little while back, Redigit teased that a Shimmer Water Gun might be a thing...</p>
        </div>
        <div class="long-bottom">
            <img src="news-logo/Terraria state april 2023-2.png" />
        </div>
        <div class="gif-news">
            <img src="news-logo/Terraria state april 2023-1.gif" />
        </div>
        <div class="gif-news">
            <img src="news-logo/Terraria state april 2023-2.gif" />
        </div>
        <div class="news-list-p">
            <p>In case you missed it on Twitter a week or so ago, Crowno shared his revamps of Boss Trophies to go alongside the Banner revamps we showed last time!</p>
        </div>
        <div class="news-list-h2">
            <span>OTHER COMMUNITY NEWS</span>
        </div>
        <div class="news-list-p">
            <p>
                The Terraria community is filled with incredible fan media. We love to browse r/terraria and check out the creative minds sharing wonderful creations. We wanted to spotlight some of the trending media that caught our attention in the last month from the r/terraria subreddit. (Please let us know if any of the shared media has a different original creator or if you are featured and want us to adjust your Cake Day). Say Happy Birthday to your fellow Terrarians!
            </p>
        </div>
        <div class="selected-text">
            <span>BUILDS</span>
        </div>
        <div class="default-png">
            <img src="news-logo/Terraria state april 2023-3.png" />
        </div>
        <div class="news-list-mini-p">
            <p>TREE - u/OrientalOrange | Cake Day - May 4</p>
        </div>
        <div class="default-png">
            <img src="news-logo/Terraria state april 2023-4.png" />
        </div>
        <div class="news-list-mini-p">
            <p>my friend is playing terraria for the first time.... this is how he mines.... - u/wetnamE | Cake Day - January 9</p>
        </div>
        <div class="default-png">
            <img src="news-logo/Terraria state april 2023-5.png" />
        </div>
        <div class="news-list-mini-p">
            <p>basic desert tower (no mods) - u/Wardo-Youtube | Cake Day – March 20</p>
        </div>
        

    </main>
</body>
</html>