<?php
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
    $nickname = filter_var(trim($_POST['nickname']), FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);


    if (mb_strlen($email) <= 5 || mb_strlen($email) > 90 || strpos($email, '@') === false) {
        echo "Недопустимая длина email или отсутствует символ '@'";
        exit();
    }else if (mb_strlen($nickname) <= 3 || mb_strlen($nickname) > 50) {
        echo "Недопустимая длина никнейма";
        exit();
    }else if (mb_strlen($pass) <= 3 || mb_strlen($pass) > 18) {
        echo "Недопустимая длина пароля (от 3 до 18 символов)";
        exit();
    }

    $pass = md5($pass . "asdasdaqweqwe123");

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

    $mysql = new mysqli('localhost', 'root', '', 'register');
    if ($mysql->connect_errno) {
    echo "Не удалось подключиться к базе данных: " . $mysql->connect_error;
    exit();
}

    $mysql->query("INSERT INTO `users` (`email`, `password`, `nickname`) VALUES ('$email', '$pass', '$nickname')");

    if ($mysql->errno) {
        echo "Произошла ошибка при сохранении данных в базу данных: " . $mysql->error;
        exit();
    }
  
    $mysql->close();

    header('Location: /');
?>
