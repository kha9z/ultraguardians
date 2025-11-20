


//Komma vidare från startskärm
//To do: Gör en funktion som kollar ID på knappen som blir klickad och styr vilka vyer som är synliga istället.
document.getElementById("startBtn").addEventListener('click', function () {
    document.getElementById("startScreen").classList.add("hideScreen");
    document.getElementById("gameScreen").classList.add("showScreen");
});

//Info-knappen
document.getElementById("infoBtn").addEventListener('click', function () {
    document.getElementById("infOverlay").classList.add("showScreen")
});

document.getElementById("infoReturnBtn").addEventListener('click', function () {
    document.getElementById("infOverlay").classList.remove("showScreen")
    document.getElementById("infOverlay").classList.add("hideScreen")
});





//To do: Flytta kod här nedan vidare till en egen JS fil där Game-view koden ligger?
//tangentbordets variabler
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"];
const keyboardDiv = document.getElementById("keyboard");
const keyboardKeys = document.querySelectorAll('#gameScreen .keyboard p');

//Skapa Tangentbordets Tecken
for (let i = 0; i < letters.length; i++) {
    const p = document.createElement("p");
    p.textContent = letters[i];

    //lägg styling och listener på alla knappar. Lägg ytterligare funktionalitet under eventlistener?
    p.classList.add("keyboardBtn");
    p.addEventListener('click', function() {
    p.classList.add("activeKey");
  });

    keyboardDiv.appendChild(p);
  }