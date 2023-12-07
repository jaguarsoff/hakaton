<?php
require_once('../firebase_config.php');  // Include your Firebase configuration file

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Function to decode the JWT token
function decodeToken($token)
{
    $key = 'hakaton';  // Update with your JWT secret key
    try {
        // Remove the "Bearer " prefix from the token
        $token = str_replace('Bearer ', '', $token);
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        return null;
    }
}

// Check if a file is uploaded
if (isset($_FILES['file'])) {
    $uploadDirectory = __DIR__.'\uploads\\';  // Specify the directory where you want to save the uploaded files

    $headers = getallheaders();
    $authorizationHeader = isset($headers['Authorization']) ? $headers['Authorization'] : null;

    if ($authorizationHeader) {
        // Extract the token from the Authorization header
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Decode the token
        $decodedToken = decodeToken($token);
    }

    if ($decodedToken) {
        // Get the user login from the decoded token
        $login = $decodedToken->login;

        // Get the file details
        $fileName = $_FILES['file']['name'];
        $fileTempName = $_FILES['file']['tmp_name'];
        $fileSize = $_FILES['file']['size'] / (1024 * 1024);  // Convert size to MB
        $fileError = $_FILES['file']['error'];

        // Generate a unique filename to avoid overwriting existing files
        $uniqueFileName = uniqid() . '_' . $fileName;

        // Build the path to save the file
        $destination = $uploadDirectory . $uniqueFileName;

        // Move the uploaded file to the specified directory
        if (move_uploaded_file($fileTempName, $destination)) {
            // File upload successful, now save information to Firebase
            $time = time();  // Get current timestamp

            // Your Firebase database reference (update with your actual reference)
            $databaseReference = $database->getReference('files');

            // Create an array with file information
            $fileData = [
                'login' => $login,
                'path' => $destination,
                'time' => $time,
                'size_mb' => $fileSize,
                'status' => 'uploaded',
            ];

            // Push the file information to Firebase
            $databaseReference->push($fileData);

            // Return success response
            echo json_encode([
                'status' => 'success',
                'message' => 'File uploaded successfully',
                'filename' => $uniqueFileName,
            ]);
        } else {
            // File upload failed
            echo json_encode([
                'status' => 'error',
                'message' => 'Error uploading file',
            ]);
        }
    } else {
        // Invalid token
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid token',
        ]);
    }
} else {
    // No file uploaded or token provided
    echo json_encode([
        'status' => 'error',
        'message' => 'No file uploaded or token provided',
    ]);
}
?>