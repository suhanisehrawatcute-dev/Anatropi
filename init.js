const elera = document.querySelector(".elera");
const tellerPath = document.querySelector(".tellerpath");
const background = document.querySelector(".town-start");
const fortune = document.querySelector(".fortune");
const TOBEORNOTTOBE = document.querySelector(".TO-BE-OR-NOT-TO-BE");
const choiceContainer = document.querySelector("#choices-choices-choices");
const button = document.createElement("button");
const second = document.createElement("button");
const oohooh = document.createElement ("button");
const whatchaon = document.createElement ("button");
whatchaon.textContent = "How can I fulfill what the stars expect of me?";
whatchaon.style.display = "none";
choiceContainer.appendChild(whatchaon);
const GOTTACATCHEMALL = document.querySelector("#that-is-the-question");
const continueText = document.querySelector(".dialouge-arrow");
button.textContent = "What's ephemera?";
second.textContent = "So...I heard something.";
oohooh.textContent = "You got prophecy? ehehheheh";
oohooh.style.display = "none";
button.style.display = "none";
second.style.display = "none";
choiceContainer.appendChild(button);
choiceContainer.appendChild(second);
choiceContainer.appendChild (oohooh);
choiceContainer.appendChild (whatchaon);
choiceContainer.style.display = "none";
let dialogueStage = 0;
let talkingToFortune = false;
let i = 0;
let typing = false;
let choicesShown = false;
let message = "You, Elera, can choose to be an emphemera...";

function typewriter() {
  if (i < message.length) {
    GOTTACATCHEMALL.textContent += message[i];
    i++;
    setTimeout(typewriter, 50);
  } else {
    continueText.textContent = "PRESS SPACE TO CONTINUE";
    typing = false;
  }
}

let changingMap = false;

function checkTellerPath() {
  if (changingMap) return;
  const eleraBox = elera.getBoundingClientRect();
  const exitBox = tellerPath.getBoundingClientRect();
  const overlapping =
    eleraBox.right > exitBox.left &&
    eleraBox.left < exitBox.right &&
    eleraBox.bottom > exitBox.top &&
    eleraBox.top < exitBox.bottom;

  if (overlapping) {
    changingMap = true;
    background.style.backgroundImage = 'url("https://plain-apac-prod-public.komododecks.com/202610/20/nBnvbF298y9z5LUCLkcV/image.png")';
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
      ladada = 1364;
    }
    elera.style.left = ladada + "px";
  }

  checkTellerPath();
  checkFortune();
});

function checkFortune() {
  const eleraBox = elera.getBoundingClientRect();
  const tellerBox = fortune.getBoundingClientRect();
  const overlapping =
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
    GOTTACATCHEMALL.textContent = "";
    choiceContainer.style.display = "none";
    button.style.display = "none";
    second.style.display = "none";
    i = 0;
    typing = true;
    typewriter();
  }
}
document.addEventListener("keydown", function (event){
  if (event.code === "Space" && !typing && talkingToFortune) {
    event.preventDefault();
    continueText.textContent = "";
    GOTTACATCHEMALL.textContent = "";
    if (dialogueStage === 0) {
      choiceContainer.style.display = "flex";
      button.style.display = "inline-block";
      second.style.display = "inline-block";
      oohooh.style.display = "none";
      whatchaon.style.display = "none";
      choicesShown = true;
    } else if (dialogueStage === 1){
      choiceContainer.style.display = "flex";
      button.style.display = "none";
      second.style.display = "none";
      oohooh.style.display = "inline-block";
      whatchaon.style.display = "none";
      dialogueStage = 2;
    }else if (dialogueStage === 2){
        choiceContainer.style.display = "flex";
      button.style.display = "none";
      second.style.display = "none";
      oohooh.style.display = "none";
      whatchaon.style.display = "inline-block";
    }
    else if (dialogueStage === 3) {
      message = "Goodbye little ephemeron, just remember that the line between saving a world and ruling it is thinner than you think...";
      dialogueStage = 4;
      i = 0;
      GOTTACATCHEMALL.textContent = "";
      typing = true;
      typewriter();
    }
    else if (dialogueStage === 4) {
      document.querySelector(".prophecy").style.display = "none";
      background.style.backgroundImage = 'url("https://plain-apac-prod-public.komododecks.com/202610/20/nBnvbF298y9z5LUCLkcV/image.png")';
      elera.style.display = "block";
      document.querySelector (".knight-uno").style.display = "block";
      document.querySelector (".knight-two").style.display = "block";
      document.querySelector (".young-girl").style.display = "block";
      talkingToFortune = false;
    }
  }
});

choiceContainer.addEventListener("click", function (event) {
choiceContainer.style.display="none";
  if (event.target === second || event.target === button) {
   if (event.target === second) {
    message = "Heard what? There are many things to hear, the birdsong, the laughter, the shrieks of your worst enemies. Just joking!";}
   else {
    message = "You're a curious one, Elera. Emphemera are things that do not last...";}
    dialogueStage = 1;}
    else if (event.target === oohooh) {
      message = "A prophecy? Oh little ephemeron... anyone can see you are destined for something far bigger than yourself";
      dialogueStage = 2;}
      else if (event.target === whatchaon) {
        message = "You must start here in this very town, correct the wrong in this town and the world. That is how you will fulfill your destiny."
      dialogueStage = 3;
      }
      else{
        return;}
        i=0;
        GOTTACATCHEMALL.textContent = "";
        typing = true;
        typewriter();
      });