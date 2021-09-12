'use strict'

/* define properties */
const bill = document.getElementById('bill')
const qtyPeople = document.getElementById('people')
const btnCalculate = document.getElementById('calculate')
const groupBtnPercent = document.querySelector('.group-button')
const contentResult = document.querySelector('.result-template')

let tipAmout = 0.0
let percent = 0.0
let total = 0.0
let buttons = []
let currentButton = 0

btnCalculate.addEventListener('click', () => {
  if(btnCalculate.textContent === "RESET"){
    resetData()
    removeActiveButtons(buttons)
  } else {
    getTipAmount()
    getTotal()
  }

  showResultsTemplate()
  total?btnCalculate.innerText = "RESET" : btnCalculate.innerText = "CALCULATE"
})

groupBtnPercent.addEventListener('click', event => {
  buttons = event.path[1].children
  currentButton = event.target

  removeActiveButtons(buttons)
  buttonActive(currentButton)

  percent = event.target.value
})

function removeActiveButtons(buttons){
  Array.from(buttons).forEach((button) => {
    button.classList.remove('bg-red')
  })
}

function buttonActive(currentButton){
  currentButton.classList.add('bg-red')
}

function resetData(){
  tipAmout = 0.0
  percent = 0.0
  total = 0.0
  bill.value = 0
  qtyPeople.value = 0
}

function getTipAmount(){
  tipAmout = bill.value * percent / qtyPeople.value
}

function getTotal(){
  total = bill.value / qtyPeople.value + tipAmout
}

function showResultsTemplate(){
  contentResult.innerHTML = `
    <div class="calculator-container">
      <div class="description">
        <p>Tip Amount</p>
        <p>/ person</p>
      </div>
      <p class="amount-result">${tipAmout.toFixed(2)}</p>
    </div>
    <div class="calculator-container">
      <div class="description">
        <p>Total</p>
        <p>/ person</p>
      </div>
      <p class="amount-result">${total.toFixed(2)}</p>
    </div>
  `
}

window.addEventListener('load', () => {
  showResultsTemplate()
})