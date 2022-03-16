document.body.style.backgroundColor = "#00FFEE" //initialize background color
let num1, num2, color;
function addition(){
    num1 = parseInt(document.getElementById("addNum1").value);
    num2 = parseInt(document.getElementById("addNum2").value);
    document.getElementById("addResult").innerHTML = num1+" + "+num2+" = "+(num1+num2);
}
function subtraction(){
    num1 = document.getElementById("subNum1").value;
    num2= document.getElementById("subNum2").value;
    document.getElementById("subResult").innerHTML = num1+" - "+num2+" = "+(num1-num2);
}                
function multiplication(){
    num1 = document.getElementById("multNum1").value;
    num2 = document.getElementById("multNum2").value;
    document.getElementById("multResult").innerHTML = num1+" X "+num2+" = "+num1*num2;
}
function Square(){
    num1 = document.getElementById("square").value;
    document.getElementById("squareresult").innerHTML="The answer is: "+ num1*num1;
}
function Division(){
    num1 = document.getElementById("divNum1").value;
    num2 = document.getElementById("divNum2").value;
    document.getElementById("divResult").innerHTML = num1+" ÷ "+num2+" = "+num1/num2;
}
function SquareRoot(){
    num1 = document.getElementById("rootNum").value;
    document.getElementById("rootResult").innerHTML = "Square root of "+num1+" is "+Math.sqrt(num1);
}
function CubeRoot(){
    num1 = document.getElementById("rootNum").value;
    document.getElementById("rootResult").innerHTML = "Cube root of "+num1+" is "+Math.cbrt(num1)
}
function ChangeColor(){ //Mood lighting code
    let color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
}