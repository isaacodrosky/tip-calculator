// DONE assign elements 
// DONE V1 collect user input (vers 1: by 'calculate' click
// vers 2: on final input)
// error message if inputs left empty
// allow for custom tip percentage
// DONE calculate tip amounts/total
// DONE display calculations
// DONE reset function - all inputs back to 'empty'

const billTotal = document.getElementById('bill')
const tipPercent = document.querySelector('input[type="radio"]:checked')
const numberPeople = document.getElementById('people')
const calcBtn = document.getElementById('calc-btn')
const resetBtn = document.getElementById('reset-btn')
// keep consistent html vs js naming (change id names below?)
const tipPerPersonDisplay = document.getElementById('tipPerPersonDisplay')
const totalPerPersonDisplay = document.getElementById('totalPerPersonDisplay')

calcBtn.addEventListener('click', (e) => {
    //convert bill, percentage, people value to numbers
    const bill = parseFloat(billTotal.value)
    const percent = parseFloat(tipPercent.value)
    const people = parseFloat(numberPeople.value)

    //calculate per person tip and total
    const tipPerPerson = parseFloat(
        ((bill * percent) / people).toFixed(2))
    const totalPerPerson = parseFloat(
        ((bill / people) + tipPerPerson).toFixed(2))

    // update dom to display these values
    tipPerPersonDisplay.innerText = `${tipPerPerson}`
    totalPerPersonDisplay.innerText = `${totalPerPerson}`
})

resetBtn.addEventListener('click', (e) => {
    billTotal.value = ''
    tipPercent.checked = false
    numberPeople.value = ''
})