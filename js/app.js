'use strict'
import { showResultsTemplate } from "./template-result.js"
import { 
  removeActiveStyleButtons, addStyleActiveButton,
  getTipAmount, getTotal, validateFields
} from "./functions.js"

/* define properties */
const bill = document.getElementById('bill')
const qtyPeople = document.getElementById('people')
const btnCalculate = document.getElementById('calculate')
const groupBtnPercent = document.querySelector('.group-button')
const contentResult = document.querySelector('.result-template')
const errorBill = document.querySelector('.error-bill')
const errorPeople = document.querySelector('.error-people')

let tipAmout = 0.0
let percent = 0.0
let total = 0.0
let buttons = []
let currentButton = 0

btnCalculate.addEventListener('click', () => {
  validateFields(bill, errorBill)
  validateFields(qtyPeople, errorPeople)

  if(btnCalculate.textContent === "RESET"){
    resetData()
    removeActiveStyleButtons(buttons)
  } else {
    if(!validateFields(bill, errorBill) && !validateFields(qtyPeople, errorPeople)){
      tipAmout = getTipAmount(tipAmout, bill.value, percent, qtyPeople.value)
      total = getTotal(total, bill.value, qtyPeople.value, tipAmout)
    }
  }

  showResultsTemplate(tipAmout, total, contentResult)
  total?btnCalculate.innerText = "RESET" : btnCalculate.innerText = "CALCULATE"
})

groupBtnPercent.addEventListener('click', event => {
  buttons = event.path[1].children
  currentButton = event.target

  removeActiveStyleButtons(buttons)
  addStyleActiveButton(currentButton)

  percent = event.target.value
})

function resetData(){
  tipAmout = 0.0
  percent = 0.0
  total = 0.0
  bill.value = 0
  qtyPeople.value = 0
}

window.onload(showResultsTemplate(tipAmout, total, contentResult))