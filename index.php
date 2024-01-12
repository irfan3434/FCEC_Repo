<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $employeeId = strip_tags(trim($_POST["employeeId"]));
    // Add other fields as necessary

    // Specify your email address
    $to = 'irfanishtiaq2k10@gmail.com'; // Replace with your email

    // Create email subject
    $subject = "New Feedback from $name";

    // Construct the email body
    $email_content = "Name: $name\n";
    $email_content .= "Employee ID: $employeeId\n";
    // Append other fields to email content

    // Ensure the email address is valid
    if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Set email headers
    $headers = "From: webmaster@example.com"; // Replace with an appropriate sender email

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // Not a POST request, handle the error
    echo "The form is not submitted correctly.";
}
?>
