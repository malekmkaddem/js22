const $ = selector => document.querySelector(selector);

const Calculate = evt => {

//Get user entry
const ammountInDollar = $("#userInput").value;
var euro = ammountInDollar * 0.89;
var canadian = ammountInDollar * 1.31;
var honkong = ammountInDollar * 7.80;
var japan = ammountInDollar * 108.38;
var mexican = ammountInDollar * 19.11;


//Check user entry
let isValid = true;

if (ammountInDollar== "" ) {
    $("#errorMsgA").textContent = "Please enter at least 1 digit number !";
    isValid = false;
}
else if (isNaN(ammountInDollar)){
    $("#errorMsgA").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
    isValid = false; 
}
    else{
        $("#errorMsgA").textContent = "";
        
    
    }



// cancel from calculating if any user entry is invalid
if (!isValid){
    evt.preventDefault();
    }
    else{
        $("#result1").textContent =  euro.toFixed(2);
        $("#result2").textContent =  canadian.toFixed(2);
        $("#result3").textContent =  honkong.toFixed(2);
        $("#result4").textContent =  japan.toFixed(2);
        $("#result5").textContent =  mexican.toFixed(2);
    }

}
document.addEventListener("DOMContentLoaded", () => {      
    //setting the button calculate
    $("#calculate").addEventListener("click", Calculate);
   
   
    });
    