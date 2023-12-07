<?php
require_once('../firebase_config.php');

use Firebase\JWT\JWT;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получите данные из формы (примените дополнительные проверки, если необходимо)
    $login = $_POST['login'];
    $password = $_POST['password'];

    // Проверка пользователя в базе данных Firebase
    $user = $database
        ->getReference('users')
        ->orderByChild('login')
        ->equalTo($login)
        ->getValue();

    if (!$user) {
        // Пользователь не найден
        echo json_encode([
            'status' => 'error',
            'message' => 'Неверные логин или пароль',
        ]);
    } else {
        // Проверка хэшированного пароля
        $hashedPassword = $user[key($user)]['password'];
        if (password_verify($password, $hashedPassword)) {
            // Вход успешен, генерируем токен
            $tokenPayload = [
                'login' => $login,
                'exp' => time() + 3600, // Токен действителен в течение 1 часа
            ];

            $token = JWT::encode($tokenPayload, 'hakaton', 'HS256');

            // Отправляем токен клиенту
            echo json_encode([
                'status' => 'success',
                'message' => 'Вход успешен',
                'token' => $token,
            ]);
        } else {
            // Неверный пароль
            echo json_encode([
                'status' => 'error',
                'message' => 'Неверные логин или пароль',
            ]);
        }
    }
} else {
    // Обработка ситуации, когда форма не была отправлена
    echo json_encode([
        'status' => 'error',
        'message' => 'Форма не была отправлена',
    ]);
}
?>
