/**
 * Created by Administrator on 2018/1/25 0025.
 */
$("document").ready(function(){
    $("#react1").draggable();
    $("#react2").droppable();

    $("#react2").on("drop",function(event,ui){
        //alert("sdkl")
        $("#react2").text("drop事件");
    })
});