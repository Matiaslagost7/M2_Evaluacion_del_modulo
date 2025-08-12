document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
