<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set up the recipient email address
  $recipient = "mrkesquivel17@gmail.com";

  // Set up the email subject and body
  $subject = "New message from $name";
  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message";

  // Set up the email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  if (mail($recipient, $subject, $body, $headers)) {
    echo "Success";
  } else {
    echo "Error";
  }
}
?>
