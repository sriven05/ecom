function showModel(model) {
    var text = "";
    if (model == "B2B") {
        text = "Seller: Wholesaler | Buyer: Retailer | Example: 100 laptops supplied to a shop.";
    } else if (model == "B2C") {
        text = "Seller: Online store | Buyer: Customer | Example: Customer buys a mobile phone.";
    } else {
        text = "Seller: One person | Buyer: Another person | Example: Used bicycle sold through a marketplace.";
    }
    document.getElementById("result").innerText = text;
}
