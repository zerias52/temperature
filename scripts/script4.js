// for( let i = 0; i <= 100; i+=2){
//     console.log(i);
// }

// let students=["Mike","Brett","Kevin","Ryan","Emilio","Juan"];
//
// for(let i=0;i<=5;i+=1){
//     document.write("<p>" + students[i]+"</p>");
// }

function multiTable(){
    let num = Number(prompt("Enter a number."))
    let numStart = Number(prompt("Where should we start?"))
    let numStop = Number(prompt("Where should we stop?"))
    for(let i = numStart; i <= numStop; i++){
        console.log(i + ` x ${num} = ` + i * num)
    }
}

// create a loop that displays the numbers from 1 to 100
// the user will enter a number and the screen will write "I found it"
// instead of the number
function challenge(){
    let num = Number(prompt("Enter a number."))
    for(let i=1;i<=100; i++){
        if(i === num){
            document.write("<p>I found it!</p>")
        }else{
            document.write("<p>" + i + "</p>")
        }
    }
}


let ages =[22,35,20,43,37,33,51,27] //array
//Create a function to display the ages on the console
//Level 2: display the sum of the ages
function displayAge(){
    let total = 0
    for(i=0; i<ages.length;i++){
        total += ages[i]
    }
    let average = total/ages.length;
    console.log("Total: " + total)
    console.log("Average Age: " + average)
}
