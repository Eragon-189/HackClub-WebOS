function updateDateTime() {
    const date = new Date();
    document.getElementById("time").innerText = date.toLocaleTimeString();
    document.getElementById("date").innerText = date.toLocaleDateString();
}
