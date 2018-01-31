$("document").ready(function(){
    var autotags=["iwen","ime","html","css","java","android"]
    $("#tags").autocomplete({
        source:autotags
    })
});