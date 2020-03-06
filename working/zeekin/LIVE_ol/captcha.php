<?php
session_start();
$a = rand(1,10);
$b = rand(1,10);
$_SESSION['captcha'] = $a + $b; // here we save the result of the sum
$image = imagecreate(75, 22);
$bgcol = imagecolorallocate($image, 0xf4, 0xf4, 0xf4);
$txcol = imagecolorallocate($image, 0x00, 0x00, 0x00);
$strn2 = imagestring($image, 5, 5, 5, "$a + $b = ", $txcol);
header("Content-type: image/png");
imagepng($image);
imagedestroy($image);
?>