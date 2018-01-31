/*
first()
last()
eq()
filter()
not()
 */
$("document").ready(function(){
    //$("div p").first().css({backgroundColor:"red"})
    //$("div p").last().css({backgroundColor:"red"})
    //$("div p").eq(1).css({backgroundColor:"red"});
    //$("div p").filter("p").css({"background-color":"red"});
    $("div p").not(".pclass").css({"background-color":"red"});
});