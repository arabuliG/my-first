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
