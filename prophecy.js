const stanzas = document.querySelectorAll(".script p");
const continueButton = document.querySelector("#continueButton");
const nextButton = document.querySelector("#nextButton");
const endingScene = document.querySelector("#endingScene");
const script = document.querySelector(".script");
const heading = document.querySelector("h1");
let currentStanza = 0;
stanzas[currentStanza].style.display = "block";
continueButton.addEventListener("click", function() {
    if (currentStanza === stanzas.length - 1) {
        stanzas.forEach(function(stanza) {
            stanza.style.display = "none";
        });
        currentStanza = 0;
        stanzas[currentStanza].style.display = "block";
        continueButton.textContent = "Reveal";
        nextButton.style.display = "none";
        return;
    }
    stanzas[currentStanza].style.display = "none";
    currentStanza = currentStanza + 1;
    stanzas[currentStanza].style.display = "block";
    if (currentStanza === stanzas.length - 1) {
        continueButton.textContent = "Re-read";
        nextButton.style.display = "inline-block";
    }
});
nextButton.addEventListener("click", function() {
    script.style.display = "none";
    continueButton.style.display = "none";
    nextButton.style.display = "none";
    heading.style.display = "none";
    endingScene.style.display = "block";
});