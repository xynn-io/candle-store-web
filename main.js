let numberOfCandles = 1
const candlePrice = 0.39

window.onload = function (event) {
  updateNumberOfCandles()
  updateBuyButtonText()
}

function updateNumberOfCandles() {
  document.getElementById('number-of-candles').textContent = numberOfCandles
}

function updateBuyButtonText() {
  const totalPrice = candlePrice * numberOfCandles
  const text = `BUY ${numberOfCandles} FOR € ${totalPrice.toFixed(2)}`
  document.getElementById('buy-button').textContent = text
}

function handleReduceNumberOfCandles() {
  numberOfCandles--
  if (numberOfCandles < 1) numberOfCandles = 1
  updateNumberOfCandles()
  updateBuyButtonText()
}

function handleIncreaseNumberOfCandles() {
  numberOfCandles++
  updateNumberOfCandles()
  updateBuyButtonText()
}

function handleBuy() {
  const totalPrice = candlePrice * numberOfCandles;
  const text = `You will buy ${numberOfCandles} candles for € ${totalPrice.toFixed(
    2
  )}`;
  alert(text)
  numberOfCandles = 1
  updateNumberOfCandles()
  updateBuyButtonText()
}
