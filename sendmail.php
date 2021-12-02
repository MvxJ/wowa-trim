<?php

error_reporting(0);

$senderName = $_POST['name'];
$senderSurname = $_POST['surname'];
$senderNumber = $_POST['number'];
$senderEmail = $_POST['email'];
$message = 'Imie: ' . $senderName . '\n Nazwisko: ' . $senderSurname . '\n Numer kontaktowy: ' . $senderNumber . '\n Adres email: ' . $senderEmail . '\n Wiadomość: ' . $_POST['message'];

$mailSubject = 'WOWA TRIM - mail submission | ' . $senderName . ' ' . $senderSurname; 
$mailHeaders = 'From:' . $senderName . ' ' . $senderSurname . '<' . $senderEmail . '>\r\n';
$mailTarget = 'biuro@wowa.com.pl';

$mailResponse = mail($mailTarget, $mailSubject, $message, $mailHeaders);

if ($mailResponse) {
    header("Location: index.html");
    die();
}

?>