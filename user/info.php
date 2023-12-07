<?php
require_once('../firebase_config.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Function to decode the JWT token


function decodeToken($token) {
    $key = 'hakaton';
    try {
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        return null;
    }
}

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the token from the Authorization header
    $headers = getallheaders();
    $authorizationHeader = isset($headers['Authorization']) ? $headers['Authorization'] : null;

    if($authorizationHeader) {
        // Extract the token from the Authorization header
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Decode the token
        $decodedToken = decodeToken($token);

        if($decodedToken) {
            // Token is valid, retrieve user information
            $login = $decodedToken->login;

            // Retrieve user data from Firebase or any other storage
            $userData = $database
                ->getReference('users')
                ->orderByChild('login')
                ->equalTo($login)
                ->getValue();

            if($userData) {
                // Получаем первый элемент массива (если таковой есть)
                $firstUser = reset($userData);

                // Получаем необходимые поля
                $login = $firstUser['login'];
                $password = $firstUser['password'];
                $data = $firstUser['data'];

                // Возвращаем нужные данные
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Данные пользователя получены успешно',
                    'login' => $login,
                    'data' => $data,
                ]);
            } else {
                // Пользователь не найден
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Пользователь не найден',
                ]);
            }

        } else {
            echo json_encode(['error' => 'Invalid token']);
        }
    } else {
        echo json_encode(['error' => 'Authorization header not provided']);
    }
} else {
    // Handle other HTTP methods if needed
    echo json_encode(['error' => 'Invalid request method']);
}
?>