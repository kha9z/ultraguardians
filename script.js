
//Komma vidare från startskärm
console.log(document.getElementById("startBtn"));

document.getElementById("startBtn").addEventListener('click', function () {
    document.getElementById("startScreen").classList.add("hideScreen");

    // // Felsökning
    // console.log ('click');
    // console.log(document.getElementById("startBtn"));
    // console.log(document.getElementById("startScreen").classList);
});