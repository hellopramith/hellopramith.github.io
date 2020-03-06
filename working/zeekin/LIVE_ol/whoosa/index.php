<?php 

			include("query.php");
			$service=$_GET['Service'];
			switch($service)
			{
				case 'whoosa':
				whoosaContent(); 
				break;
				case 'coles':
				colesContent();
				break;
			}
			function whoosaContent()
			{
				$whoosaContent=selectWhoosa();
				if(!empty($whoosaContent))
				{
					$response='success';
					$result=$whoosaContent;
				}
				else
				{
					$response='failure';
					$result="";
				}
				$response_array = array('response'=>$response,'result'=>$result);
				echo json_encode($response_array);
			}
			function colesContent()
			{
				$colesContent=selectColes();
				if(!empty($colesContent))
				{
					$response='success';
					$result=$colesContent;
				}
				else
				{
					$response='failure';
					$result="";
				}
				
				$response_array = array('response'=>$response,'result'=>$result);
				echo json_encode($response_array);
			}
?>