$.myjq=function(){
    alert("我的jquery")
};

$.fn.myjq=function(){
    $(this).text('hello');
};