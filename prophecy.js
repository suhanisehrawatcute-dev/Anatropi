
const stanzas = document.querySelectorAll(".script p");
const continueButton = document.querySelector("#continueButton");

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
        return;
    }

    stanzas[currentStanza].style.display = "none";

    currentStanza = currentStanza + 1;

    stanzas[currentStanza].style.display = "block";

    if (currentStanza === stanzas.length - 1) {
        continueButton.textContent = "Re-read";
    }
});