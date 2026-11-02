function addTouchpoint() {
    var name = document.getElementById("customer").value;
    var stage = document.getElementById("stage").value;
    var notes = document.getElementById("notes").value;
    if (name == "" || notes == "") {
        alert("Enter customer name and notes."); return;
    }
    var item = document.createElement("li");
    item.innerText = name + " - " + stage + ": " + notes;
    document.getElementById("log").appendChild(item);
    document.getElementById("customer").value = "";
    document.getElementById("notes").value = "";
}
function clearEntries() {
    document.getElementById("log").innerHTML = "";
}
