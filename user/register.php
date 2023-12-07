<?php
require_once('../firebase_config.php');

use Firebase\JWT\JWT;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получите данные из формы (примените дополнительные проверки, если необходимо)
    $login = $_POST['login'];
    $password = $_POST['password'];

    // Проверка на уникальность логина
    $userExists = $database
        ->getReference('users')
        ->orderByChild('login')
        ->equalTo($login)
        ->getValue();

    if($userExists) {
        // Пользователь с таким логином уже существует
        echo json_encode([
            'status' => 'error',
            'message' => 'Пользователь с таким логином уже существует',
        ]);
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        // Создайте узел в базе данных Firebase
        $newUser = $database
            ->getReference('users')
            ->push([
                'login' => $login,
                'password' => $hashedPassword,
                'data' => date('Y-m-d H:i:s')
            ]);

        $tokenPayload = [
            'login' => $login,
            'exp' => time() + 3600, // Токен действителен в течение 1 часа
        ];

        $token = JWT::encode($tokenPayload, 'hakaton', 'HS256');

        // Отправьте ответ об успешной регистрации или другую логику обработки
        echo json_encode([
            'status' => 'success',
            'message' => 'Пользователь успешно зарегистрирован',
            'token' => $token,
        ]);
    }
} else {
    // Обработка ситуации, когда форма не была отправлена
    echo json_encode([
        'status' => 'error',
        'message' => 'Форма не была отправлена',
    ]);
}
?>