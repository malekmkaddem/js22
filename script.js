
document.write( "<strong style='color:red;font-family: Times New Roman,sans-serif;'>xy </strong>");
document.write( "<strong style='color:blue;font-family:Arial,sans-serif;'>12 </strong>");
document.write( "<strong style='color:green;font-family:Impact,sans-serif;'>89cc</strong>");


    
document.getElementById("calculate").onclick = function(){
var num1 = document.getElementById("firstNum").value;
var num2 = document.getElementById("secondNum").value;
var num3 = document.getElementById("thirdNum").value; 
    
    if (num1 >= 0 && num2 >= 0 && num3 >= 0){
        console.log("ok");
    }
    else {
        console.log("not a nymber");
    }
}

    
    

