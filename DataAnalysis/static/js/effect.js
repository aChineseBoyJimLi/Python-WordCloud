/*简单的页面交互动画*/
$(document).ready(
	function(){
		$(".chart").hover(
			function(){
				$(this).animate({width:"430",height:"308px",left:"-=2px",top:"-=5px"},250);
			},
			function(){
				$(this).animate({width:"425",height:"300px",left:"+=2px",top:"+=5px"},250);
			}
		);

		$("#pre").hover(
            function(){
                $(this).animate({opacity:"0.8"},250);
            },
            function(){
                $(this).animate({opacity:"0.3"},250);
            }
        );
        $("#next").hover(
            function(){
                $(this).animate({opacity:"0.8"},250);
            },
            function(){
                $(this).animate({opacity:"0.3"},250);
            }
       ); 
	}
);


