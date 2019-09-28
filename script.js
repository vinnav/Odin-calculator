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
    let one = document.createTextNode("1");
    document.getElementById("resultP").appendChild(one);
}

function twoFunction(){
    let two = document.createTextNode("2");
    document.getElementById("resultP").appendChild(two);
}

function threeFunction(){
    let three = document.createTextNode("3");
    document.getElementById("resultP").appendChild(three);
}

function fourFunction(){
    let four = document.createTextNode("4");
    document.getElementById("resultP").appendChild(four);
}

function fiveFunction(){
    let five = document.createTextNode("5");
    document.getElementById("resultP").appendChild(five);
}

function sixFunction(){
    let six = document.createTextNode("6");
    document.getElementById("resultP").appendChild(six);
}

function sevenFunction(){
    let seven = document.createTextNode("7");
    document.getElementById("resultP").appendChild(seven);
}

function eightFunction(){
    let eight = document.createTextNode("8");
    document.getElementById("resultP").appendChild(eight);
}

function nineFunction(){
    let nine = document.createTextNode("9");
    document.getElementById("resultP").appendChild(nine);
}

function zeroFunction(){
    let zero = document.createTextNode("0");
    document.getElementById("resultP").appendChild(zero);
}

function mplusFunction(){


}

function percentFunction(){
    alert("percent");
}

function divisionFunction(){
    alert("division");
}

function multiplyFunction(){
    alert("multiply");
}

function minusFunction(){
    alert("minus");
}

function plusFunction(){
    let plusStatus = true;
    let firstValue = document.getElementById("resultP").textContent;
    cancelFunction();
}

function dotFunction(){
    let dot = document.createTextNode(".");
    document.getElementById("resultP").appendChild(dot);
}

function equalFunction(){

//    secondValue = document.getElementById("resultP").textContent;
  //  let total = 0;
    //if(plusStatus==true){
  //      total = parseInt(firstValue) + parseInt(secondValue);
   //     alert(total);
   // }


}