<?php
require_once('../firebase_config.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Function to decode the JWT token
function decodeToken($token)
{
    $key = 'hakaton';
    try {
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        return null;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $userData = $database
        ->getReference('users')
        ->orderByChild('login')
        ->getValue();

    if ($userData) {
        // Преобразуем массив с данными пользователей в ассоциативный массив
        $indexedUsers = array_values($userData);

        // Возвращаем все данные пользователей
        echo json_encode([
            'status' => 'success',
            'message' => 'Данные всех пользователей получены успешно',
            'users' => $indexedUsers
        ]);
    } else {
        // Список пользователей пуст
        echo json_encode([
            'status' => 'error',
            'message' => 'Список пользователей пуст',
        ]);
    }
} else {
    // Handle other HTTP methods if needed
    echo json_encode(['error' => 'Invalid request method']);
}
?>
