var num1 = prompt("Enter your first number:");
var num2 = prompt("Enter your second number:");
var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Multiply");

if(operation=="1"){
    var answer=Number(num1)+Number(num2);
    var operator = "+"
}else if(operation=="2"){
    var answer=Number(num1)-Number(num2);
    var operator = "-"
}else if(operation=="3"){
    var answer=Number(num1)/Number(num2);
    var operator = "/"
    if (num1==0||num2==0) {
        var answer = "0";
    }
}else if(operation=="4"){
    var answer=Number(num1)*Number(num2);
    var operator = "*"
}else{
    document.write("Please enter a valid option.")
}

document.write(num1 + " " + operator + " " + num2 + " = " + answer); //display the result
