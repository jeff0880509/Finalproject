$(document).ready(function()
{
	$("#gameTable").append("<tr><th>週次</th><th>時間</th><th>主題</th>");
	var topicCount = topic.length;
    var num=1;
	for(var x=0; x<topicCount; x++)
	{
		 $("#gameTable").append("<tr><td>"+num+"</td><td>"+new Date(startDate.getFullYear(),startDate.getMonth()+x,1).toLocaleDateString()+"</td><td>"+topic[x]+"</td></tr>");
        num++;
        $("#gameTable").append("<tr><td><font color='red'>"+num+"</td><td><font color='red'>"+new Date(startDate.getFullYear(),startDate.getMonth()+x,15).toLocaleDateString()+"</td><td><font color='red'>備戰</td></tr>");
        num++;
	}

});