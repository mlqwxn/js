$("document").ready(function(){
    $(".main>a").click(function(){
        var ulNode=$(this).next("ul");
        var unulNode= $(".main>a").not(this).next("ul");
        //var unulNode= $(".main>a").next("ul");

        /*
        if(ulNode.css("display")=="none"){
            ulNode.slideDown(1000);
            //ulNode.css({display:"block"});
        }else {
            ulNode.slideUp(1000);
            //ulNode.css({display:"none"});
        }
        */
        //ulNode.show();
        //ulNode.toggle();
        unulNode.slideUp();
        ulNode.slideToggle();
        changeIcon($(this));
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