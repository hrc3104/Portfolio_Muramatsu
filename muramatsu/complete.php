<?php
	mb_language("japanese");
	mb_internal_encoding("UTF-8");

	$to = $_POST["email"];
	$subject = "お問い合わせありがとうございます";
	$header = "From: misym_luv16@yahoo.co.jp";
	$header .= "\n";
	$header .= "Bcc: 任意のBccメールアドレス";
	$message = "お問い合わせありがとうございます。"."\n".
	"以下の通りにお問い合わせ内容を受け付けました。"."\n"."\n".
	"お名前｜".$_POST["fullname"]."\n".
	"メール｜".$_POST["email"]."\n".
	"お問い合わせ理由".$_POST["reason"]."\n".
	"お問い合わせ内容｜".$_POST["content"];

	mb_send_mail($to, $subject, $message, $header);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>完了画面</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>INE</title>
	<link rel="stylesheet" href="./css/reset.css">
	<link rel="stylesheet" href="./css/contact.css">
	<link rel="stylesheet" href="css/examples.css">
	<script src="./js/blotter.min.js"></script>
	<script src="./js/liquidDistortMaterial.js"></script>
	<script src="./js/fliesMaterial.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
</head>
<body>
	<h2>お問い合わせ完了</h2>
 	<p>お問い合わせありがとうございました。</p>
 	<p>今後とも当サイトをよろしくお願いいたします。</p>
 	<p><a href="index.html">お問い合わせトップへ</p>
</body>
</html>
