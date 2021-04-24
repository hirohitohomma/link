window.onload = function() {
    setInterval(function() {
        var dd = new Date();
        document.getElementById("t3").innerHTML = dd.toLocaleString();
    }, 1000);
}