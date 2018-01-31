/*
parent()
parents()
parentsUntil()
 */
$("document").ready(function(){
    $("p").parentsUntil("#div1").css({border:"3px solid green"});
    //$("p").parent().css({border:"3px solid green"});
    //$("p").parents("#div1").css({border:"3px solid green"})
});