<?php

// confirm.php

// Include your Firebase configuration file
require_once('../firebase_config.php');

// Check if the ID parameter is provided in the URL
if (isset($_GET['id'])) {
    // Get the file ID from the URL parameter
    $fileId = $_GET['id'];

    // Your Firebase database reference (update with your actual reference)
    $databaseReference = $database->getReference('files');

    // Find the file by ID
    $queryResult = $databaseReference
        ->orderByChild('id')
        ->equalTo($fileId)
        ->getSnapshot();

    // Check if there is a matching file
    if ($queryResult->hasChildren()) {
        // Get the first matching file (assuming there's only one)
        $fileData = $queryResult->getValue();
        $fileKey = key($fileData);
        $fileReference = $databaseReference->getChild($fileKey);

        // Update the status to 'success'
        $fileReference->update(['status' => 'success']);

        // Return success response with the updated status
        echo json_encode([
            'status' => 'success',
            'message' => 'File status updated to success',
            'fileId' => $fileId,
            'newStatus' => 'success',
        ]);
    } else {
        // No matching file found
        echo json_encode([
            'status' => 'error',
            'message' => 'File not found',
        ]);
    }
} else {
    // No ID parameter provided
    echo json_encode([
        'status' => 'error',
        'message' => 'No file ID provided',
    ]);
}

?>
