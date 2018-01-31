/**
 * Created by Administrator on 2018/1/24 0024.
 */
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").hide(500);
    });
    $("#btn2").click(function(){
        $("#p1").show(500);
    });
    $("#btn3").click(function(){
        $("#p1").toggle(1000);
    });
});