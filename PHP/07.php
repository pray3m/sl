

# Sending mail in PHP

PHP makes use of mail() function to send an email. This function requires three mandatory arguments that 
specify the recipient's email address,the subject of the the message and the actual message additionally 
there are other two optional parameters.

<?php
$to = "test@test.com"; // Recipient's email address
$subject = "Your subject"; // Subject of the email
$message = "Hello there, have a nice day."; // Body of the email
$headers = "From: sender@example.com"; // Sender's email address

// Send the email using the mail() function
if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
    echo $subject;
    echo $message;
} else {
    echo "Failed to send the email.";
}
?>

