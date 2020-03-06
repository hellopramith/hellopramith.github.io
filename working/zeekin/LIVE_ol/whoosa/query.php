<?php
//Whoosa Project
function dbConnect()
{
	$con = mysql_connect("localhost","whoosa","Ush54Sa11");
	$sel=mysql_select_db("whoosa", $con);
	if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	else
	{
		return $con;
	}
}
function selectWhoosa()
{
	$con=dbConnect();
	$sqlSelectWhoosa    ="SELECT * FROM t_whoosa";
	$whoosaCont=mysql_query($sqlSelectWhoosa, $con);
	$row_count=mysql_num_rows($whoosaCont);
	if($row_count>0)
	{
		$resArray=array();
		$i=0;
		while($whoosaContent= mysql_fetch_array($whoosaCont))
		{
			$resArray[$i]['id']=$whoosaContent['id'];
			$resArray[$i]['w_entity_type']=$whoosaContent['w_entity_type'];
			$resArray[$i]['w_page_no']=$whoosaContent['w_page_no'];
			//$resArray[$i]['w_name']=htmlspecialchars($whoosaContent['w_name'], ENT_QUOTES, 'utf-8');
			$resArray[$i]['w_name']=stripslashes($whoosaContent['w_name']);
			$resArray[$i]['w_id']=$whoosaContent['w_id'];
			$resArray[$i]['w_href']=$whoosaContent['w_href'];
			$resArray[$i]['w_size']=$whoosaContent['w_size'];
			$resArray[$i]['w_image_resolution']=$whoosaContent['w_image_resolution'];
			$resArray[$i]['w_mc']=$whoosaContent['w_mc'];
			$resArray[$i]['w_orginal_prize']=$whoosaContent['w_orginal_prize'];
			$resArray[$i]['w_discount_prize']=$whoosaContent['w_discount_prize'];
			$resArray[$i]['w_image']="http://182.72.141.134/whoosa/images/".$whoosaContent['w_image'];
			$resArray[$i]['w_quantity']=$whoosaContent['w_quantity'];
			//http://182.72.141.134/whoosa/images/product1.jpg
			$i++;
		}
	}
	return $resArray;
}
function selectColes()
{
	$con=dbConnect();
	$sqlSelectColes    ="SELECT * FROM t_coles";
	$colesCont=mysql_query($sqlSelectColes, $con);
	$row_count=mysql_num_rows($colesCont);
	if($row_count>0)
	{
		$resArray=array();
		$i=0;
		while($colesContent= mysql_fetch_array($colesCont))
		{
			$resArray[$i]['id']=$colesContent['id'];
			$resArray[$i]['c_entity_type']=$colesContent['c_entity_type'];
			$resArray[$i]['c_page_no']=$colesContent['c_page_no'];
			//$resArray[$i]['c_name']=htmlspecialchars($whoosaContent['c_name'], ENT_QUOTES, 'utf-8');
			$resArray[$i]['c_name']=stripslashes($colesContent['c_name']);
			$resArray[$i]['c_id']=$colesContent['c_id'];
			$resArray[$i]['c_href']=$colesContent['c_href'];
			$resArray[$i]['c_size']=$colesContent['c_size'];
			$resArray[$i]['c_image_resolution']=$colesContent['c_image_resolution'];
			$resArray[$i]['c_mc']=$colesContent['c_mc'];
			$resArray[$i]['c_orginal_prize']=$colesContent['c_orginal_prize'];
			$resArray[$i]['c_discount_prize']=$colesContent['c_discount_prize'];
			$resArray[$i]['c_image']="http://182.72.141.134/whoosa/images/".$colesContent['c_image'];
			$resArray[$i]['c_quantity']=$colesContent['c_quantity'];
			//http://182.72.141.134/whoosa/images/product1.jpg
			$i++;
		}
	}
	return $resArray;
}

?>