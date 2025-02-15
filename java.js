let button =document.querySelector(".smus");
let originaltext=button.innerText.trim();
let originalColor=getComputedStyle(button).backgroundColor;
button.addEventListener ("click", function () 
{ if (button.innerText=== "sale") {button.innerText=originaltext;
    button.style.backgroundColor=originalColor;
}
else {
     button.innerText="sale"; 
button.style.backgroundColor="red";}
});

document.getElementById ("img-cottage") .addEventListener ("click", function()
{
let img=document.getElementById("img-cottage");
if (img.src.includes("unnamed.jpg")){
    img.src="unnamed1.jpg";
    
 } else { 
        img.src="unnamed.jpg";
}
});
const images=["unnamed.jpg", "unnamed1.jpg", "unnamed2.jpeg", "unnamed3.jpeg"];
let index=0;
const imgElement= document.getElementById("img-cottage");
function plusSlides(n){
    index= (index+n+images.length)% images.length;
    imgElement.src=images[index];
}
document.addEventListener("DOMContentLoaded",function(){
    const discountButton=document.querySelector(".get-discount");
    const popup = document.getElementById("discount-form");
    const closeButton =document.querySelector(".close-btn");
    discountButton.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display="flex"
});
closeButton.addEventListener("click", function (){
    popup.style.display="none";
});
window.addEventListener("click", function(event){
    if (event.target===popup){
        popup.style.display="none";
    }
});
});
document.addEventListener("DOMContentLoaded",function(){
    const discountButton=document.querySelector(".get-discount1");
    const popup = document.getElementById("discount-form1");
    const closeButton1 =document.querySelector(".close-btn1");
    discountButton.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display="flex"
});
closeButton1.addEventListener("click", function (){
    popup.style.display="none";
});
window.addEventListener("click", function(event){
    if (event.target===popup){
        popup.style.display="none";
    }
});
});