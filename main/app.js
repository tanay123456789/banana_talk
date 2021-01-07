var btnTransalate=document.querySelector("#btn-transalate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


//outputDiv.innerText="Tanay Pratap"
console.log(outputDiv);

function clickHandler(){
    outputDiv.innerText="ajssjsjsj"+txtInput.value;
    
    
};


btnTransalate.addEventListener("click",clickHandler)