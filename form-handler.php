<?php
$errors = array();
$data = array();

$errors = '';
$myemail = 'simeontaiwo601@gmail.com'; //<-----Put Your email address here.
if (
    empty($_POST['name'])  ||
    empty($_POST['email']) ||
    empty($_POST['number']) ||
    empty($_POST['subject']) ||
    empty($_POST['message'])
) {
    $errors['name'] = 'Missing value is required.';
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone_number = $_POST['number'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address
)) {
    $errors['email'] = 'Invalid Email.';
}

if (empty($errors)) {
    $to = $myemail;
    $email_subject = "Contact form submission: $subject";
    $email_body = "You have received a new message. " .
        " Here are the details:\n Name: $name \n " .
        "Email: $email_address\n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to, $email_subject, $email_body, $headers);

    $data['success'] = true;
    $data['message'] = 'Successfully Sent!';
}else {
    $data['success'] = false;
    $data['errors']  = $errors;
}

echo json_encode($data);
