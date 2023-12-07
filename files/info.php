<?php

require_once('../firebase_config.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the login from the query parameters
    $login = isset($_GET['login']) ? $_GET['login'] : null;

    if ($login) {
        // Retrieve file data based on the login
        $fileData = $database
            ->getReference('files')
            ->orderByChild('login')
            ->equalTo($login)
            ->getValue();

        if ($fileData) {
            // Convert associative array to indexed array
            $files = array_values($fileData);

            // Return file information
            echo json_encode(['files' => $files]);
        } else {
            // No files found for the given login
            echo json_encode(['files' => []]);
        }
    } else {
        // Login not provided in query parameters
        echo json_encode(['error' => 'Login not provided']);
    }
} else {
    // Handle other HTTP methods if needed
    echo json_encode(['error' => 'Invalid request method']);
}
?>
