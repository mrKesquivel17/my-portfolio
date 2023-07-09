<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){
    echo "All fields are required.";
    exit();
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "mrkesquivel17@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = "From: $email";
if(mail($to, $subject, $body, $headers)){
    echo "Message sent successfully!";
} else{
    echo "Oops! An error occurred.";
}
?>
