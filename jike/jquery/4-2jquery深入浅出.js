/**
 * Created by Administrator on 2018/1/24 0024.
 */
$(document).ready(function () {
    $("#btn1").on("click",function(){
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    $("#btn2").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(2000);
    });
    $("#btn3").on("click",function(){
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(2000);
    });
    $("#btn4").on("click",function(){
        $("#div1").fadeTo(1000,0.5);
        $("#div2").fadeTo(1000,0.7);
        $("#div3").fadeTo(1000,0.3);
    });
});