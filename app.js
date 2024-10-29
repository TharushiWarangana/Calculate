
function calculate(){
    let n1=Number( document.getElementById("num1").value);
    let n2=Number( document.getElementById("num2").value);
    let op= document.getElementById("operator").value;
    let output1= document.getElementById("Output1");
    let output2= document.getElementById("Output2");
    let output3= document.getElementById("Output3");
    let tot= document.getElementById("Total");
let final=0;
switch(op){
    case "+": console.log(n1+n2);
    final=n1+n2
    break;
    case "-": console.log(n1-n2);
    final=n1-n2
    break;
    case "*" :console.log(n1*n2);
    final=n1*n2
    break;
    case "/": console.log(n1/n2);
    final=n1/n2
    break;
    }

    tot.innerHTML="Answer = "+final 

    console.log("Number 1:"+n1);
    console.log("Number 2:"+n2);
    console.log("Operator:"+op);    
    console.log(" Number 1 : "+n1+" Number 2 : "+n2+" Operator : "+op);

    output1.innerHTML="First number : "+n1 
    output2.innerHTML="Second number : "+n2
    output3.innerHTML="Operator : "+op

}
