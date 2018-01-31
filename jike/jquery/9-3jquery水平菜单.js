$("document").ready(function(){
    $(".main").hover(function(){
        $(this).children('ul').slideDown();
        changeIcon($(this).children('a'));
    },function(){
        $(this).children("ul").slideUp();
        changeIcon($(this).children('a'));
    })
});
function changeIcon(mainNode){
    if(mainNode){
        if(mainNode.css("background-image").indexOf("collapsed.gif")>=0){
            mainNode.css("background-image","url(images/expanded.gif)");
        }else {
            mainNode.css("background-image","url(images/collapsed.gif)");
        }
    }
}