<?php
$fullname = isset($_POST["fullname"])? $_POST["fullname"] : "";
$email = isset($_POST["email"])? $_POST["email"] : "";
$content = isset($_POST["content"])? $_POST["content"] : "";
$reason = implode('/', $_POST['reason']);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PORTFOLIO</title>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="css/examples.css">
  <link rel="stylesheet" href="./css/contact.css">
  <script src="./js/blotter.min.js"></script>
  <script src="./js/liquidDistortMaterial.js"></script>
  <script src="./js/fliesMaterial.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
</head>
<body>
  <div id="cursor" class="cursor"></div>
  <div class="scroll-background  background-color-1">
    <form action="complete.php" method="post">
      <!-- エンティティ化。htmlspecialchars( 変換対象文字, 変換パターン, 文字コード )  -->
      <input type="hidden" name="fullname" value="<?php echo htmlspecialchars($fullname,ENT_QUOTES,"UTF-8"); ?>">
      <input type="hidden" name="email" value="<?php echo htmlspecialchars($email,ENT_QUOTES,"UTF-8"); ?>">
      <input type="hidden" name="content" value="<?php echo htmlspecialchars($content,ENT_QUOTES,"UTF-8"); ?>">
      <dl>
        
        <dt>お名前</dt>
        <dd><?php echo htmlspecialchars($fullname,ENT_QUOTES,"UTF-8"); ?></dd>
        <dt>メールアドレス</dt>
        <dd><?php echo htmlspecialchars($email,ENT_QUOTES,"UTF-8"); ?> </dd>
        <dt>お問い合わせ内容</dt>
        <dd><?php echo htmlspecialchars($content,ENT_QUOTES,"UTF-8"); ?></dd>
      </dl>
      <div class="complete-button">
      <input type="button" value="戻る" onClick="history.back()">
      <input type="submit" value="送信">
    </div>
    </form>
  </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/jquery.pagepiling.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
    <script src="./js/ztext.min.js"></script>
    <script src="js/jquery.ripples-min.js"></script>
  <script src="./js/script.js"></script>
</body>
</html>



