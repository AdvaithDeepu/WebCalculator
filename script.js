document.body.style.backgroundColor = "#00FFEE" //initialize background color
let num1, num2, color,x,y;
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
function Lemma(x, y){
    num1 = document.getElementById("HCF1").value;
    num2 = document.getElementById("HCF2").value;
    x = num1;
    y = num2;
    while (1==1){        
        rem = x%y;
        if (rem!=0){
            x = y;
            y = rem;
        }else if (rem ==0){ 
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
    let color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
}