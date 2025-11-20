document.getElementById("infoBtn").addEventListener('click', function () {
    document.getElementById("infOverlay").classList.add("showScreen")
});

document.getElementById("infoReturnBtn").addEventListener('click', function () {
    document.getElementById("infOverlay").classList.remove("showScreen")
    document.getElementById("infOverlay").classList.add("hideScreen")
});