<?php 



	session_start();



	   if( $_SESSION['security_code'] == $_REQUEST['captcha'] ){

	

	/*ADMIN MAIL START*/






$to  = $_REQUEST['email']; 




			// subject

				$subject = 'Thank you for Contacting Us'; 

			

			// message

			

			$message = '<html xmlns="http://www.w3.org/1999/xhtml">



<body style="margin:0;padding:0;background:#f5f5f5" bgcolor="#f5f5f5">


<center>
 <table cellpadding="0" cellspacing="0" border="0" width="650" align="center" style="width:650px;margin:0 auto;background:#fff;padding:0;">
  <tr>
   <td colspan="3">
     <img src="http://www.motionkandy.com/emailer/email_top.jpg" width="650" style="outline:none;text-decoration:none;border:0" height="60" />
   </td>
  </tr>
  <tr>
<td width="232">
 <img src="http://www.motionkandy.com/emailer/email_left.jpg" width="232" style="outline:none;text-decoration:none;border:0" height="227" />
</td>
<td>
     <div>

     <h3 style="font-family:Arial, Helvetica, sans-serif;font-size:21px;font-weight:normal;color:#5e5e5e;padding:0;margin:0 0 7px;">Dear '.$_REQUEST['fName'].' '.$_REQUEST['lName'].',</h3>

     <p style="font-family:Arial, Helvetica, sans-serif;font-size:17px;font-weight:normal;color:#5e5e5e;padding:0;margin:0;">Thank you for showing interest in motionKandy. <br>
Your requirements are currently under our scrutiny. <br>
One of our marketing members will keep you updated within 48 hours.</p>

     </div>
</td>
<td width="38">
 <img src="http://www.motionkandy.com/emailer/email_right.jpg" width="38" style="outline:none;text-decoration:none;border:0" height="227" />
   </td>
  
</tr>
</table>
   </td>

  </tr>

  <tr> 

   <td colspan="3">

    <img src="http://www.motionkandy.com/emailer/email_footer.jpg" width="650" style="outline:none;text-decoration:none;border:0" height="310" usemap="#mk_enail"/>

   </td>

  </tr>

 </table>

</center>

<map name="mk_enail" id="mk_enail">

<area shape="rect" coords="232,17,458,151" href="http://www.motionkandy.com/" />
</map>

</body>

</html>

'

				;

			//print_r($message);exit;

			 $headers .= 'From: info@motionkandy.com' . "\r\n";

			 $headers .= "MIME-Version: 1.0\r\n";
			
        	 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



            if(mail($to, $subject, $message, $headers)){

				





$to  = "enquiry@motionkandy.com";  



			// subject

				$subject = 'New Kandy Inquiry-'.$_REQUEST['fName']." ".$_REQUEST['lName']; 

			

			// message

			

			$image = "http://www.motionkandy.com/images/logo.jpg";

			$message = '<html><head><body style="background-color:#eeeeee; margin:10px;">

<table width="100%" border="0" cellpadding="0">

  <tr>

    <td align="center" valign="top" style="background-color:#fff; margin:0px;"><table width="572" border="0" cellspacing="0" cellpadding="0" style="font-size:12px; font-family: Arial, Helvetica, sans-serif; line-height:18px; color:#444444; ">

      <td align="center" valign="top">

        	<a href="http://www.motionkandy.com/" target="_blank"><img src="http://www.motionkandy.com/images/logo.jpg" alt="Logo"  border="0" style="padding:14px 0;" height="159" weight="175" /></a>

            </td>

      </tr>

      <tr>

        <td align="left" valign="top" style="background-color:#ffffff; padding:20px; border-right:0 solid #d6d6d6; border-bottom:0 solid #d6d6d6;"><p style="color:#E01B4D; font-size:16px;font-family: Arial, Helvetica, sans-serif;"><strong>You have received an Inquiry from '.$_POST['name'].'</strong></p>

          <table width="100%" border="0" cellspacing="2" cellpadding="4" style="font-size:12px;font-family: Arial, Helvetica, sans-serif;">

            <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Name</td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['fName'].' '.$_POST['lName'].'</strong></td>

              </tr>

             <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Company </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['company'].'</strong></td>

              </tr>

			  <tr>

               <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Email</td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['email'].'</strong></td>

            </tr>

              <tr>

                <td align="left" valign="top" style="border-bottom:1px solid #e2dfd9;">City</td>

                <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['city'].'</strong></td>

              </tr>

              <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Country </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['Country'].'</strong></td>

              </tr>

			  <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Phone </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['Phone'].'</strong></td>

              </tr>

			  <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Website </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['Website'].'</strong></td>

              </tr>

			  <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">AnimationInfo </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['AnimationInfo'].'</strong></td>

              </tr>

			  <tr>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">knowUs </td>

              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['knowUs'].'</strong></td>

              </tr>

            </table>

          <p> Thank you<br />

            <span style="color:#E01B4D;"><strong>motionKandy</strong></span><br />

          </p></td>

      </tr>

      <tr>

        <td align="left" valign="top" style=" text-align:center; color:#4c4c4c; font-size:11px; padding:15px 0px;">&copy; 2012 motionKandy. All Rights Reserved.</td>

      </tr>

    </table></td>

  </tr>

</table>

</body></head>	</html>'

				;

			//print_r($message);exit;

			 $headers .= 'From: Admin motionKandy <info@motionkandy.com>' . "\r\n";

			 $headers .= "MIME-Version: 1.0\r\n";
			 
        	 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



             if(mail($to, $subject, $message, $headers))

			{

				

			

			

			echo "mailsend"; exit;

			

			

			}

		

	

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				

				echo "mailsend";

				}

		

		

	   }else{

		   echo "false";

		   

		   }





?>