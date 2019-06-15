$(function() {
	var posConv = { };
    var finish=new Boolean(false);
    var begin=new Boolean(false);
	for (var i=0; i<16; i++)
	{
		$("#dvPuzzle").append("<div class='PicCell' id='Pic" + i + "'><img src='SlidingPuzzle/volleyball.jpg'></div>");
		var row = parseInt(i / 4);
		var col = i % 4;
		$("#Pic" + i + " img").css("margin-left", col * -120 + 1).css("margin-top", row * -120 + 1);
        
		posConv[i] = { row:row, col:col };
	}
	$("#Pic0 img").remove();
	$(".PicCell").click(function() {
		var cells = $("#dvPuzzle div");
		var i = cells.index(this);
		var toCheck = getNearPos(i);
		while (toCheck.length > 0) {
			var j = toCheck.pop();
			if (cells.eq(j).attr("id") == "Pic0")
			{
				if (i > j) { var k = j; j = i; i = k; }
				var ahead = cells.eq(i);
				var behind = cells.eq(j);
				var behindPrev = behind.prev();
				if (Math.abs(i - j) == 1)
                    behind.after(ahead);
				else
				{
					ahead.after(behind);
					behindPrev.after(ahead);
				}
			}		
		}
	});
    
	function getNearPos(i) {
		var pool = [];
		var row = posConv[i].row, col = posConv[i].col;
		if (row > 0)
			pool.push((row - 1) *  4 + col);
		if (row < 4)
			pool.push((row + 1) * 4 + col);
		if (col  >  0)
			pool.push( i - 1);
		if (col < 4)
			pool.push(i + 1);
		return pool;
	}
    
	$("input:button").click(function() {
		for (var i = 0; i < 500; i++) {
			var cells = $("#dvPuzzle div");
			var toMove = getNearPos(cells.index($("#Pic0")[0]));
			cells.eq(toMove[ parseInt(Math.random() * toMove.length) ]).click();
		}
	});
});
