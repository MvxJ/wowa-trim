<?php

error_reporting(0);

$senderName = $_POST['name'];
$senderSurname = $_POST['surname'];
$senderNumber = $_POST['number'];
$senderEmail = $_POST['email'];



$message = '
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
             <title></title>
        <style>
            .canvas {
                width: 100%;
                height: 100%;
                text-align: center;
            }

             #email-wrap {
                background: #151515;
                color: #FFF;
                padding: 15px;
            }

            #email-wrap h3 {
                text-align: center;
            }
        </style>
    </head>
    <body>
         <div class="canvas">
            <div id="email-wrap">
                <h3>Nowa wiadomość z wowa.com.pl</h3>
                <p>Imię: ' . $senderName  . '</p> 
                <p>Nazwisko: ' . $senderSurname . ' </p> 
                <p>Numer kontaktowy: ' . $senderNumber . '</p>
                <p>Adres email: ' . $senderEmail . '</p>
                <p>Wiadomość: ' . $_POST['message'] . '</p>
            </div>
        </div>
    </body>
</html>
';

$mailSubject = 'WOWA-TRIM - wiadomość z strony www | ' . $senderName . ' ' . $senderSurname; 
$mailHeaders = 'Content-type:text/html;charset=utf-8 From:' . $senderName . ' ' . $senderSurname . '<' . $senderEmail . '>\r\n';
$mailTarget = 'biuro@wowa.com.pl';

$mailResponse = mail($mailTarget, $mailSubject, $message, $mailHeaders);

if ($mailResponse) {
    header("Location: index.html#wowa-team-contact");
    die();
} else {
    header("Location: assets/error.html");
    die();
}

?>