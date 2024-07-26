function multiplication(myNumber){
    document.write(myNumber * 5);
}

// multiplication(4)

function taxesCalculation(){
    var product = prompt("Enter the product's name:");
    var price = Number(prompt("Enter the price:"));
    var qty = Number(prompt("Enter the quantity:"));
    const taxes = 1.08;
    var subtotal = price*qty;
    var total = subtotal*taxes

    //document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>");
    document.getElementById("taxesResult").innerHTML+=`
        <div class="productItem">
            <p> Name: ${product} </p>
            <p> Subtotal: ${subtotal}</p>
            <p> Total: ${total}</p>
        </div>
    `;
}

function convert(){
    var celsius = Number(prompt("Enter the temperature in Celsius:"));
    var fahrenheit = (celsius * 9/5) + 32

    document.getElementById("conversionResult").innerHTML+=`
        <div class="resultSet">
            <p> Celsius: ${celsius} </p>
            <p> Fahrenheit: ${fahrenheit}</p>
            <div id="thermometer">
                <div id="mercury" style="height: ${calculateMercuryHeight(fahrenheit)}%;">
                
                </div>
            </div>
        </div>
    `;
}

function calculateMercuryHeight(fahrenheit) {
    // Set the thermometer height
    const minTemp = -20; //
    const maxTemp = 120; //

    const percentage = ((fahrenheit - minTemp) / (maxTemp - minTemp)) * 100;
    return Math.min(100, Math.max(0, percentage));
}