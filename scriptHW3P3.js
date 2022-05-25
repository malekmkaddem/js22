const $ = selector => document.querySelector(selector);

const temp = $("#temp").value;

var C_F =  (9/5 * temp) + 32;
var F_C = 5/9 * (temp - 32);
//Converting from C to F
const CtoF = evt => {
     let isValid = true;
    //Check user entry for item1 qty
    
    if (isNaN(temp)){
        $("#errorMsg1").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    
        else{
            $("#errorMsg1").textContent = "";
            
        }
    

// cancel from calculating if any user entry is invalid
if (!isValid){
    evt.preventDefault();
    }
    else{
       
        $("#convertedT").value = "Temperature In F:" +  C_F.toFixed(0) ;
        console.log(C_F);
      
    
    }

};
// converting from F to C
const FtoC = evt => {
   let isValid = true;
 //Check user entry for item1 qty
 

 if (isNaN(temp)){
    $("#errorMsg1").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
    isValid = false; 
}

    else{
        $("#errorMsg1").textContent = "";
        
    }


// cancel from calculating if any user entry is invalid
if (!isValid){
evt.preventDefault();
}
else{
   
    $("#convertedT").value = "Temperature In C:" +  F_C.toFixed(0) ;
    console.log(F_C);
  

}
};


  //This clears the 2 input boxes
  const ClearForm = () => {
    
    //Clear text boxes
    $("#temp").value = "";
    $("#temp").value = "";
    
    $("#errorMsg1").textContent = "";
    $("#errorMsg2").textContent = "";

    
    $("#temp").focus(); 
}

document.addEventListener("DOMContentLoaded", () => {      
    //setting the button calculate
    $("#calculateF").addEventListener("click", CtoF);
    $("#calculateC").addEventListener("click", FtoC);
    $("#clear").addEventListener("click", ClearForm);
    $("#temp").focus();
    });

    


