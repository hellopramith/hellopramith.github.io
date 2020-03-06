<?php
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
$con=dbConnect();
mysql_query("UPDATE t_whoosa SET w_image='page6.png'
WHERE id>83");	
$grouponRawContent	=	file_get_contents('http://weeklyspecials.woolworths.com.au/OliveXMLService/XMLService.asp?%3CReq%20Tp=%22loadTocXml%22%3E%3CP%20Nm=%22sDataProto%22%3E%3C/P%3E%3CP%20Nm=%22sDocHRef%22%3EWQLD%2f2012%2f12%2f19%3C/P%3E%3CP%20Nm=%22layoutSetDir%22%3E%3C/P%3E%3CP%20Nm=%22sAppName%22%3EAM%3C/P%3E%3C/Req%3E');


$xml = new SimpleXMLElement($grouponRawContent);

            $items = (array) $xml->xpath("/Xmd_toc/Body_np/Section/Page");
			
            foreach($items as $i=>$item):           
            $item = (array)$item;
/*echo "<pre>";
print_r($item);*/

		   
	   
		

/*mysql_query("INSERT INTO t_whoosa (w_entity_type,w_page_no,w_name,w_id,w_href,w_size,w_image_resolution,w_mc)
VALUES ('".$item['@attributes']['ENTITY_TYPE']."', '".$item['@attributes']['PAGE_NO']."','".$item['@attributes']['NAME']."','".$item['@attributes']['ID']."','".$item['@attributes']['HREF']."','".$item['@attributes']['SIZE']."','".$item['@attributes']['IMAGES_RESOLUTION']."','".$item['@attributes']['MC']."')");*/
		   
		   
            endforeach;           
           
            //return $this->dealRssInfo;         
           
           ?>