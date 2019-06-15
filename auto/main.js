$(document).ready(function()
{
	$("#courseTable").append("<tr><th>週次</th><th>時間</th><th>主題</th>");
	var topicCount = topic.length;
	var secomdUnit = 1000;
	var minuteUnit = secomdUnit*60;
	var hourUnit = minuteUnit*60;
	var dayUnit =hourUnit*24;
	for(var x=0; x<topicCount; x++)
	{
		$("#courseTable").append("<tr>");
		$("#courseTable").append("<td>"+(x+1)+"</td>");
		$("#courseTable").append("<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString()+"</td>");
		$("#courseTable").append("<td>"+topic[x]+"</td>");
			
		$("#courseTable").append("</tr>");
	}
	$("td").each(function()
	{
		if($(this).text()=="連假"||$(this).text()=="不上課"||$(this).text()=="校慶"||$(this).text()=="畢業典禮")
		{	
			$(this).css("color","red");
		}
	});
    
});
console.log('a');