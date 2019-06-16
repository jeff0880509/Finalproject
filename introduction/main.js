$(document).ready(function()
{
    $("input#aaa").click(function()
    {
        var num = $("#choices li").length;
        var ran =Math.floor(Math.random()*num);
        $("#ccc").text($("#choices li").eq(ran).text());
		if(ran==0)
			$("img#bbb").attr("src","introduction/volleyball01.jpg");
		else if(ran==1)
			$("img#bbb").attr("src","introduction/volleyball03.jpg");
		else if(ran==2)
			$("img#bbb").attr("src","introduction/volleyball01.jpg");
		else if(ran==3)
			$("img#bbb").attr("src","introduction/volleyball04.jpg");
        else if(ran==4)
			$("img#bbb").attr("src","introduction/volleyball02.jpg");
    }); 
});
