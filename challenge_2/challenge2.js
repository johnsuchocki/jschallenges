$(function(){
	
	var colorToggle = true;
	
	// 1 - done
	$("h1").on('click', function() {
		if(colorToggle)
			$("h1").css('color', 'red');
		else {
			$("h1").css('color', 'black');
		}
		colorToggle = !colorToggle;
	});

	//2 - done
	$("h5:odd").hide();

	//3 - done
	$("p").not("aside p").text().replace("Bacon", "LASER VISION");

	//4 - done
	$(".post:last-of-type").remove();
	$(".post:last-of-type").remove();
	
	//5 - done
	$("aside img").remove();
	
})