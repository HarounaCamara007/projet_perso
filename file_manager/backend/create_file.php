<?php
$file_name = $_POST['file_name'];
$content = $_POST['content'];
$path = "/var/www/html/files/" . $file_name;

if (file_put_contents($path, $content)) {
    echo "File created successfully!";
} else {
    echo "Failed to create file.";
}
?>
