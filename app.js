// DONE assign elements 
// DONE V1 collect user input (vers 1: by 'calculate' click
// vers 2: on final input)
// error message if inputs left empty
// calculate tip amounts/total
// display calculations
// reset function - all inputs back to 'empty'

const billTotal = document.getElementById('bill')
const tipPercent = document.querySelector('input[type="radio"]:checked')
const numberPeople = document.getElementById('people')
const calcBtn = document.getElementById('calc-btn')

calcBtn.addEventListener('click', (e) => {
    //convert bill, percentage, people value to float type var
    const bill = parseFloat(billTotal.value)
    const percent = parseFloat(tipPercent.value)
    const people = parseFloat(numberPeople.value)

    
})