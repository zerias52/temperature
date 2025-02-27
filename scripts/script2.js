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
    const celsiusRadio = document.getElementById("celsiusRadio");
    const fahrenheitRadio = document.getElementById("fahrenheitRadio");
    if (celsiusRadio.checked){
        var celsius = Number(prompt("Enter the temperature in Celsius:"));
        var fahrenheit = (celsius * 9/5) + 32;

    }else if (fahrenheitRadio.checked){
        var fahrenheit = Number(prompt("Enter the temperature in Fahrenheit:"));
        var celsius = (fahrenheit - 32) * 5/9;

    }
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
    const minTemp = -20;
    const maxTemp = 120;

    const percentage = ((fahrenheit - minTemp) / (maxTemp - minTemp)) * 100;
    return Math.min(100, Math.max(0, percentage));
}

function convertTemperatureRange() {
    const rangeStart = Number(prompt("Enter your starting temperature:"));
    const rangeEnd = Number(prompt("Enter your ending temperature:"));
    const celsiusRadio = document.getElementById("celsiusRadio");
    const fahrenheitRadio = document.getElementById("fahrenheitRadio");
    const conversionResult = document.getElementById("conversionResult");
    let cRange = []
    let fRange = []

    for (i = rangeStart; i <= rangeEnd; i++) {
        if (celsiusRadio.checked) {
            let celsius = i;
            let fahrenheit = (celsius * 9 / 5) + 32;
            cRange.push(celsius);
            fRange.push(fahrenheit);
        } else if (fahrenheitRadio.checked) {
            let fahrenheit = i
            let celsius = (fahrenheit - 32) * 5 / 9;
            cRange.push(celsius);
            fRange.push(fahrenheit);
        }
    }

    //Creating the table
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const celsiusHeader = headerRow.insertCell();
    celsiusHeader.textContent = "Celsius";
    const fahrenheitHeader = headerRow.insertCell();
    fahrenheitHeader.textContent = "Fahrenheit";

    for (let i = 0; i < cRange.length; i++) {
        const row = table.insertRow();
        const celsiusCell = row.insertCell();
        celsiusCell.textContent = cRange[i].toFixed(1);
        const fahrenheitCell = row.insertCell();
        fahrenheitCell.textContent = fRange[i].toFixed(1);
    }

  conversionResult.innerHTML = "";
  conversionResult.appendChild(table);
}