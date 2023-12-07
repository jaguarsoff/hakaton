<?php

require __DIR__ . '/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory())
    ->withServiceAccount(__DIR__ . '/hakaton-148ef-firebase-adminsdk-b97uq-bd690e7bbb.json')
    ->withDatabaseUri('https://hakaton-148ef-default-rtdb.asia-southeast1.firebasedatabase.app');

$database = $factory->createDatabase();

?>
