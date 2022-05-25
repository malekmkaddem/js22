const $ = selector => document.querySelector(selector);



const SubmitForm = evt => {
     
var name = $("#name").value;
var lastname = $("#lastname").value;
var gender = $("#male").value;
var status = $("#married").value;
var favoriteL = $("#python").value;
var favoriteOs = $("#android").value;
 
let isValid = true;

   //Check user entry for name
if (name == "" ) {
    $("#errormsg").textContent = "Name is required , Please enter a Name!";
    isValid = false;
}
else if (!isNaN(name)){
    $("#errormsg").textContent = "No Numbers Allowed ! (Unless you are a 007 Agent !)";
    isValid = false; 
}

    else{
        $("#errormsg").textContent = "";
        
    }


   //Check user entry for lastname

   if (lastname == "" ) {
    $("#errormsg1").textContent = "Name is required , Please enter a Name!";
    isValid = false;
}
    else if (!isNaN(lastname)){
    $("#errormsg1").textContent = "No Numbers Allowed ! (Unless you are a 007 Agent !)";
    isValid = false; 
}

         else{
        $("#errormsg1").textContent = "";
        
    }

     
 //Check user entry for Gender

    if (gender == "" ) {
        $("#errormsg2").textContent = "Please choose at least one selection in Gender! ";
        isValid = false;
    }
        else{
            $("#errormsg2").textContent = "";
            
        }

//Check user entry for Martrial Status

if (status == "" ) {
    $("#errormsg3").textContent = "Please choose at least one selection in Martial Status!";
    isValid = false;
}
    else{
        $("#errormsg3").textContent = "";
        
    }

    //Check user entry for Checkbbox coding language
        if ( favoriteL== "" ) {
            $("#errormsg4").textContent = "Please choose at least one selection in favorite coding language ";
            isValid = false;
        }
            else{
                $("#errormsg4").textContent = "";
                
            }  

 //Check user entry for dropdown list OS
 if (favoriteOs == "" ) {
    $("#errormsg5").textContent = "Please choose at least one selection in favorite OS";
    isValid = false;
}
    else{
        $("#errormsg5").textContent = "";
        
    }  

// cancel from calculating if any user entry is invalid
if (!isValid){
    evt.preventDefault();
    }
    else{
       
        
    document.getElementById("form2").submit();

    }


};

//This clears the 4 input boxes
const ClearForm = () => {
    
    //Clear text boxes
    $("#name").value = "";
    $("#lastname").value = "";
    $("#gender").value = "";
    $("#status").value = "";
    $("#favortieL").value = "";
    $("#favortieL").value = "";
    
    
    $("#name").focus(); 
}

document.addEventListener("DOMContentLoaded", () => {      
    //setting the button calculate
    $("#submit").addEventListener("click", SubmitForm);
    $("#clear").addEventListener("click", ClearForm);
    $("#name").focus();
    });

