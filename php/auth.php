<?php
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

    $pass = md5($pass . "asdasdaqweqwe123");

    $mysql = new mysqli('localhost', 'root', '', 'register');

    $result = $mysql->query("SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$pass'");
    if (!$result) {
        die("Ошибка запроса: " . $mysql->error);
    }

    $user = $result->fetch_assoc();
    if (count($user) == 0) {
        echo "Такой пользователь не найден";
        exit();
    }

    setcookie('user', $user['nickname'], time() + 3600 * 24 * 365, "/");

    setcookie('user');

    $mysql->close();

    header('Location: /');
?>
