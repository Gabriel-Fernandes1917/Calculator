//alert("welcome");

function calculatorAdd(){

    
   var valule1 = document.getElementById("Space1").value;
   var valule2 = document.getElementById("Space2").value;
   var result = parseInt(valule1) + parseInt(valule2);   

   document.querySelector('#Result').innerHTML = result;

   

}

function calculatorSub(){

   var value1 = document.getElementById("Space1").value;
   var value2 = document.getElementById("Space2").value;
   var result = value1 - value2;

   document.querySelector('#Result').innerHTML = result;


}

function calculatorMult(){

   var value1 = document.getElementById("Space1").value;
   var value2 = document.getElementById("Space2").value;
   var result = value1 * value2;
   
   document.querySelector('#Result').innerHTML = result;
}

function calculatorDiv(){

   var value1 = document.getElementById("Space1").value;
   var value2 = document.getElementById("Space2").value;
   var result = value1 / value2;

   document.querySelector('#Result').innerHTML = result;


}

function calculatorClear(){

   window.location.href = ("index.html");


}