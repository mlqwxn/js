$("document").ready(function(){
    $("button").click(function(){
        //$("p").hide(1000,function(){
        //    alert("动画完成执行")
        //})
        $("p").css("color","red").slideUp(1000).slideDown(1000);
    });
});

