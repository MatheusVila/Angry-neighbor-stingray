document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("audio");
    let button = document.getElementById("playPause");

    button.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            button.textContent = "IP BLOCKED BY Stingray Group";
        } else {
            audio.pause();
            button.textContent = "IP BLOCKED BY Stingray Group";
        }
    });
});
