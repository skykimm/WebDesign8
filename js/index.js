var firstslide = document.querySelector(".img:first-child");
var clickbtns = document.querySelectorAll(".btn");
var clicktabs = document.querySelectorAll(".tab");


function slideshow(){
    var currentslide = document.querySelector(".showing");
    if(currentslide){
        currentslide.classList.remove("showing");
        var nextslide = currentslide.nextElementSibling;
        
        if(nextslide){
            nextslide.classList.add("showing");
        }
        else{
            firstslide.classList.add("showing");
        }
    }
    else{
        firstslide.classList.add("showing");
    }
}
slideshow();
window.setInterval("slideshow()",2000);


function clickbtn(n){
    var currentbrn = document.querySelector(".btns");
    var currenttab = document.querySelector(".tabs");
    
    if(currentbrn){
        currentbrn.classList.remove("btns");
        currenttab.classList.remove("tabs");
    }
    clickbtns[n].classList.add("btns");
    clicktabs[n].classList.add("tabs");
}