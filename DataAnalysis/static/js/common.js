$(document).ready(
    function(){

        $("#pre").click(
            function(){
                left();
            }
            
        );
        $("#next").click(
            function(){
                right();  
            }  
        );
    }
   
);

 function left(){
     $(".img").animate({left:"-=910px"},400);
}
function right(){
    $(".img").animate({left:"+=910px"},400);
}