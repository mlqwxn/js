/*
siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()
 */
$("document").ready(function(){
    //$("h4").siblings().css({border:"3px solid red"});
    //$("h4").next().css({border:"3px solid red"});
    //$("h4").nextAll().css({border:"3px solid red"});
    //$("h3").nextUntil("h5").css({border:"3px solid red"});
    //$("h5").prev().css({border:"3px solid red"});
    //$("h5").prevAll().css({border:"3px solid red"});
    $("h5").prevUntil("h3").css({border:"3px solid red"});
});