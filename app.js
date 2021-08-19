const initialPrice = document.querySelector('#initial-price');
const stockQuantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#current-price');
const tellMeBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output');

tellMeBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateStockProfitAndLoss(ip, qty, curr);
}

function calculateStockProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`Oh!!😮 the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey 😎 the profit is ${profit} and the percent is ${profitPercentage}%`);
    } else {
        showOutput(`no pain no gain and no gain no pain 🙂`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}