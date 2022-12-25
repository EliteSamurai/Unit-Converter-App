const convertBtn = document.getElementById("convert-btn")
let numBox = document.getElementById("number-box")
const group1 = document.getElementById("group-1")
const group2 = document.getElementById("group-2")
const group3 = document.getElementById("group-3")

convertBtn.addEventListener("click", function convertUnits() {
    let gallon = Number(numBox.value) / 3.785
    let liters = Number(numBox.value) * 3.785
    let kilos = Number(numBox.value) / 2.205
    let pounds = Number(numBox.value) * 2.205
    let feet = Number(numBox.value) * 3.281
    let meters = Number(numBox.value) / 3.281
    // if (typeof numBox.value == 'string' || numBox.value === '' || numBox.value == 0) {
    //     alert("Please Put In A Valid Number");
    //   return false;
    // } else {
    //     console.log("valid number")
    // }
    if (isNaN(numBox.value) === false || numBox.value === '') {
        console.log("continue")
    } else {
        alert("Please Put In A Valid Number");
        return false
    }
    let firstGroup = group1.innerHTML = `<p>${numBox.value} meters = ${feet.toFixed(3)} feet | ${numBox.value} feet = ${meters.toFixed(3)} meters</p>`
    let secondGroup = group2.innerHTML = `<p>${numBox.value} liters = ${gallon.toFixed(3)} gallons | ${numBox.value} gallons = ${liters.toFixed(3)} liters</p>`
    let thirdGroup = group3.innerHTML = `<p>${numBox.value} kilos = ${pounds.toFixed(3)} pounds | ${numBox.value} pounds = ${kilos.toFixed(3)} kilos</p>`
    numBox.value = ''
})




