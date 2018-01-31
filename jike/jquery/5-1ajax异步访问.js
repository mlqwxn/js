$(document).ready(function(){
    $("#btn").click(function(){
        $("#result").text("请求数据中，请稍候");
        $.get("5-1ajaxserver.php",{name:$("#namevalue").val()},function(data){
            $("#result").text(data);
        }).error(function(){
            $("result").text("通讯有问题");
        })
    });

//    $("#btn").click(function(){
//        $.post("5-1ajaxserver.php",{name:$("#namevalue").val()},function(data){
//            $("#result").text(data);
//        }).error(function(){
//            $("#result").text("通讯有问题")
//        })
//    })
});