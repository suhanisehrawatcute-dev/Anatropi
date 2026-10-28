let good = 0;
let justice = 0;
const elera = document.querySelector(".elera");
const useWords = document.createElement("button");
const useActions = document.createElement("button");
useWords.textContent = "Leave her alone!!!";
useActions.textContent = "Punch the guard";
useWords.style.display = "none";
useActions.style.display = "none";
const tellerPath = document.querySelector(".tellerpath");
const background = document.querySelector(".town-start");
const fortune = document.querySelector(".fortune");
let prophecyRead = false;
const knightUno = document.querySelector(".knight-uno");
const knightTwo = document.querySelector(".knight-two");
const youngGirl = document.querySelector(".young-girl");
const TOBEORNOTTOBE = document.querySelector(".TO-BE-OR-NOT-TO-BE");
const choiceContainer = document.querySelector("#choices-choices-choices");
const button = document.createElement("button");
const second = document.createElement("button");
const oohooh = document.createElement ("button");
const whatchaon = document.createElement ("button");
whatchaon.textContent = "How can I fulfill what the stars expect of me?";
whatchaon.style.display = "none";
let fightingKnights = false;
let knightfightSceneDone = false;
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
choiceContainer.appendChild(useWords);
choiceContainer.appendChild(useActions);
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
  checkKnights();
});

function checkFortune() {
  const eleraBox = elera.getBoundingClientRect();
  const tellerBox = fortune.getBoundingClientRect();
  const overlapping =
    eleraBox.right > tellerBox.left &&
    eleraBox.left < tellerBox.right &&
    eleraBox.bottom > tellerBox.top &&
    eleraBox.top < tellerBox.bottom;

  if (overlapping && !talkingToFortune && !prophecyRead) {
    talkingToFortune = true;
    elera.style.display = "none";
    background.style.backgroundImage =
      'url("https://media.istockphoto.com/id/1390072590/photo/creepy-room-and-silhouette-witch-and-crow.jpg?s=612x612&w=0&k=20&c=Nv8h4nL50PwnYW1yvjSxwAkhJTFziwlhDuEzgye4zI8=")';
    const prophecy = document.querySelector(".prophecy");
prophecy.querySelector(".fortune-teller").src =
  "https://media.istockphoto.com/id/503569683/photo/terrier-dog-fortune-teller.jpg?s=612x612&w=0&k=20&c=Gij49pGtxOM5v6rnKuAD4XrFoZLVqatg83bG5AV0sv4=";    prophecy.style.display = "block";
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
  if (event.code === "Space" && !typing && fightingKnights){
    event.preventDefault();
    continueText.textContent = "";
    GOTTACATCHEMALL.textContent = "";
    choiceContainer.style.display = "flex";
    button.style.display = "none";
    second.style.display = "none";
    oohooh.style.display = "none";
    whatchaon.style.display = "none";
    useWords.style.display = "inline-block";
    useActions.style.display = "inline-block";    }
      if (event.code === "Space" && !typing && talkingToFortune && dialogueStage !==5) {
    event.preventDefault();
    choiceContainer.style.display = "none";
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
      elera.style.opacity = "1";
      document.querySelector (".knight-uno").style.display = "block";
      document.querySelector (".knight-two").style.display = "block";
      document.querySelector (".young-girl").style.display = "block";
      talkingToFortune = false;
      dialogueStage = 5;
      prophecyRead = true;
    }
  }
});


choiceContainer.addEventListener("click", function (event) {
  if (
    event.target !== useWords &&
    event.target !== useActions &&
    event.target !== second &&
    event.target !== button &&
    event.target !== oohooh &&
    event.target !== whatchaon
  ){
    return; }
    choiceContainer.style.display = "none";
if (event.target === useWords) {
  good += 5;
  justice -= 10;
  fightingKnights = false;
  knightfightSceneDone = true;
  const actualbadKnights = document.querySelector(".actualbadKnights");
  actualbadKnights.style.display = "none";
  const prophecy = document.querySelector(".prophecy");
  prophecy.querySelector(".fortune-selector").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8MVB7vUFdXwqobrXwhjfhmjaj00olenMYZYwvH13EA&s=10";
  prophecy.style.display = "block";
  message = "Why don't you join her, honey?";
  i=0;
  GOTTACATCHEMALL.textContent = "";
  typing = true;
  typewriter();
  return;
}

  if (event.target === button) {
    message = "You're a curious one, Elera. Emphemera are things that do not last...";
    dialogueStage = 1;

  } else if (event.target === second) {
    message = "Heard what? The bird song? The laughter? The shrieks of your worst enemies? Just joking.";
    dialogueStage = 1;

  } else if (event.target === oohooh) {
    message = "A prophecy? Oh little ephemeron... anyone can see you are destined for something far bigger than yourself";
    dialogueStage = 2;

  } else if (event.target === whatchaon) {
    message = "You must start here in this very town, correct the wrong in this town and the world. That is how you will fulfill your destiny.";
    dialogueStage = 3;
  }

  i = 0;
  GOTTACATCHEMALL.textContent = "";
  typing = true;
  typewriter();
});

      function checkKnights() {
        if (talkingToFortune || fightingKnights || knightfightSceneDone) return;
        const eleraBox = elera.getBoundingClientRect();
        const unoBox = knightUno.getBoundingClientRect();
        const twoBox = knightTwo.getBoundingClientRect();
        const girlBox = youngGirl.getBoundingClientRect();
      const overlapping =
      eleraBox.right > Math.min(unoBox.left, twoBox.left, girlBox.left) &&
      eleraBox.left < Math.max(unoBox.right, twoBox.right, girlBox.right) &&
      eleraBox.bottom > Math.min(unoBox.top, twoBox.top, girlBox.top) &&
      eleraBox.top < Math.max(unoBox.bottom, twoBox.bottom, girlBox.bottom);
    

      if (overlapping) {
        fightingKnights = true;
        typing = true;
        elera.style.display = "none";
        knightUno.style.display = "none";
        knightTwo.style.display = "none";
        youngGirl.style.display = "none";
        background.style.backgroundImage = 'url("https://media.istockphoto.com/id/1269719686/photo/european-medieval-or-fantasy-town-square-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=mht4VcuaDug1plQ17MIdc9lxkO1OFESqICHPJs8alwY=")';
        const actualbadKnights = document.querySelector(".actualbadknights");
        actualbadKnights.style.display = "block";
const prophecy = document.querySelector(".prophecy");
prophecy.querySelector(".fortune-teller").src = "https://therebelution.com/wp-content/uploads/2006/08/lancelot_header.jpg";
prophecy.style.display = "block";
GOTTACATCHEMALL.textContent = "";
choiceContainer.style.display = "none";
useActions.style.display = "none";
useWords.style.display = "none";
continueText.textContent = "";
message = "Don't be shy, sweetheart";
i = 0;
typing = true;
typewriter();
      }
      }