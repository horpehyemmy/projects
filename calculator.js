function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
def divide(x,y){
    return x / y;
}

alert("select operation.")
alert("\n1 Add");
alert("\n2 Subtract");
alert("\n3 Multiply");
alert("\n4 Divide");


choice =prompt("Enter choice(1/2/3/4): ");

var num1 = number(prompt("Enter first number: "));

var num2 = number(prompt("Enter second number: "));

if (choice == '1'){
    alert(num1,"+", num2,"=",add(num1,num2));
} 
elseif (choice == '2'){
    alert(num1,"-", num2,"=",subtract(num1,num2));
}
elseif (choice == '3'){
    alert(num1,"*", num2,"=",multiply(num1,num2));
}
elseif (choice == '4'){
    alert(num1,"/", num2,"=",add(num1,num2));
}
else:
    alert("No option selected");#project
