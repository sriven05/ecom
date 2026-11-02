function createPlan() {
    var channels = document.getElementsByName("channel"), chosen = [];
    for (var i = 0; i < channels.length; i++) {
        if (channels[i].checked) chosen.push(channels[i].value);
    }
    document.getElementById("summary").innerText =
        "Product: " + document.getElementById("product").value +
        "\nAudience: " + document.getElementById("audience").value +
        "\nGoal: " + document.getElementById("goal").value +
        "\nBudget: Rs. " + document.getElementById("budget").value +
        "\nChannels: " + chosen.join(", ");
}
function clearPlan() {
    document.getElementById("product").value = "";
    document.getElementById("audience").value = "";
    document.getElementById("budget").value = "";
    document.getElementById("summary").innerText = "Campaign summary appears here.";
    var boxes = document.getElementsByName("channel");
    for (var i = 0; i < boxes.length; i++) boxes[i].checked = false;
}
