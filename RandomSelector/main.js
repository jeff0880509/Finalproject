$(document).ready(function()
{
    $("input").click(function()
    {
        var num = $("#choices li").length;
        var ran =Math.floor(Math.random()*num);
        $("H1").text($("#choices li").eq(ran).text());
		if(ran==0)
			$("img").attr("src","RandomSelector/拉麵.jpg");
		else if(ran==1)
			$("img").attr("src","RandomSelector/滷肉飯.jpg");
		else if(ran==2)
			$("img").attr("src","RandomSelector/水餃.jpg");
    }); 
});