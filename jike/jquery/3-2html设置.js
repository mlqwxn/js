$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").text("极客学院");
        $("#p2").text("slf")
    });
    $("#btn2").click(function () {
        $("#p2").html("<a href='http://baidu.com'>极客学院</a>")
    });
    $("#btn3").click(function(){
        $("#i3").val("jikexueyuan");
    });
    $("#btn4").click(function(){
        $("#aid").attr({
            "href":"http://www.126.com",
            "value":"sldkfj"
        });
    });
    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:这是新内容"+i;
        });
    });
});