var slide = document.querySelector(".slidebox");
var count = 0;
var openmo = document.querySelector(".modal");

function slideshow(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    slide.style.top = 300*(-count)+"px";
}
window.setInterval("slideshow()",2000);


function openmodal(){
    openmo.style.display="block";
}
function closemodal(){
    openmo.style.display="none";
}

openmo.addEventListener("click",openmodal);
openmo.addEventListener("click",closemodal);