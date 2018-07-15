function calculateBillTotal(preTaxAndTipAmount) {
  let tax = preTaxAndTipAmount * .095;
  let tip = preTaxAndTipAmount * .15;
  return preTaxAndTipAmount + tax + tip;
}
