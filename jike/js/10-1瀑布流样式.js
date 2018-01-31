window.onload=function(){
    imgLocation("container","box");
    var imgData={"data":[{"src":"../css3/img/1.jpg"},{"src":"../css3/img/2.jpg"},{"src":"../css3/img/6.jpg"},{"src":"../css3/img/7.jpg"}]};
    window.onscroll=function(){
       if(checkFlag()){
           var cparent=document.getElementById("container");
           for(var i=0;i<imgData.data.length;i++){
               var ccontent=document.createElement("div");
               ccontent.className="box";
               cparent.appendChild(ccontent);
               var boximg=document.createElement("div");
               boximg.className="box_img";
               ccontent.appendChild(boximg);
               var img=document.createElement("img");
               img.src=imgData.data[i].src;
               boximg.appendChild(img);
           }
           imgLocation("container","box");
       }
    };


};

function checkFlag(){
    var cparent=document.getElementById("container");
    var ccontent=getChildElement(cparent,"box");
    var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
}

function imgLocation(parent,content){
    var cparent=document.getElementById("container");
    var ccontent=getChildElement(cparent,content);
    var imgWidth=ccontent[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto";
    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            BoxHeightArr[i]=ccontent[i].offsetHeight;
        }else{
            var minheight=Math.min.apply(null,BoxHeightArr);
            var minIndex=getminheightLocation(BoxHeightArr,minheight);
            ccontent[i].style.position="absolute";
            ccontent[i].style.top=minheight+"px";
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}
function getminheightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]==minHeight){
            return i;
        }
    }
}

function getChildElement(parent,content){
    var contentArr=[];
    var allcontent=parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}