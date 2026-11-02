function calculate() {
    var amount = Number(document.getElementById("amount").value);
    var method = document.getElementById("method").value;
    if (amount <= 0) {
        document.getElementById("result").innerText = "Enter a valid amount.";
        return;
    }
    var fee = amount * 2 / 100;
    document.getElementById("result").innerText =
        method + " payment\nFee (2%): Rs. " + fee.toFixed(2) +
        "\nTotal: Rs. " + (amount + fee).toFixed(2) +
        "\nDemo only. Do not enter real card details.";
}
