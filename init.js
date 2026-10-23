const elera = document.querySelector(".elera");
const tellerPath = document.querySelector(".tellerpath");
const background = document.querySelector(".town-start");
const fortune = document.querySelector(".fortune");
const TOBEORNOTTOBE = document.querySelector (".TO-BE-OR-NOT-TO-BE");
const choiceContainer = document.querySelector ("#choices-choices-choices");
const button = document.createElement("button");
const second = document.createElement ("button");
const GOTTACATCHEMALL = document.querySelector("#that-is-the-question")
const continueText = document.querySelector (".dialouge-arrow")
button.textContent = "What's ephemera?"
second.textContent = "So...I heard something."
choiceContainer.appendChild(button);
choiceContainer.appendChild(second);
choiceContainer.style.display = "none";
let talkingToFortune = false;
let i = 0;
let typing = false;
const message = "You, Elera, can choose to be an emphemera...";
function typewriter() {
  if (i < message.length) {
    GOTTACATCHEMALL.textContent += message[i]
    i++;
    setTimeout(typewriter, 50);}
    else {
      continueText.textContent = "PRESS SPACE TO CONTINUE";
    typing = false;}
  }
let changingMap = false;
function checkTellerPath () {
  if (changingMap) return;
  const eleraBox = elera.getBoundingClientRect ();
  const exitBox = tellerPath.getBoundingClientRect ();
  const overlapping =
  eleraBox.right > exitBox.left &&
  eleraBox.left < exitBox.right &&
  eleraBox.bottom > exitBox.top &&
  eleraBox.top < exitBox.bottom;
  if (overlapping) {
    changingMap = true;
    background.style.backgroundImage ='url("https://plain-apac-prod-public.komododecks.com/202610/20/nBnvbF298y9z5LUCLkcV/image.png")';
    ladada = 0;
    elera.style.left = ladada + "px";
    position = 284;
    elera.style.top = position + "px";
    changingMap = false;
  }
}
let position = 513;
let ladada = 681;
document.addEventListener("keydown", function (DUMBWAYSTODIE) {
  if (DUMBWAYSTODIE.key === "ArrowUp") {
    position -= 5;
      if (position < 0) {
      position = 0;
    }
    elera.style.top = position + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowDown") {
    position += 5;
    if (position > 533) {
      position = 533;
    }    
    elera.style.top = position + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowLeft") {
    ladada -= 5;
    if (ladada < 0) {
      ladada = 0;

    }
    elera.style.left = ladada + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowRight") {
    ladada += 5;
    if (ladada > 1364) {
      ladada = 1364;}
    elera.style.left = ladada + "px";
  }
checkTellerPath();
checkFortune ();
});
function checkFortune () {
   const eleraBox =
    elera.getBoundingClientRect();
  const tellerBox = fortune.getBoundingClientRect();
  const overlapping=
  eleraBox.right > tellerBox.left &&
  eleraBox.left < tellerBox.right &&
  eleraBox.bottom > tellerBox.top &&
  eleraBox.top < tellerBox.bottom;

  if (overlapping && !talkingToFortune) {
    talkingToFortune = true;
  elera.style.display = "none";
  background.style.backgroundImage =
'url("https://media.istockphoto.com/id/1390072590/photo/creepy-room-and-silhouette-witch-and-crow.jpg?s=612x612&w=0&k=20&c=Nv8h4nL50PwnYW1yvjSxwAkhJTFziwlhDuEzgye4zI8=")';
const prophecy = document.querySelector(".prophecy");
prophecy.style.display = "block";
GOTTACATCHEMALL.textContent ="";
i = 0;
typing = true;
typewriter();
}}
document.addEventListener("keydown", function (event) {
if (event.code === "Space" && !typing && talkingToFortune) {
if (choiceContainer.style.display !== "flex"){
 event.preventDefault();
GOTTACATCHEMALL.textContent = "";
continueText.textContent = "";
choiceContainer.style.display = "flex";
}
}
});