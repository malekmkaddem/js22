
const $ = selector => document.querySelector(selector);

var numbers = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
var result ;
const product = evt => {

for (z=5;z<=numbers.length;z=z+5){
for (z in numbers){
    console.log(z)
}
  console.log(result)
    $("#product").value = result ;
    
}



};


const sum = evt => {





};

const ClearForm = () => {
    
    //Clear text boxes
    $("#product").value = "";
};

document.addEventListener("DOMContentLoaded", () => {      
    //setting the button calculate
    $("#run").addEventListener("click", product);
    $("#clear").addEventListener("click", ClearForm);
});