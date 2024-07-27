function practice(){
    let num1 = 10;
    let num2 = 20;

    if(num1 > num2){
        //you will get here if the statement is true
        console.log("The num1 is greater than num2")
    }else if(num1 < num2){
        console.log("The num1 is less than num2")
    }else{
        console.log("Num1 is equal to num2")
    }
}
function checkAge(){
    // Challenge: Driving License
    // 1. Prompt the user to enter their age.
    // 2. Use an if-else statement to determine if the person can get a driving license.
    // 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
    // 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."

    let age = Number(prompt("Please enter your age."))
    if(age > 17){
        console.log("Congratulations! You can get your driver's license!")
    }else{
        console.log("Sorry, you are too young to get your driver's license.")
    }
}

function guessingGame() {
    // Exercise: Guess the Number Game
    // 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
    let answer = Math.floor(Math.random() * 11)
    // 2. Ask the user to guess the number. (prompt)
    let guess = Number(prompt("Enter the guess:"));
    // 3. Use an if-else statement to check if the user's guess is correct.
    // 4. If the guess is correct, print on the HTML "Congratulations! You guessed the number."
    // 5. If the guess is incorrect, print on the HTML "Sorry, that's not correct. The number was [generated number]".
    if (answer === guess) {

        document.getElementById("guessItem").innerHTML +=
            "Congratulations! You guessed the number."
    } else {

        document.getElementById("guessItem").innerHTML +=
            "Sorry, that's not correct. The number was " + answer + "."
    }
}

//Database simulation
let userName = "user@test.net"
let password = "Test1234"

function login(){
    //get the uname and pass from the user
    let uname = prompt("Please enter your user name.")
    let pass = prompt("Please enter your password:");
    //compare the inputs with the DB data
    if (uname==userName && pass==password){
        document.getElementById("results").innerHTML =
            "Welcome to the system " + uname;
    }else{
        document.getElementById("results").innerHTML =
            "Invalid credentials.";
    }
}