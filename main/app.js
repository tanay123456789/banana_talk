var btnTransalate=document.querySelector("#btn-transalate");
var txtInput=document.querySelector("#txt-input");

console.log(txtInput);
function clickHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
};


btnTransalate.addEventListener("click",clickHandler)