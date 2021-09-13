'use strict'

const showResultsTemplate = (tipAmout, total, contentResult) => {
  contentResult.innerHTML = `
    <div class="flex flex-between">
      <div class="description">
        <p>Tip Amount</p>
        <p>/ person</p>
      </div>
      <p class="amount-result">$${tipAmout.toFixed(2)}</p>
    </div>
    <div class="flex flex-between">
      <div class="description">
        <p>Total</p>
        <p>/ person</p>
      </div>
      <p class="amount-result">$${total.toFixed(2)}</p>
    </div>
  `
}

export {showResultsTemplate}