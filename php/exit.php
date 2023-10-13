<?php

    setcookie('user', $user[nickname],time () - 3600 * 24 * 365, "/");
    header('Location: /');
?>