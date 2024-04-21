document.addEventListener("DOMContentLoaded",function(){
    const slides=document.querySelectorAll(".banner-img");
    let current=0;
    function nextslide(){
        slides[current].classList.remove("active");
        current=(current+1)%slides.length;
        slides[current].classList.add("active");
        
    }
    setInterval(nextslide,5000);
});