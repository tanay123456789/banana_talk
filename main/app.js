var btnTransalate=document.querySelector("#btn-transalate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText="assffdgfggg"+txtInput.value;
    
};


btnTransalate.addEventListener("click",clickHandler)