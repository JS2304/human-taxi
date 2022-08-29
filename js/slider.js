var index = 0;
var slides = document.getElementsByClassName("slider-image");

function slider(n){

    if(index == slides.length){
        index=0;
        n=0;
    }
   if(index == (-1)){
        index = slides.length-1;
        n = slides.length-1;
   }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[n].style.display="block";
    
}
slider(index);

function controller(x){
    index = index + x;
    slider(index);
}


var mainn = document.getElementsByClassName("mainn")[0];
console.log(mainn);
var line = document.getElementsByClassName(".line1");
function threes(x){  
    x.classList.toggle("change");    
    if(mainn.style.opacity==0){
        mainn.style.opacity="1";
        
        mainn.style.left="10px";
    }
    else{
        mainn.style.opacity="0";
        mainn.style.left="-12px";
        
    }

}



//sticky nav bar
var nav = document.getElementById("nav-main");
 window.addEventListener("scroll",function(){
    if(this.window.pageYOffset >= 46){
        nav.classList.add("sticky");
        
    }
    else{
        nav.classList.remove("sticky");
       
    }
 });

 //onclick

 


 

 
