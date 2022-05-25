const $ = selector => document.querySelector(selector);

const CalculateScore = evt => {
    //get user entry
    const average = $("#avg").value;
    const midterm = $("#midt").value;
    const final = $("#fnl").value;
    const participation = $("#part").value;
    var finalAverage = (0.5 * average) + (0.2 * midterm) + (0.2 * final) + (0.1 * participation);
    
  
    //Check user entry for average
let isValid = true;

if (average == "" ) {
    $("#errorMsg1").textContent = "Please enter a number";
    isValid = false;
}
else if (isNaN(average)){
    $("#errorMsg1").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
    isValid = false; 
}
else if (average < 0 ) {
    $("#errorMsg1").textContent = "Homework Average Score range must be between 0 and 100 ! ";
    
    isValid = false;    
}
else if (average > 100 ) {
    $("#errorMsg1").textContent = "Homework Average Score range must be between 0 and 100 ! ";
    
    isValid = false;    
}
    else{
        $("#errorMsg1").textContent = "";
        
    }
       //Check user entry for midterm
    if (midterm == "" ) {
        $("#errorMsg2").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(midterm)){
        $("#errorMsg2").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (midterm < 0 ) {
        $("#errorMsg2").textContent = "Midterm Score range must be between 0 and 100 !";
        isValid = false; 
    }
    else if (midterm > 100) {
        $("#errorMsg2").textContent = "Midterm Score range must be between 0 and 100 !";
        isValid = false; 
    }
        else{
            $("#errorMsg2").textContent = "";
            
        }
        //Check user entry for final
    if (final == "" ) {
        $("#errorMsg3").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(final)){
        $("#errorMsg3").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (final < 0 ) {
        $("#errorMsg3").textContent = "Final Score range must be between 0 and 100 !";
        isValid = false; 
    }
    else if (final > 100) {
        $("#errorMsg3").textContent = "Final Score range must be between 0 and 100 !";
        isValid = false; 
    }
        else{
            $("#errorMsg3").textContent = "";
            
        }
        //Check user entry for participation
    if (participation == "" ) {
        $("#errorMsg4").textContent = "Please enter a number";
        isValid = false;
    }
    else if (isNaN(participation)){
        $("#errorMsg4").textContent = "We can't Calculate anything Rather than NUMBERS . Hmm , Interesting...";
        isValid = false; 
    }
    else if (participation < 0) {
        $("#errorMsg4").textContent = "Participation Score range must be between 0 and 100 !";
        isValid = false; 
    }
    else if (participation > 100) {
        $("#errorMsg4").textContent = "Participation Score range must be between 0 and 100 !";
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
       
        //letter graded
        if (finalAverage.toFixed(0) <= 59){
    
            $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " (F) " + " Student must retake the course";
   }
   else if (finalAverage.toFixed(0) >= 60 && finalAverage.toFixed(0) <=69){
    
    $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " (D) " + " Student must retake the course ";
}
else if (finalAverage.toFixed(0) >= 70 && finalAverage,toFixed(0) <=79){
    
    $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " (C)" ;
}
else if (finalAverage.toFixed(0) >= 80 && finalAverage.toFixed(0) <=89){
    
    $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " (B)" ;
}
else if (finalAverage.toFixed(0) >= 90 && finalAverage.toFixed(0) <= 100){
    
    $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " (A)" ;
} 
else{
    $("#textbox").textContent =  "Final Average is : " + finalAverage.toFixed(0) + " Grade unavailable. Our system was unable to generate a letter graded score at this time." ;
}
    }
    };
    
    //This clears the 4 input boxes
    const ClearForm = () => {
    
        //Clear text boxes
        $("#avg").value = "";
        $("#midt").value = "";
        $("#fnl").value = "";
        $("#part").value = "";
        $("#textbox").textContent = "";
        $("#errorMsg1").textContent = "";
        $("#errorMsg2").textContent = "";
        $("#errorMsg3").textContent = "";
        $("#errorMsg4").textContent = "";
      
        
        
        $("#avg").focus(); 
    }
    

    document.addEventListener("DOMContentLoaded", () => {      
        //setting the button calculate
        $("#calculate").addEventListener("click", CalculateScore);
        $("#clear").addEventListener("click", ClearForm);
        $("#avg").focus();
        });










































