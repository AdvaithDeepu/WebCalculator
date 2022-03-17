let num1, num2,x,y,z;
window.onload = function () {
    document.getElementById("CI").disabled = true;
    document.body.style.backgroundColor = "#00FFEE" //initialize background color
    document.getElementById("year").addEventListener("click", function() {
       x = 1; 
    document.getElementById("CI").disabled = false;
       });
    document.getElementById("half").addEventListener("click", function() {
       x = 2;
       document.getElementById("CI").disabled = false;
       });
    document.getElementById("quart").addEventListener("click", function() {
       x = 4;
       document.getElementById("CI").disabled = false;
       });
}

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
function Exponent(){
    num1 = document.getElementById("Exp1").value;
    num2 = document.getElementById("Exp2").value;
    document.getElementById("ExpResult").innerHTML=num1+" raised to "+ num2+" is: "+num1**num2;
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
function Lemma(x,y){
    while (1==1){        
        z = x%y;
        if (z!=0){
            x = y;
            y = z;
        }else if (z==0){ 
            break;
        }
    }
    return y;
}
function HCF(){
    num1 = document.getElementById("HCF1").value;
    num2 = document.getElementById("HCF2").value;
    document.getElementById("Hresult").innerHTML= "The HCF of "+num1+" and "+num2+" is: "+Lemma(num1, num2);;
}
function LCM(){
    num1 = document.getElementById("HCF1").value;
    num2 = document.getElementById("HCF2").value;
    document.getElementById("Hresult").innerHTML= "The LCM of "+num1+" and "+num2+" is: "+((num1*num2)/Lemma(num1, num2));;
}
function ChangeColor(){ //Mood lighting code 
    document.body.style.backgroundColor = document.getElementById("colorPicker").value;
}
function SimpleInterest(){
    num1 = parseFloat(document.getElementById("principal").value);
    num2 = parseFloat(document.getElementById("rateOfI").value);
    x = (document.getElementById("time").value)/12;
    y = (((num1*num2*x)/100)+num1).toFixed(2)
    document.getElementById("SResult").innerHTML = "The amount is: "+(y)+" and the Simple Interest is: "+(y-num1).toFixed(2);
}
function CompoundInterest(){
    num1 = parseInt(document.getElementById("principal").value);
    num2 = parseInt(document.getElementById("rateOfI").value);
    y = (document.getElementById("time").value)/12;
    z = num1*(1+((num2/x)/100))**(x*y)
    document.getElementById("CResult").innerHTML = "The amount is: "+(z.toFixed(2))+" and the Simple Interest is: "+(z-num1).toFixed(2);
}

