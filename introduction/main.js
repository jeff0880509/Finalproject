$(document).ready(function()
{
    $("input").click(function()
    {
        var num = $("#choices li").length;
        var ran =Math.floor(Math.random()*num);
        $("#ccc").text($("#choices li").eq(ran).text());
		if(ran==0)
			$("img").attr("src","RandomSelector/volleyball01.jpg");
		else if(ran==1)
			$("img").attr("src","RandomSelector/volleyball02.jpg");
		else if(ran==2)
			$("img").attr("src","RandomSelector/volleyball03.jpg");
		else if(ran==3)
			$("img").attr("src","RandomSelector/volleyball04.jpg");
    }); 
});