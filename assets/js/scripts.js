function geetingsQuantity() {
    let quantityNumber = document.getElementById("quantity-selector").value

    let finalPrice = quantityNumber * 400000

    if (isNaN(quantityNumber)) {
        alert("Debe ingresar un valor numérico.")
        document.getElementById('quantity').innerText = "Cantidad: Inválida."
        return false
    } else {
        document.getElementById('total').innerText = "Total: $" + finalPrice.toLocaleString('en-US').replaceAll(',', '.')
        document.getElementById('quantity-selector').value = "Cantidad"
        document.getElementById('quantity').innerText = "Cantidad: " + quantityNumber
    }
}

function geetingsColor() {
    let colorSelected = document.getElementById("userInputColor").value
    if (colorSelected == "white") {
        document.querySelector('.color-circle').style.background = "white"
        document.querySelector('.color-circle').style.border = "solid black"
    }
    else if (colorSelected == "gray") {
        document.querySelector('.color-circle').style.background = "gray"
        document.querySelector('.color-circle').style.border = "solid gray"
    }    
    else if (colorSelected == "blue") {
        document.querySelector('.color-circle').style.background = "blue"
        document.querySelector('.color-circle').style.border = "solid blue"
    }
    else if (colorSelected == "red") {
        document.querySelector('.color-circle').style.background = "red"
        document.querySelector('.color-circle').style.border = "solid red"
    }
    else if (colorSelected == "yellow") {
        document.querySelector('.color-circle').style.background = "yellow"
        document.querySelector('.color-circle').style.border = "solid yellow"
    }
    else if (colorSelected == "black") {
        document.querySelector('.color-circle').style.background = "black"
        document.querySelector('.color-circle').style.border = "solid black"
    }
    else if (colorSelected == "brown") {
        document.querySelector('.color-circle').style.background = "brown"
        document.querySelector('.color-circle').style.border = "solid brown"
    }
    else if (colorSelected == "orange") {
        document.querySelector('.color-circle').style.background = "orange"
        document.querySelector('.color-circle').style.border = "solid orange"
    }
    else if (colorSelected == "magenta") {
        document.querySelector('.color-circle').style.background = "magenta"
        document.querySelector('.color-circle').style.border = "solid magenta"
    }
    else if (colorSelected == "violet") {
        document.querySelector('.color-circle').style.background = "violet"
        document.querySelector('.color-circle').style.border = "solid violet"
    }
    else if (colorSelected == "pink") {
        document.querySelector('.color-circle').style.background = "pink"
        document.querySelector('.color-circle').style.border = "solid pink"
    }
}

function clearValue() {
    document.getElementById('quantity-selector').value = ""
}
