// Global Variables

let num = ' '
let fromUnit = ' '
let toUnit = ' '
let answer = ' '

function convert() {

    num = document.getElementById('inputValue').value
    fromUnit = document.getElementById('fromUnit').value
    toUnit =  document.getElementById('toUnit').value
    let answer = ''
    
    console.log(fromUnit)
    console.log(toUnit)
    console.log(num)

    if (fromUnit === "meters") {
        if (toUnit === "kilometers") {
            answer = num / 1000
        }

        else if (toUnit === "Centimeters") {
            answer = num * 100
        }

        else if (toUnit === "Feet") {
            answer = num * 3.281
        }

        else if (toUnit === "Inches") {
            answer = num * 39.370
        }

        else {
            console.log("Same Unit")
        }
    }

    else if (fromUnit === "kilometers") {
        if (toUnit === "meters") {
            answer = num * 1000
        }

        else if (toUnit === "Centimeters") {
            answer = num * 100000
        }

        else if (toUnit === "Feet") {
            answer = num * 3280.84
        }

        else if (toUnit === "Inches") {
            answer = num * 39370.1
        }

        else {
            console.log("Same Unit")
        }
    }

    else if (fromUnit === "centimeters") {
        if (toUnit === "meters") {
            answer = num / 100
        }

        else if (toUnit === "kilometers") {
            answer = num / 100000
        }

        else if (toUnit === "Feet") {
            answer = num / 30.48
        }

        else if (toUnit === "Inches") {
            answer = num / 2.54
        }

        else {
            console.log("Same Unit")
        }
    }

    else if (fromUnit === "feet") {
        if (toUnit === "meters") {
            answer = num / 3.281
        }

        else if (toUnit === "Centimeters") {
            answer = num * 30.48
        }

        else if (toUnit === "kilometers") {
            answer = num / 3281
        }

        else if (toUnit === "Inches") {
            answer = num * 12
        }

        else {
            console.log("Same Unit")
        }
    }

    else if (fromUnit === "Inches") {
        if (toUnit === "meters") {
            answer = num / 39.37
        }

        else if (toUnit === "Centimeters") {
            answer = num * 2.54
        }

        else if (toUnit === "kilometers") {
            answer = num / 39370
        }

        else if (toUnit === "Feet") {
            answer = num / 12
        }

        else {
            console.log("Same Unit")
        }
    }

    console.log(answer)


    let display = document.getElementById('result')

    display.value = answer
    
}