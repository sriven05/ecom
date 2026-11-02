function searchEvents() {
    var word = document.getElementById("searchBox").value.toLowerCase();
    var items = document.getElementsByClassName("event"), count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].innerText.toLowerCase().includes(word)) {
            items[i].style.display = "block"; count++;
        } else items[i].style.display = "none";
    }
    document.getElementById("message").innerText = count + " milestone(s) found.";
}
function showAll() {
    var items = document.getElementsByClassName("event");
    for (var i = 0; i < items.length; i++) items[i].style.display = "block";
    document.getElementById("searchBox").value = "";
    document.getElementById("message").innerText = "All milestones are displayed.";
}
