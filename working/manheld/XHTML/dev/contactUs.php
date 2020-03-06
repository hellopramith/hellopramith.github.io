<?php
require("include/class.phpmailer.php");
function dbConnect()
{
	$con = mysql_connect("localhost","manheld","H7H13XSnhL8bKQ2");
	$sel=mysql_select_db("manheld_db", $con);
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	else
	{
		return $con;
	}
}        
        $con=dbConnect();
	$sql="INSERT INTO manheld_contact_us (request, name, company,email, phone, message)
                VALUES
                ('$_POST[request]','$_POST[name]','$_POST[company]','$_POST[email]','$_POST[phone]','$_POST[message]')";
	$result=mysql_query($sql, $con);
        	$mail = new PHPMailer();
	$mail->From = $_POST['email'];
	$mail->FromName = $_POST[name];
	//$mail->AddAddress("kg@zeekin.com", "MAIL-ISPG");
 	//$mail->AddAddress("bobby@zeekin.com", "MAIL-ISPG");
	//$mail->AddAddress("simi@zeekin.com", "MAIL-ISPG");	
	//$mail->AddAddress("jeevan@ispg.in", "MAIL-ISPG");
	//$mail->AddAddress("indigo@ispg.co.in", "MAIL-ISPG");
        $mail->AddAddress("sujith_c@ispg.in", "MAIL-ISPG");
	$mail->WordWrap = 75;
	$mail->IsHTML(true);
	$mail->Subject = "Contactus request from manheld.com";
	$heading="<b>Details</b>".ucwords($_POST[name]);
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
        <td width='314' align='left' valign='middle' background='#fff' bgcolor='#fff'><img style='margin: 0 0 0 0;' src='http://www.manheld.com/images/emaillogo.jpg'  alt='logo' style='float:left' /></td> 
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='middle' height='20' ><table width='628' border='0' bgcolor='#3f3930' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='top' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#fff;padding:5px 16px;text-align:left'>Hello manheld.com team, </td>
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='top' bgcolor='#FFFFFF' style='background-color:#ffffff; padding:11px;font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
     <table cellpadding='0' cellspacing='0' border='0' width='100%' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
          <tr>
           <td valign='top' style='padding:4px;' width='90'>
            Request
           </td>
           <td valign='top' style='padding:4px;'>
            : ".$_POST['request']."
           </td>
          </tr>
           <tr>
           <td valign='top' style='padding:4px;' width='90'>
            Name
           </td>
           <td valign='top' style='padding:4px;'>
            : ".$_POST['name']."
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
            : ".$_POST['email']."
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
           Message
           </td>
          <td valign='top' style='padding:4px;'>
            : ".$_POST['message']."
           </td>
          </tr>
         
         </table>
     
     </td>
    </tr>
    <tr> </tr>
    <tr>
     <td height='26' align='center' background='#a1a7ab' valign='middle' style='font-family:Arial, Helvetica, sans-serif; color:#3f3930; font-size:11px; padding:10px 4px;background:#a1a7ab'>&copy; 2013 manheld.com, All Rights Reserved.</td>
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
			$mail->From = "info@manheld.com";;
			$mail->FromName = $_POST[name];
			$mail->AddAddress($_POST['email'], "MAIL-ISPG");
			$mail->WordWrap = 75;
			$mail->IsHTML(true);
			$mail->Subject = "Contactus responce from manheld.com";
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
        <td width='314' align='left' valign='middle' background='#fff' bgcolor='#fff'><img style='margin: 0 0 0 0;' src='http://www.manheld.com/images/emaillogo.jpg'  style='float:left' alt='logo' /></td> 
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='middle' height='20' ><table width='628' border='0' bgcolor='#3f3930' cellspacing='0' cellpadding='0'>
       <tr>
        <td width='314' align='left' valign='top' style='font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#fff;padding:5px 16px;text-align:left'>Hello ".ucfirst($_POST['name']).",</td>
       </tr>
      </table></td>
    </tr>
    <tr>
     <td align='left' valign='top' bgcolor='#FFFFFF' style='background-color:#ffffff; padding:11px;font-size:12px;font-family:Arial, Helvetica, sans-serif;color:#666;'>
Thank you for contacting us!!!Our Business Development executive will contact you soon.<br><br>
Thank you.
<br>
<br>
Regards,
<br><br>
Team manheld.com 
     
     </td>
    </tr>
    <tr> </tr>
    <tr>
     <td height='26' align='center' background='#a1a7ab' valign='middle' style='font-family:Arial, Helvetica, sans-serif; color:#3f3930; font-size:11px; padding:10px 4px;background:#a1a7ab'>&copy; 2013 manheld.com, All Rights Reserved.</td>
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
		{echo "failed";}     

?> 
