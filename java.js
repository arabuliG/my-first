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