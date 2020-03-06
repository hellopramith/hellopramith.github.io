function validateRequest()
	{
		
                $("#request_error").remove();
		if($.trim($("#request").val())=='')
		{
		$("#request").after('<div class="clearError"/><span class="error " id="request_error"><span>This is a required field</span></span>');
		return false;
		}
		else
		{ return true;}
	}
 function validateName()
	{
		$("#name_error").remove();
		if($.trim($("#name").val())=='')
		{
		$("#name").after('<div class="clearError"/><span class="error " id="name_error"><span>This is a required field</span></span>');
		return false;
		}
		else
		{ return true;}
	}  
 function validateCompany()
	{
		$("#company_error").remove();
		if($.trim($("#company").val())=='')
		{
		$("#company").after('<div class="clear"/><span class="error" id="company_error"><span>This is a required field</span></span>');
		return false;
		}
		{ return true;}
	}        
 function validateEmail()
	{
		var emailvalue	=	$.trim($("#email").val());
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                $("#email_error").remove();	
                if($.trim($("#email").val())=='')
                {
                $("#email").after('<div class="clear"/><span class="error" id="email_error"><span>This is a required field/span></span>');
                return false;
                }
                else if(!emailReg.test(emailvalue)) 
                        {
                                $("#email_error").remove();
                                $("#email").after('<div class="clear"/><span class="error" id="email_error"><span>Please enter valid email address</span></span>');
                        }
                        else
                        { return true;}
	}
      
  
   function validatePhone()
	{
		$("#phone_error").remove();
		if($.trim($("#phone").val())=='')
		{
		$("#phone").after('<span class="error" id="phone_error"><span>This is a required field</span></span>');
		return false;
		}
		else
		{ return true;}
	}      
   function validateMessage()
	{
		$("#message_error").remove();
		if($.trim($("#message").val())=='')
		{
		$("#message").after('<span class="error" id="message_error"><span>This is a required field</span></span>');
		return false;
		}
		else
		{ return true;}
	}   
  function launchFailed(){
	$('.contactFormUL').hide().css('overflow','hidden').animate({height:0},1000);
	$('.contactFailed').show().css('overflow','visible').animate({height:'auto'},1000);
}      