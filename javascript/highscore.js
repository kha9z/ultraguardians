const gameOverButton = document.getElementById('gameOverButton');
const playerNameInput = document.getElementById('playerName');
const KEY = 'highscores';

//Ändra knapp beroende på om spelaren skrivit något eller inte
playerNameInput.addEventListener('input', () => {
    if (playerNameInput.trim() === '') {
        gameOverButton.textContent = "Återgå till Start"
    } else { gameOverButton.textContent = "Återgå & Skicka"
}

//To do: Kanske ha kod för att hindra förändring av knappen då spelare inte har nog hög poäng för att komma med på toplistan? 

});

//Klick på återgå knapp
gameOverButton.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    if (name == '') return;
    
    let highscores = JSON.parse(localStorage.getItem(KEY)) || [];
  
    //lägg namnet till arrayen
    highscores.unshift(name);

    //lägg till sortering efter score här, väntar på att poäng är en variabel vi kan använda.


    //Korta ner highscores till 5 entries
    if (highscores.length > 5) {
        highscores.splice(5, highscores.length)
    }

    //skicka tillbaka listan till 
    localStorage.setItem(KEY, JSON.stringify(highscores));

    //Nollställ input
    playerNameInput.value = '';

    //Visa ny highscore
    showHighscore();
});


//funktion för att printa score
function showHighscore() {
    const highscores = JSON.parse(localStorage.getItem(KEY)) || [];
    const highscoreList = document.getElementById("highscore");

    highscoreList.innerHTML = ""; // rensa listan först

    highscores.forEach((name) => {
        const spelare = document.createElement("li");
        spelare.textContent = name;
        highscoreList.appendChild(spelare);
    });
}


//Visa highscore då sidan laddas
showHighscore();