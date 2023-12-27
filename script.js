var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', splitExpenses);

var totalSplit = 0;

function splitExpenses() {
    var amount = document.getElementById('amount').value;
    var splitAmount = document.getElementById('splitAmount');
    var split = amount / 2;

    totalSplit += split;
    splitAmount.innerHTML = totalSplit.toFixed(2);
}