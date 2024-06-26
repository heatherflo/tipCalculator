const btnElem = document.getElementById("calculate");
const billInput = document.getElementById("amount");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal() {
  // @ts-ignore
  const amountValue = billInput.value;
  // @ts-ignore
  const tipValue = tipInput.value;
  const totalValue = amountValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2)
}

btnElem.addEventListener("click", calculateTotal)