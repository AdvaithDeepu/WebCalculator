let num1, num2,x,y,z;
window.onload = function() {
    var mybutton = document.getElementById("topBtn");
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
    };
    document.getElementById("CI").disabled = true;
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
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//<Calculator>
$(document).ready(function() {
    $(".calc").click(function() {
        var value = $(this).val();
        document.getElementById("cl").innerHTML+=value;
    });
});
function Evaluate(){
    document.getElementById("cl").innerHTML = Function("return "+document.getElementById("cl").innerHTML)();
}
function Back(){
    document.getElementById("cl").innerHTML = (document.getElementById("cl").innerHTML).slice(0, -1);
}

function Clear(){
    document.getElementById("cl").innerHTML = '';
}
//</Calculator>
function Exponent(){
    num1 = document.getElementById("Exp1").value;
    num2 = document.getElementById("Exp2").value;
    document.getElementById("ExpResult").innerHTML=num1+" raised to "+ num2+" is: "+num1**num2;
}
function SquareRoot(){
    num1 = document.getElementById("fInput").value;
    document.getElementById("fResult").innerHTML = "Square root of "+num1+" is "+Math.sqrt(num1).toFixed(2);
}
function CubeRoot(){
    num1 = document.getElementById("fInput").value;
    document.getElementById("fResult").innerHTML = "Cube root of "+num1+" is "+Math.cbrt(num1).toFixed(2);
}
function Factor(){
    y = [];
    num1 = document.getElementById("fInput").value;
    for (x=1; x<(num1+1); x++){
        if (num1%x==0){
            y.push(x);
        }
    }
    document.getElementById("fResult").innerHTML= "The factors of "+num1+" are: "+y;
}
function Prime(){
    num1=document.getElementById("fInput").value;
    let x = 2
    if (num1!= 0 && num1!=1){
       while (num1%x!=0){
         x+=1
       }
        if (num1%x ==0 && x<(Math.sqrt(num1))+1 &&num1!= 2){
            document.getElementById("fResult").innerHTML= num1+" is a Composite number"
        }else{
            document.getElementById("fResult").innerHTML= num1+" is a Prime number"
        }
    }else{
        document.getElementById("fResult").innerHTML= num1+" is neither Prime nor Composite"
    }
}
function Lemma(x,y){
    if (x<y){
        [x,y]=[y,x];
    }while (x%y !== 0){        
            [x,y]=[y,x%y]
            }return y;
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
function ChangeColor(){ //*legacy* Mood lighting code 
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
function AreaTriHeron(){
    num1 = parseInt(document.getElementById("side1").value);
    num2 = parseInt(document.getElementById("side2").value);
    x = parseInt(document.getElementById("side3").value);
    y = (num1+num2+x)/2
    z = Math.sqrt(y*(y-num1)*(y-num2)*(y-x)).toFixed(2)
    document.getElementById("triHeronArea").innerHTML = "The area of the triangle is: "+z+"cm²";
}
function AreaTriBase(){
    num1 = parseInt(document.getElementById("triBase").value);
    num2 = parseInt(document.getElementById("triHeight").value);
    document.getElementById("triBaseArea").innerHTML = "The area of the triangle is: "+((1/2)*num1*num2).toFixed(2);
}
function AreaParallelogram(){
    num1 = parseInt(document.getElementById("pBase").value);
    num2 = parseInt(document.getElementById("pHeight").value);
    document.getElementById("paraArea").innerHTML = "The area of the parallelogram is: "+num1*num2;
}
function AreaRectangle(){
    num1 = parseInt(document.getElementById("rLength").value);
    num2 = parseInt(document.getElementById("rBreadth").value);
    document.getElementById("rArea").innerHTML = "The area of the rectangle is: "+num1*num2;
}
function AreaSquare(){
    num1 = document.getElementById("sSide").value;
    document.getElementById("sArea").innerHTML = "The area of the square or rhombus is: "+ num1*num1;    
}
function AreaCircle(){
    num1 = document.getElementById("aRadius").value;
    document.getElementById("cArea").innerHTML = "The Area of the circle is: "+(Math.PI*(num1**2)).toFixed(2);
}
function PeriTriangle(){
    num1 = parseInt(document.getElementById("pSide1").value);
    num2 = parseInt(document.getElementById("pSide2").value);
    x = parseInt(document.getElementById("pSide3").value);
    document.getElementById("pTriangle").innerHTML = "The perimeter of the triangle is: "+(num1+num2+x);
}
function PeriRectangle(){
    num1 = parseInt(document.getElementById("pLength").value);
    num2 = parseInt(document.getElementById("pBreadth").value);
    document.getElementById("pRect").innerHTML = "The perimeter of the rectangle is: "+2*(num1+num2);
}
function PeriSquare(){
    num1 = document.getElementById("pSide").value;
    document.getElementById("pSquare").innerHTML = "The perimeter of the square/rhombus is: "+4*num1;
}
function CircumCircle(){
    num1 = document.getElementById("pRadius").value;
    document.getElementById("CircumCircle").innerHTML = "The Circumference of the circle is: "+ (2*Math.PI*num1).toFixed(2);
}
function PeriRegular(){
    num1 = document.getElementById("pReguLength").value;
    num2 = document.getElementById("pReguNum").value;
    if (num2 >=3){
        document.getElementById("pRegular").innerHTML = "The perimeter of the regular polygon is: "+num1*num2;
    }else if (num2 < 3){
        alert("Number of sides cannot be less than 3. Try Again!")
    }    
}
function VolCuboid(){
    num1 = parseInt(document.getElementById("vLength").value);
    num2 = parseInt(document.getElementById("vBreadth").value);
    x = parseInt(document.getElementById("vHeight").value);
    document.getElementById("vCuboid").innerHTML = "The volume of the cuboid is: "+num1*num2*x;
}
function VolCube(){
    num1 = document.getElementById("vSide").value;
    document.getElementById("vCube").innerHTML = "The Volume of the Cube is: "+ num1**3;
}
function VolCylinder(){
    num1 = document.getElementById("vCylRadius").value;
    num2 = document.getElementById("vCylHeight").value;
    document.getElementById("vCylinder").innerHTML = "The Volume of the cylinder is: "+(Math.PI*num1*num1*num2).toFixed(2);
}
function VolCone(){
    num1 = document.getElementById("vConeRadius").value;
    num2 = document.getElementById("vConeHeight").value;
    document.getElementById("vCone").innerHTML = "The Volume of the Cone is: "+((1/3)*Math.PI*num1**2*num2).toFixed(2);
}
function VolSphere(){
    num1 = document.getElementById("vSphRadius").value;
    document.getElementById("vSphere").innerHTML = "The Volume of the Sphere is: "+((4/3)*Math.PI*num1**3).toFixed(2);
}
function VolHemi(){
    num1 = document.getElementById("vHemiRadius").value;
    document.getElementById("vHemi").innerHTML = "The Volume of the Sphere is: "+((2/3)*Math.PI*num1**3).toFixed(2);
}
function TSACuboid(){
    num1 = parseInt(document.getElementById("sLength").value);
    num2 = parseInt(document.getElementById("sBreadth").value);
    x = parseInt(document.getElementById("sHeight").value);
    document.getElementById("sCuboid").innerHTML = "The Total Surface area of the cuboid is: "+2*(num1*num2+num2*x+num1*x);
}
function CSACuboid(){
    num1 = parseInt(document.getElementById("sLength").value);
    num2 = parseInt(document.getElementById("sBreadth").value);
    x = parseInt(document.getElementById("sHeight").value);
    document.getElementById("sCuboid").innerHTML = "The Curved Surface area of the cuboid is: "+(2*x*(num1+num2));
}
function TSACube(){
    num1 = parseInt(document.getElementById("surfaceSide").value);
    document.getElementById("sCube").innerHTML = "The Total Surface area of the cube is: "+6*num1**2;
}
function CSACube(){
    num1 = parseInt(document.getElementById("surfaceSide").value);
    document.getElementById("sCube").innerHTML = "The Curved Surface area of the cube is: "+ 4*num1**2;
}
function TSACylinder(){
    num1 = parseInt(document.getElementById("sCylRadius").value);
    num2 = parseInt(document.getElementById("sCylHeight").value);
    document.getElementById("sCylinder").innerHTML = "The Total Surface area of the cylinder is: "+(2*Math.PI*num1*(num1+num2)).toFixed(2);
}
function CSACylinder(){
    num1 = parseInt(document.getElementById("sCylRadius").value);
    num2 = parseInt(document.getElementById("sCylHeight").value);
    document.getElementById("sCylinder").innerHTML = "The Curved Surface area of the cylinder is: "+(2*Math.PI*num1*num2).toFixed(2);
}
function TSACone(){
    num1 = parseInt(document.getElementById("sConeRadius").value);
    num2 = parseInt(document.getElementById("sConeHeight").value);
    x = Math.sqrt(num1**2+num2**2)
    document.getElementById("sCone").innerHTML = "The Total Surface area of the cone is: "+(Math.PI*num1*(num1+x)).toFixed(2);
}
function CSACone(){
    num1 = parseInt(document.getElementById("sConeRadius").value);
    num2 = parseInt(document.getElementById("sConeHeight").value);
    x = Math.sqrt(num1**2+num2**2)
    document.getElementById("sCone").innerHTML = "The Curved Surface area of the cone is: "+(Math.PI*num1*x).toFixed(2);
}
function TSASphere(){
    num1 = parseInt(document.getElementById("sSphRadius").value);
    document.getElementById("sSphere").innerHTML = "The Total Surface area of the sphere is: "+(4*Math.PI*num1**2).toFixed(2);
}
function TSAHemi(){
    num1 = parseInt(document.getElementById("sHemiRadius").value);
    document.getElementById("sHemi").innerHTML = "The Total Surface area of the Hemisphere is: "+(3*Math.PI*num1**2).toFixed(2);
}
function CSAHemi(){
    num1 = parseInt(document.getElementById("sHemiRadius").value);
    document.getElementById("sHemi").innerHTML = "The Curved Surface area of the Hemisphere is: "+(2*Math.PI*num1**2).toFixed(2);
}
function MTable(){
    num1 = document.getElementById("table1").value;
    num2 = parseInt(document.getElementById("table2").value)+1;
    x = [];
    for (y=1; y<num2 ;y++){
        x.push(num1+" x "+y+" = "+(num1*y))
    }
    z = "<ul>";
    for (y = 0; y < x.length; y++) {
    z += "<li>" + x[y] + "</li>";
    }
    z += "</ul>";
    document.getElementById("scroll").scrollIntoView()
    document.getElementById("TableResult").innerHTML = z;
}
function STable(){
    y = document.getElementById("table1").value;
    num2 = parseInt(document.getElementById("table2").value)+1;
    if (num2<y){
        alert("The starting number cannot be higher than ending number.")
    }else{
        x = [];
        for (y; y<num2 ;y++){
            x.push(y+" x "+y+" = "+(y**2))
        }
        z = "<ul>";
        for (y = 0; y < x.length; y++) {
        z += "<li>" + x[y] + "</li>";
        }
        z += "</ul>";
        document.getElementById("scroll").scrollIntoView()
        document.getElementById("TableResult").innerHTML = z;
    }
}
function Solution(){
    roots = QFormula();
    if (roots[0]== 'NaN'){
        document.getElementById("split").innerHTML="No Real Roots"

    }else{
        document.getElementById("split").innerHTML= "The roots of equation are:- "+roots[0]+" and "+roots[1];
    }
}
function QFormula(){
    x = document.getElementById("xsq").value;
    if (x==''){
        x = 1;
    }
    y = document.getElementById("x").value;
    z = document.getElementById("const").value;
    num1 = (-(y)+Math.sqrt((y**2)-(4*x*z)))/(2*x);
    num2 = (-(y)-Math.sqrt((y**2)-(4*x*z)))/(2*x); 
    return [num1,num2];
}
function MTS(){
    // roots = QFormula()
    // num1 = document.getElementById("xsq").value;
    // num2 = document.getElementById("x").value;
    // x = document.getElementById("const").value;
    // z =num1+""
    // document.getElementById("split").innerHTML=z;
    document.getElementById("split").innerHTML="Coming soon!"
}
