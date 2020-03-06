<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js ie-old"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie7"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie8"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>manheld</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/styles.css">
        
    </head>
    <body>
		<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="js/jquery.easing.compatibility.js"></script>
        <script type="text/javascript" src="js/jquery.infieldlabel.js"></script>
        <script type="text/javascript" src="js/easySlider1.7.js"></script>
        <script type="text/javascript" src="js/jquery.nicescroll.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
        <script type="text/javascript" src="js/contactUs.js"></script>
        
        <script>
         $(document).ready(function()
 {	
   var baseurl='http://www.manheld.com/'; 
   $('#request').blur(validateRequest);
   $('#name').blur(validateName);
   $('#company').blur(validateCompany);
   $('#email').blur(validateEmail);
   $('#phone').blur(validatePhone);
   $('#message').blur(validateMessage);
   $('#submitRequest').click(function()
   {	    
		if(validateRequest() & validateName() & validateCompany() & validateEmail() & validatePhone() & validateMessage())
		{
                         
                                    $.ajax({
                                     type: 'POST',
                                     url: baseurl+"contactUs.php",		
                                     data: $('#contactUsForm').serialize(),
                                    
                                     success:function(msg)
                                     {
                                            alert(msg);
                                             if(msg=='failed')
                                             {
                                                    $("#contactUsForm")[0].reset(); 
                                                    launchFailed();

                                             }
                                             else
                                             {
                                                    $("#contactUsForm")[0].reset();
                                                    launchThanks(); 
            
                                             }
                                     }
                             });	
                        
                     	
		}
                else
                {
                return false;
                }
   });
 });  
        </script>
        <div class="wrapper">
         <section class="slide slide1" id="index">
           <header class="header">
            <div class="headerLeft" style="position:fixed">
            <h1 id="logo"><a href="javascript:void(0)">manheld</a></h1>
            <menu class="menu">
             <a href="javascript:void(0)" class="menuopener">menu</a>
             <ul class="menuList" style="display:none">          
              <li><a class="inline active" href="#index">Home</a></li>
              <li><a class="inline" href="#team">We are?</a></li>
              <li><a class="inline" href="#production">Production</a></li>
              <li><a class="inline" href="#projects">Projects</a></li>
              <li><a class="inline" href="#client">Clients</a></li>
              <li><a class="inline" href="#quote">Contact us</a></li>
              <li class="last"><a class="inline" href="javascript:void(0)">Follow Us</a></li>
             </ul>
            </menu> 
            </div>
            <div class="headerRight">
             <div class="headerRightL">
              <img src="images/right_12.jpg" >
             </div>
             <div class="headerRightR">
              <div class="projectTitle">Project</div>
              <div class="projectCount">109</div>
              <div class="projectTitleRelease">Released on</div>
              <div class="projectTitleReleaseDate">May, 2013</div>
             </div>
             <div class="headerRightB">
              <h2>Daily Deal, Voucher </h2>
              <h5>Boston, USA</h5>
             </div>
             <div class="clear"></div>
            </div>
           </header>
           <ul class="homeslider">
            <li class="slider-slide1">
             <div class="btmleft-img-slide1"></div>
             <div class="slide1Txt">we are realy happy with<br> the app the team did,<br> 
Amazing Job...</div>
            </li>
           </ul>
          <div class="clear"></div>
         </section>
         <!-- slide 1-->
         <section class="slide slide2 " id="team">
          <div class="maxWidthwindow">
          <h3 class="mhtitle">
           <div class="h5 c1">Our</div> 
           <div class="h1">Team</div>
           <div class="h5 c2">Behind</div> 
          </h3>
          <div class="imgt1"></div>
          <div class="imgt2"></div>
          <div class="imgt3"></div>
             
          <div class="slideTeamLcnt">TEAM<br>SYNONYMOUS<br>WITH<br>INNOVATION<br></div>
          <div class="teancntRight">
           <p>We, at Manheld, believe in leveraging mobile technology to provide our clients with innovative and intelligent mobile apps. Mobile apps for entertainment. Mobile apps for analysis. Mobile Apps that make your work easy.  At Manhelds, we do it all. We have a technically strong team that has the ability to stay updated on all the major changes happening in the mobile app industry.</p>
           <h3 class="teancntRighttitle">Cocoon to silk</h3>
            <ul class="teancntRightUL">
             <li>
              <h5>Discovery</h5>
              <div>A process where we understand your thoughts, your ideas, and work collaboratively in order to present a solution that reflects your vision and our research.</div>
             </li>
             <li>
              <h5>Understanding</h5>
              <div>Document created from research and our understanding provides not only functional aspects but also the social aspects of the project. </div>
             </li>
             <li>
              <h5>Improvement</h5>
              <div>Continuous brain storming provides improvements which while developing the project creates a big difference that uplifts the application to more advanced level.</div>
             </li>
             <li>
              <h5>Document</h5>
              <div>Step by step project break down along with their documentation provides a strong architectural support as well as makes easy for execution. </div>
             </li>
             <li>
              <h5>Design</h5>
              <div>Designs are made keeping apps functional objectives in mind. Each app is distinctive; to match various level, screening is provided find the best design. </div>
             </li>
             <li>
              <h5>Coding</h5>
              <div>Best coding is the outcome of best research, design and architecture. Coding is done only when all pre requisites conditions are met. This reduces error and also provides that space where new requirements can be adjusted. </div>
             </li>
             <li>
              <h5>Testing</h5>
              <div>This is a process where various techniques are used to produce a glitch free application. Testing process like Alpha & beta bridge that gap where both coding and user experience are tested.</div>
             </li>
             <li>
              <h5>Release</h5>
              <div>Submission of app on web store can be tedious, but we take care of all from registering till submission of the app, so that you can reach your target audience at the earliest. </div>
             </li>
             <li>
              <h5>Warranty</h5>
              <div>Strong warranty process makes sure to take care of any bug or error that might occur during the running period and solve the same at the earliest with apex level of service. </div>
             </li>
            </ul>

          </div>
          </div>
          <div class="clear"></div>
         </section>
         <!-- slide 2-->
         <section class="slide slide3" id="production">
          <div class="maxWidthwindow">
          <h3 class="mhtitle">
           <div class="h5 c1">Studio</div> 
           <div class="h1">Production</div>
          </h3>
          <div class="studioProductionIndex">
            <ul>
               <li><a onClick="stuProductionCnt(1,this)" class="active">Augmented reality</a></li>
               <li><a onClick="stuProductionCnt(2,this)">GPU</a></li>
               <li><a onClick="stuProductionCnt(3,this)">Geo-fencing</a></li>
               <li><a onClick="stuProductionCnt(4,this)">System Level</a></li>
               <li><a onClick="stuProductionCnt(5,this)">Face Detection</a></li>
               <li><a onClick="stuProductionCnt(6,this)">Object recognition</a></li>
               <li><a onClick="stuProductionCnt(7,this)">Video Chat</a></li>
           </ul>
          </div>
          <div class="studioProductionCnt" id="studioProductionCnt_1">
           <!--<h3 class="studioProductionTitle">What does your desk look like?</h3>-->
           <div class="studioProductionCntDesc">
            <p>See your world through a virtual window, have no boundaries for your vision.<br>Create your own world, color them, place them, locate them...<br>..see through it.<br>..walk through it.<br>..catch it
</p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_2">
           <div class="studioProductionCntDesc">
            <p>Manipulate the images and videos.  <br>
            Color, Stretch, Crop, Bulge, Write, do anything as you wish. Make it more beautiful, funny, horrible only through your APPS. 
             </p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_3">
           <div class="studioProductionCntDesc">
            <p>A Virtual fence on a real world, which keeps you awake once you hit or leave out, on 
                    move. Search some data by marking directly on the MAP.
</p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_4">
           <div class="studioProductionCntDesc">
            <p>Customize your needs, even over the default features of the OS. Integrating the in-built and default functionality with the apps</p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_5">
           <div class="studioProductionCntDesc">
            <p>Face detection a process which has gained worldwide acknowledgement.
The application with such level of calibre detects entire face and individual facial features, recognizes faces in still images and real-time video streams, and allows the creation of a wide range of applications from simple automatic red-eye removal tools to biometric login solutions.
</p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_6">
           <div class="studioProductionCntDesc">
            <p>Let your APP your APP,  identify the things around you. we make it more precise and informative than your eyes.</p>
           </div>
          </div>
          <div class="studioProductionCnt" style="display:none" id="studioProductionCnt_7">
           <div class="studioProductionCntDesc">
            <p>Make your conversations more real. Express yourself through gesture and voice.<br>
Feel the conversation as real, in front of you.<br>
Get the others more closer to you.<br>
Where-ever you are, they are, it keeps you together.
</p>
           </div>
          </div>
          
          </div>
          <div class="clear"></div>
         </section>
         <!-- slide 3-->
         <section class="slide slide4" id="projects">
          <div class="maxWidthwindow">
          <h3 class="mhtitle">
           <div class="h5 c1">Our</div>  
           <div class="h1">Treasure</div>
           <div class="h5 c2">Box</div> 
          </h3>
          <div class="projectMenuFilter">
           <ul class="projectMenuFilterList">
            <li><span>filter by</span></li>
            <li><a href="" class="active">industries</a></li>
            <li><a href="">Clients</a></li>
            <li><a href="">Type</a></li>
           </ul>
           <div class="proBottom">
            <h3 class="proBottomCount">0087</h3>
            <h5 class="proBottomTitle">Projects</h5> 
           </div>
          </div> 
          <div class="projectMenuList">
           <ul class="projectMenuListUL"> 
            <li><a onClick="ourProjectsCnt(1,this)" class="active">SOCIAL NETWORK </a></li>
            <li><a onClick="ourProjectsCnt(2,this)">M-COMMERSE </a></li>
            <li><a onClick="ourProjectsCnt(3,this)">ENTERTAINMENT</a></li>
            <li><a onClick="ourProjectsCnt(4,this)">GAMES</a></li>
            <li><a onClick="ourProjectsCnt(5,this)">INFORMATIVE</a></li>
           </ul>
           <div class="proBottom">
            <h3 class="proBottomCount">009</h3>
            <h5 class="proBottomTitle">Products</h5> 
           </div>
          </div> 
          <div class="ourProjectsCnt" id="ourProjectsCnt_1">
            <div class="ourProjectsCntGallery">
            <div class="easySlider" id="easySlider_1">
            <ul>
             <li>
               <img src="images/portfolio/hi_there/01.jpg" >
             </li>
             <li>
               <img src="images/portfolio/hi_there/02.jpg" >
             </li>
             <li>
               <img src="images/portfolio/hi_there/03.jpg" >
             </li>
            </ul>	
            </div>
            </div>
            <div class="ourProjectsCntDetails">
             <div class="projectLogoWrapper">
              <div class="projectLogo">
               <img src="images/portfolio/hi_there/logo.png" >
              </div>
             </div>
             <div class="projectHig">
              <ul class="projectHigUl">
              <li>
               <span>GOAL</span> App that enables you to connect more.
              </li>	
              <li>
               <span>client</span> Lovell Hodge, Jolo Solutions lnc.
              </li>	
              </ul>
              </div>
             <div class="proDesc">Whether you want to meet friends or business partners in your area or around the world, “Hi There!” app is there to help you. ‘Hi There!’ app brings a true mobile networking experience to you. Users of this app can either use real time GPS or static location based matching to bring together people having similar personal or business interests. So users can now make connections as per their choice of same or opposite sex (or both) or any chosen age group.</div> 
			<div class="keyFeatures">
             <h5>Key Features</h5>
             <ul class="keyFeaturesUL">
              <li>Virtual Mapping of Adjoining Contacts with similar Interest </li>
              <li>Multi Media Chatting with Matches </li>
              <li>Suggest Business/Personnel Interest </li>
              <li>In-app purchase </li>
              <li>iAds</li>
             </ul>
            </div>
            </div>
            
          </div>
          <div class="ourProjectsCnt" id="ourProjectsCnt_2" style="display:none">
            <div class="ourProjectsCntGallery">
            <div class="easySlider" id="easySlider_2">
            <ul>
             <li>
               <img src="images/s1.jpg" >
             </li>
             <li>
               <img src="images/s2.jpg" >
             </li>
            </ul>	
            </div>
            </div>
            <div class="ourProjectsCntDetails">
             <div class="projectLogoWrapper">
              <div class="projectLogo">
               <img src="images/pro_logo1.jpg" >
              </div>
             </div>
             <div class="projectHig">
              <ul class="projectHigUl">
              <li>
               <span>GOAL</span> f df d fdSell Mies of The 4-Hour Chef
              </li>	
              <li>
               <span>client</span> ods corporation, Boston USA
              </li>	
              </ul>
              </div>
             <div class="proDesc">Great customization is important. You know and we know it — you need an expert to support you in your project. Well Guv’nor, that’s us! Our staff provides you with the knowledge in order to find the most effective solution for your 
Word Press customization.</div> 
			<div class="keyFeatures">
             <h5>Key Features</h5>
             <ul class="keyFeaturesUL">
              <li>Set up and install WP and theme</li>
              <li>Custom theme development</li>
              <li>Custom page templates</li>
              <li>Custom post-type integrations</li>
              <li>Responsive web development</li>
              <li>Installing / configuring eCommerce</li>
             </ul>
            </div>
            </div>
            
          </div>
          </div>
          <div class="clear"></div>
         </section>
         <!-- slide 4-->
         <section class="slide slide5" id="client">
          <div class="maxWidthwindow">
          <h3 class="mhtitle">
           <div class="h5 c1">Our</div> 
           <div class="h1">Clients</div>
           <div class="h5 c2">Delighted</div> 
          </h3>
          <div class="clientBG"></div>
          <div class="clientListing">
           <table cellpadding="0" cellspacing="0" border="0" width="100%" align="center">
            <tr>
             <td>
              <div class="clientlogo"><img src="images/clients/bano_crorpathi/1a.png" ><img src="images/clients/bano_crorpathi/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/cisco/1a.png" ><img src="images/clients/cisco/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/face_combat/1a.png" ><img src="images/clients/face_combat/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/oorjit_go/1a.png" ><img src="images/clients/oorjit_go/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
            </tr>
            <tr>
             
             <td>
              <div class="clientlogo"><img src="images/clients/hi_bye/1a.png" ><img src="images/clients/hi_bye/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/hi_there/1a.png" ><img src="images/clients/hi_there/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/ofarat/1a.png" ><img src="images/clients/ofarat/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/groopling/1a.png" ><img src="images/clients/groopling/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
            </tr>
            <tr>
             
             <td>
              <div class="clientlogo"><img src="images/clients/panasonic/1a.png" ><img src="images/clients/panasonic/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/retailersaver/1a.png" ><img src="images/clients/retailersaver/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/sakan/1a.png" ><img src="images/clients/sakan/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/singing_diasies/1a.png" ><img src="images/clients/singing_diasies/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
            </tr>
          
            
            <tr>
             <td>
              <div class="clientlogo"><img src="images/clients/so_annoying/1a.png" ><img src="images/clients/so_annoying/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/tagandflag/1a.png" ><img src="images/clients/tagandflag/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/yonzo/1a.png" ><img src="images/clients/yonzo/1.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"><img src="images/clients/minutes_coupon/1.png" ><img src="images/clients/minutes_coupon/1a.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
            </tr>
            
            <tr>
             
             <td>
              <div class="clientlogo"><img src="images/clients/minutes_coupon/2.png" ><img src="images/clients/minutes_coupon/2a.png" style="display:none"></div>
              <div class="clientname">Singapore, South Asia</div>
             </td>
             <td>
              <div class="clientlogo"></div>
              <div class="clientname"></div>
             </td>
             <td>
              <div class="clientlogo"></div>
              <div class="clientname"></div>
             </td>
             <td>
              <div class="clientlogo"></div>
              <div class="clientname"></div>
             </td>
            </tr>
           </table>
          </div>
          </div>
          <div class="clear"></div>
         </section> 
         <!-- slide 5-->
         <section class="slide slide6" id="quote">
          <div class="maxWidthwindow">
          <h3 class="mhtitle">
           <div class="h5 c1">get a</div> 
           <div class="h1">Quick quote</div>
           <div class="h5 c2">from us</div> 
          </h3>
          <div class="contactImg"></div>
          <div class="contactAddress">
           <h4>For any request<br>please call us at</h4>
           <h1>0142714836</h1>
           <p>man held<br>
Albulastrasse 39<br>
8048 Zürich<br>
T +41 44 491 00 25</p>
          </div>
         <div class="contactForm">
            <form name="contactUsForm" id="contactUsForm" method="post" action="" enctype="multipart/form-data">   
            <ul class="contactFormUL">
             <li>
              <label for="request">REQUEST</label>
              <input type="text" id="request" name="request" class="contactTxt">
             </li>
             <li>
              <label for="name">NAME</label>
              <input type="text" id="name" name="name" class="contactTxt">
             </li>
             <li>
              <label for="company">COMPANY</label>
              <input type="text" id="company" name="company" class="contactTxt">
             </li>
             <li>
              <label for="email">EMAIL</label>
              <input type="text" id="email" name="email" class="contactTxt">
             </li>
             <li>
              <label for="phone">PHONE</label>
              <input type="text" id="phone" name="phone" class="contactTxt">
             </li>
             <li>
              <label for="message">MESSAGE</label>
              <textarea id="message" name="message" class="contactTxt"></textarea>
             </li>
             <li class="last">
              <input type="button"  name="submitRequest" id="submitRequest" value="Submit your request" class="submitBtn"/>
             </li>
            </ul>
            <div class="contactThanks" style="display:none">
            <h3>Thank you for contacting us!!!</h3>
         <h5>Our Business Development executive will contact you soon. </h5>
          <a class="backForm" href="javascript:onclick=launchForm()">&lt; back to form</a>
          </div>
         <div class="contactFailed" style="display:none">
            <h3>Sorry!!!</h3>
         <h5>Please try again later. </h5>
          <a class="backForm" href="javascript:onclick=launchForm()">&lt; back to form</a>
          </div>
          </div>
          
          </div>
          <div class="clear"></div>
         </section>
          <!-- slide 6-->
         <div class="clear"></div>
        </div>
        <div class="clear"></div>	
    </body>
</html>
