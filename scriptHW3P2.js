const $ = selector => document.querySelector(selector);

const CalculateTotal = evt => {
    //get user entry
    const name = $("#nameInput").value;
    const item1 = $("#itm1").value;
    const item2 = $("#itm2").value;
    const item3 = $("#itm3").value;
    const item4 = $("#itm4").value;
    var TotalQty1 = (20.99 *item1) ;
    var TotalQty2 = (12.75*item2) ;
    var TotalQty3 =(9.95*item3);
    var TotalQty4 =(35.89*item4);
    var totalAmnountSold = (20.99 *item1) + (12.75*item2) +(9.95*item3)+ (35.89*item4);
    var totalWeekly = 250 + totalAmnountSold;


     //Check user entry for name
let isValid = true;

if (name == "" ) {
    $("#errormsg").textContent = "Name is required , Please enter a Name!";
    isValid = false;
}
else if (!isNaN(name)){
    $("#errormsg").textContent = "No Numbers Allowed ! (Unless you are 007 Agent !)";
    isValid = false; 
}

    else{
        $("#errormsg").textContent = "";
        
    }

     //Check user entry for item1 qty
     if (item1 == "" ) {
        $("#errorMsg1").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(item1)){
        $("#errorMsg1").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (item1 < 0 ) {
        $("#errorMsg1").textContent = "Quantity can not be negative ! Do we owe you ?";
        isValid = false; 
    }
    
        else{
            $("#errorMsg1").textContent = "";
            
        }

        //Check user entry for item2 qty
     if (item2 == "" ) {
        $("#errorMsg2").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(item2)){
        $("#errorMsg2").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (item2 < 0 ) {
        $("#errorMsg2").textContent = "Quantity can not be negative ! Do we owe you ?";
        isValid = false; 
    }
    
        else{
            $("#errorMsg2").textContent = "";
            
        }

        //Check user entry for item3 qty
     if (item3 == "" ) {
        $("#errorMsg3").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(item3)){
        $("#errorMsg3").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (item3 < 0 ) {
        $("#errorMsg3").textContent = "Quantity can not be negative ! Do we owe you something?";
        isValid = false; 
    }
    
        else{
            $("#errorMsg3").textContent = "";
            
        }
    
//Check user entry for item 4 qty
if (item4 == "" ) {
    $("#errorMsg4").textContent = "Please enter a number";
    isValid = false;
}
else if (isNaN(item4)){
    $("#errorMsg4").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
    isValid = false; 
}
else if (item4 < 0 ) {
    $("#errorMsg4").textContent = "Quantity can not be negative ! Do we owe you ?";
    isValid = false; 
}

    else{
        $("#errorMsg4").textContent = "";
        
    }


// cancel from calculating if any user entry is invalid
if (!isValid){
    evt.preventDefault();
    }
    else{
       
        $("#fn1").value =  item1 ;
        $("#fn2").value =  item2 ;
        $("#fn3").value =  item3 ;
        $("#fn4").value =  item4 ;
        
    
        $("#total1").value=  TotalQty1.toFixed(2) ;
        $("#total2").value =  TotalQty2.toFixed(2) ;
        $("#total3").value = TotalQty3.toFixed(2) ;
        $("#total4").value =  TotalQty4.toFixed(2) ;

        $("#totalAmount").value =  "Total Amount : " + totalAmnountSold.toFixed(2) ;
        $("#totalWeekly").value = "Weekly Earning:" +  totalWeekly.toFixed(2) ;

    }

};

  //This clears the 4 input boxes
  const ClearForm = () => {
    
    //Clear text boxes
    $("#nameInput").value = "";
    $("#itm1").value = "";
    $("#itm2").value = "";
    $("#itm3").value = "";
    $("#itm4").value = "";

    $("#total1").value = "";
    $("#total2").value = "";
    $("#total3").value = "";
    $("#total4").value = "";

    
    $("#errorMsg1").textContent = "";
    $("#errorMsg2").textContent = "";
    $("#errorMsg3").textContent = "";
    $("#errorMsg4").textContent = "";
  
    
    
    $("#name").focus(); 
}

document.addEventListener("DOMContentLoaded", () => {      
    //setting the button calculate
    $("#calculate").addEventListener("click", CalculateTotal);
    $("#clear").addEventListener("click", ClearForm);
    $("#nameInput").focus();
    });



