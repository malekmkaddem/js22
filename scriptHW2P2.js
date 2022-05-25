const $ = selector => document.querySelector(selector);

const Calculate = evt => {
//get user entry
const num1 = $("#firstNum").value;
const num2 = $("#secondNum").value;
const num3 = $("#thirdNum").value;
var sum = +num1 + +num2 + +num3;
var average = Math.trunc (+num1 + +num2 + +num3) / 3;
var product = num1 * num2 * num3;
var smallest = Math.min(num1, num2, num3);
var largest = Math.max(num1, num2, num3);
console.log(sum)
console.log(product)
console.log(average)
console.log(smallest)
console.log(largest)
//Check user entry
let isValid = true;

if (num1== "" ) {
    $("#errorMsg1").textContent = "Number 1 is requiered";
    isValid = false;
}
else if (isNaN(num1)){
    $("#errorMsg1").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
    isValid = false; 
}
    else{
        $("#errorMsg1").textContent = "";
        
    
    }

    if (num2 == "" ) {
        $("#errorMsg2").textContent = "Number 2 is requiered";
        isValid = false;
    }
    else if (isNaN(num2)){
        $("#errorMsg2").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
        else{
            $("#errorMsg2").textContent = "";
        }

        if (num3 == "" ) {
            $("#errorMsg3").textContent = "Number 3 is requiered";
            isValid = false;
        }
        else if (isNaN(num3)){
            $("#errorMsg3").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
            isValid = false; 
        }
            else{
                $("#errorMsg3").textContent = "";
            }

// cancel from calculating if any user entry is invalid
if (!isValid){
evt.preventDefault();
}
else{
    $("#lblsum").textContent =  " Sum : " + sum;
    $("#lblaverage").textContent =  " Average : " + average;
    $("#lblproduct").textContent =  " Product : " + product;
    $("#lblmin").textContent =  " Smallest Number :" + smallest;
    $("#lblmax").textContent =  " Largest Number :" + largest;
}
};

//This clears the 3 input boxes
const ClearForm = () => {

    //Clear text boxes
    $("#firstNum").value = "";
    $("#secondNum").value = "";
    $("#thirdNum").value = "";
    //Clear all Results and reset results
    $("#lblsum").textContent = " Sum : ";
    $("#lblaverage").textContent = " Average : ";
    $("#lblproduct").textContent = " Product : ";
    $("#lblmin").textContent = " Smallest Number : ";
    $("#lblmax").textContent = " Largest Number : ";
  
    
    
    $("#firstNum").focus(); 
}





document.addEventListener("DOMContentLoaded", () => {      
//setting the button calculate
$("#calculate").addEventListener("click", Calculate);
$("#clear").addEventListener("click", ClearForm);
$("#firstNum").focus();
});
