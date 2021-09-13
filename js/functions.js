'use strict'

const removeActiveStyleButtons = buttons => {
  Array.from(buttons).forEach((button) => {
    button.classList.remove('bg-red')
  })
}

const addStyleActiveButton = currentButton => {
  currentButton.classList.add('bg-red')
}

const getTipAmount = (...data) => {
  data[0] = data[1] * data[2] / data[3]
  return data[0]
}

const getTotal = (...dataTotal) => {
  dataTotal[0] = dataTotal[1] / dataTotal[2] + dataTotal[3]
  return dataTotal[0]
}

const validateFields = (field, text) => {
  if(field.value == 0){
    text.innerText = "Can't be zero"
    return true
  } else {
    text.innerText = ""
    return false
  }
}

export {
  removeActiveStyleButtons,
  addStyleActiveButton,
  getTipAmount,
  getTotal,
  validateFields,
}