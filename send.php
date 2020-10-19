<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];



// Формирование самого письма
$title = "В ваш аккаунт выполнен вход с устройства Redmi Note 2";

$body = "

<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br><br>
<b>Email:</b> $email<br><br>
<b>Message:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'tourplan122@gmail.com'; // Логин на почте
    $mail->Password   = 'FwRcNO5XHM'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('vk-info@mail.com', 'INFO-VK');
    $mail->AddReplyTo('vk-info@mail.com', 'Info-vk'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('surikat0013@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');