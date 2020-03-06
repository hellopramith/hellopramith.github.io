<?php
ob_start();
@session_start();
require("include/class.phpmailer.php");

$securityCodeResult	=	$_SESSION['captcha'];
$securityCode		=	$_POST['securityCode'];

if($securityCode==$securityCodeResult)
{
	$mail = new PHPMailer();
	$mail->From = $_POST['emailAddress'];;
	$mail->FromName = $name;
	$mail->AddAddress("vijaygeorge@ispg.in", "MAIL-ISPG");
	$mail->AddAddress("pramith_prakash@ispg.in", "MAIL-ISPG");
	$mail->AddAddress("jeevan@ispg.in", "MAIL-ISPG");
	$mail->WordWrap = 75;
	$mail->IsHTML(true);
	$mail->Subject = "Zeekin's Schedule-a-Demo";
	$heading="<b>Details</b>".ucwords($name);
	$content    = " <html>
<head>
<title></title>
</head>
<body style='background:#e0e4e7'>
<table width='680' border='0' align='center' cellpadding='0' cellspacing='0' bgcolor='#e0e4e7'>
 <tr>
   <td align='center' valign='top' style='background:#e0e4e7;padding:0 0 27px;'><table width='628' border='0' cellspacing='0' cellpadding='0' style='border:1px solid #a1a7ab'>
    <tr>
     <td align='left' valign='middle'  ><table background='#fff' width='628' border='0' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='middle' background='#fff' bgcolor='#fff'><img style='margin: 0 0 0 0;' src='http://www.zeekin.com/images/emaillogo.jpg'  alt='logo' style='float:left' /></td> 
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='middle' height='20' ><table width='628' border='0' bgcolor='#3f3930' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='top' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#fff;padding:5px 16px;text-align:left'>Hello Zeekin Team, </td>
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='top' bgcolor='#FFFFFF' style='background-color:#ffffff; padding:11px;font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
     <table cellpadding='0' cellspacing='0' border='0' width='100%' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
          <tr>
           <td valign='top' style='padding:4px;' width='90'>
            Name
           </td>
           <td valign='top' style='padding:4px;'>
            : ".$_POST['firstName']." ".$_POST['lastName']."
           </td>
          </tr>
          <tr>
          <td valign='top' style='padding:4px;'>
           Company
           </td>
           <td valign='top' style='padding:4px;'>
            : ".$_POST['company']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
            Email address
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['emailAddress']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
            Phone
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['phone']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
           Website
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['website']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
            City
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['city']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
            Country
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['country']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
           Instant Messenger
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['instantMessenger']." ".$_POST['im']."
           </td>
          </tr>
          <tr>
           <td valign='top' style='padding:4px;'>
            Preferred Time
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['prefferdTime']."
           </td>
          </tr>
           <td valign='top' style='padding:4px;'>
            Comments
           </td>
           <td valign='top' style='padding:4px;'>
            : ".$_POST['comments']."
           </td>
          </tr>
          
         </table>
     
     </td>
    </tr>
    <tr> </tr>
    <tr>
     <td height='26' align='center' background='#a1a7ab' valign='middle' style='font-family:Arial, Helvetica, sans-serif; color:#3f3930; font-size:11px; padding:10px 4px;background:#a1a7ab'>&copy; 2013 zeekin.com, All Rights Reserved.</td>
    </tr>
   </table></td>
 </tr>
</table>
</body>
</html>
"; 
	
	$mail->Body=$content; 
		if($mail->Send())
		{
			$mail = new PHPMailer();
			$mail->From = "info@zeekin.com";;
			$mail->FromName = $name;
			$mail->AddAddress($_POST['emailAddress'], "MAIL-ISPG");
			$mail->WordWrap = 75;
			$mail->IsHTML(true);
			$mail->Subject = "Request received for Zeekin's Schedule-a-Demo";
			$userContent    = " <html>
<head>
<title></title>
</head>
<body style='background:#e0e4e7'>
<table width='680' border='0' align='center' cellpadding='0' cellspacing='0' bgcolor='#e0e4e7'>
 <tr>
   <td align='center' valign='top' style='background:#e0e4e7;padding:0 0 27px;'><table width='628' border='0' cellspacing='0' cellpadding='0' style='border:1px solid #a1a7ab'>
    <tr>
     <td align='left' valign='middle'  ><table background='#fff' width='628' border='0' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='middle' background='#fff' bgcolor='#fff'><img style='margin: 0 0 0 0;' src='http://www.zeekin.com//images/emaillogo.jpg'  style='float:left' alt='logo' /></td> 
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='middle' height='20' ><table width='628' border='0' bgcolor='#3f3930' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='top' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#fff;padding:5px 16px;text-align:left'>Hello ".ucfirst($_POST['firstName']).",</td>
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='top' bgcolor='#FFFFFF' style='background-color:#ffffff; padding:11px;font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
Thank you for requesting a demo! We will be contacting you shortly to set up an appointment.<br><br>
Thank you.
<br>
<br>
Regards,
<br><br>
Team Zeekin.com 
     
     </td>
    </tr>
    <tr> </tr>
    <tr>
     <td height='26' align='center' background='#a1a7ab' valign='middle' style='font-family:Arial, Helvetica, sans-serif; color:#3f3930; font-size:11px; padding:10px 4px;background:#a1a7ab'>&copy; 2013 zeekin.com, All Rights Reserved.</td>
    </tr>
   </table></td>
 </tr>
</table>
</body>
</html>
"; 
			
			$mail->Body=$userContent;
			$mail->Send();
			echo "success";
		}
		else
		{echo "error";}
}
else
{
		echo "captchaError";
}
?>