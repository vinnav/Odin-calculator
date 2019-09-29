//selectors and events
let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", cancelFunction);

let one = document.getElementById("one");
one.addEventListener("click", oneFunction);
let two = document.getElementById("two");
two.addEventListener("click", twoFunction);
let three = document.getElementById("three");
three.addEventListener("click", threeFunction);
let four = document.getElementById("four");
four.addEventListener("click", fourFunction);
let five = document.getElementById("five");
five.addEventListener("click", fiveFunction);
let six = document.getElementById("six");
six.addEventListener("click", sixFunction);
let seven = document.getElementById("seven");
seven.addEventListener("click", sevenFunction);
let eight = document.getElementById("eight");
eight.addEventListener("click", eightFunction);
let nine = document.getElementById("nine");
nine.addEventListener("click", nineFunction);
let zero = document.getElementById("zero");
zero.addEventListener("click", zeroFunction);
let mplus = document.getElementById("mplus");
    mplus.addEventListener("click", mplusFunction);
let percent = document.getElementById("percent");
    percent.addEventListener("click", percentFunction);
let division = document.getElementById("division");
    division.addEventListener("click", divisionFunction);
let multiply = document.getElementById("multiply");
    multiply.addEventListener("click", multiplyFunction);
let minus = document.getElementById("minus");
    minus.addEventListener("click", minusFunction);
let plus = document.getElementById("plus");
    plus.addEventListener("click", plusFunction);
let dot = document.getElementById("dot");
    dot.addEventListener("click", dotFunction);
    let equal = document.getElementById("equal");
    equal.addEventListener("click", equalFunction);

let result = document.getElementsById("resultP");

//buttons functions
function cancelFunction(){
    document.getElementById("resultP").innerHTML = "";
}

function oneFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let one = document.createTextNode("1");
    document.getElementById("resultP").appendChild(one);
}

function twoFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let two = document.createTextNode("2");
    document.getElementById("resultP").appendChild(two);
}

function threeFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let three = document.createTextNode("3");
    document.getElementById("resultP").appendChild(three);
}

function fourFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let four = document.createTextNode("4");
    document.getElementById("resultP").appendChild(four);
}

function fiveFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let five = document.createTextNode("5");
    document.getElementById("resultP").appendChild(five);
}

function sixFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let six = document.createTextNode("6");
    document.getElementById("resultP").appendChild(six);
}

function sevenFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let seven = document.createTextNode("7");
    document.getElementById("resultP").appendChild(seven);
}

function eightFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let eight = document.createTextNode("8");
    document.getElementById("resultP").appendChild(eight);
}

function nineFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let nine = document.createTextNode("9");
    document.getElementById("resultP").appendChild(nine);
}

function zeroFunction(){
    if(resetDisplay){
        cancelFunction();
        resetDisplay = false;
    }
    let zero = document.createTextNode("0");
    document.getElementById("resultP").appendChild(zero);
}

var signStatus = false;
function mplusFunction(){
    //if (sign == document.createTextNode("-")){
   //     document.getElementById("resultP").innerHTML = document.getElementById("resultP").textContent.substring(1);
  //  } else {
    if(signStatus == true){
        document.getElementById("resultP").innerHTML = document.getElementById("resultP").textContent.substring(1);
        signStatus = false;
    } else {
    let sign = document.createTextNode("-");
    document.getElementById("resultP").prepend(sign);
    signStatus = true;
    }
 //   }
}

function percentFunction(){
    divisionFunction()
    document.getElementById("resultP").textContent = "100";
    equalFunction()

}


//operations
var operation;
var firstValue;
var secondValue;
var total;
var resetDisplay;

function divisionFunction(){
    operation = "division";
    resetDisplay = true;
    firstValue = document.getElementById("resultP").textContent;
}

function multiplyFunction(){
    operation = "multiply";
    resetDisplay = true;
    firstValue = document.getElementById("resultP").textContent;
}

function minusFunction(){
    operation = "minus";
    resetDisplay = true;
    firstValue = document.getElementById("resultP").textContent;
}

function plusFunction(){
    operation = "plus";
    resetDisplay = true;
    firstValue = document.getElementById("resultP").textContent;
    //alert(firstValue + " saved");

}

function dotFunction(){
    if(document.getElementById("resultP").textContent.includes(".")){

    } else {
    let dot = document.createTextNode(".");
    document.getElementById("resultP").appendChild(dot);
    }
}

function equalFunction(){
    if(operation == "plus"){
        secondValue = document.getElementById("resultP").textContent;
        total = parseFloat(firstValue)+parseFloat(secondValue);

        document.getElementById("resultP").innerHTML = total;
    }
    if(operation == "minus"){
        secondValue = document.getElementById("resultP").textContent;
        total = parseFloat(firstValue)-parseFloat(secondValue);

        document.getElementById("resultP").innerHTML = total;
    }
    if(operation == "multiply"){
        secondValue = document.getElementById("resultP").textContent;
        total = parseFloat(firstValue)*parseFloat(secondValue);

        document.getElementById("resultP").innerHTML = total;
    }
    if(operation == "division"){
        secondValue = document.getElementById("resultP").textContent;
        if(parseInt(secondValue) == 0){
            document.getElementById("resultP").innerHTML = "ERROR";
        }
        total = parseInt(firstValue)/parseInt(secondValue);
        total = total.toFixed(2);

        document.getElementById("resultP").innerHTML = total;
    }
}