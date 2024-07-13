<?php
$folder_name = $_POST['folder_name'];
$path = "/var/www/html/files/" . $folder_name;

if (!file_exists($path)) {
    if (mkdir($path, 0777, true)) {
        echo "Folder created successfully!";
    } else {
        echo "Failed to create folder.";
    }
} else {
    echo "Folder already exists.";
}
?>
