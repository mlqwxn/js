$("document").ready(function(){
    //$("div").css("width","100px");
    //$("div").css("height","100px");
    //$("div").css("background","red");

    //$("div").css({width:"100px",height:"100px",backgroundColor:"darkgreen"})
    $("div").addClass("style1");
    $("div").click(function(){
        //$(this).addClass("style2");
        //$(this).removeClass("style1");
        $(this).toggleClass("style2");
    })
});