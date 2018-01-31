$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler1);
    $("div").bind("click",divHandler2);
});
function bodyHandler(event){
    console.log(event);
}
function divHandler1(event){
    console.log(event);
    //event.stopPropagation();
    //event.stopImmediatePropagation();
}
function divHandler2(event){
    console.log(event);
}