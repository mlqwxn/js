$(document).ready(function(){
    $("#btn1").click(function(){
        //$("#p1").append("this is new content");
        //$("#p1").prepend("this is new content");
        //$("#p1").before("this is new content");
        $("#p1").after("this is new content");
    });
    $("#btn2").click(appedText);
});
function appedText(){
    var text1="<p>iwen</p>";
    var text2=$("<p></p>").text("iwen");
    var text3=document.createElement("p");
    text3.innerHTML="acely";
    $("body").append(text1,text2,text3);
}