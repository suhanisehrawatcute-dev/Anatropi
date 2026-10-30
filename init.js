
let good = 0;
let justice = 0;

const elera = document.querySelector(".elera");
const knightUno = document.querySelector(".knight-uno");
const knightTwo = document.querySelector(".knight-two");
const youngGirl = document.querySelector(".young-girl");
const tellerPath = document.querySelector(".tellerpath");
const background = document.querySelector(".town-start");
const fortune = document.querySelector(".fortune");
const prophecy = document.querySelector(".prophecy");
const choiceContainer = document.querySelector("#choices-choices-choices");
const GOTTACATCHEMALL = document.querySelector("#that-is-the-question");
const continueText = document.querySelector(".dialouge-arrow");

const button = document.createElement("button");
const second = document.createElement("button");
const oohooh = document.createElement("button");
const whatchaon = document.createElement("button");
const useWords = document.createElement("button");
const useActions = document.createElement("button");

button.textContent = "What's ephemera?";
second.textContent = "So...I heard something.";
oohooh.textContent = "You got prophecy? ehehheheh";
whatchaon.textContent = "How can I fulfill what the stars expect of me?";
useWords.textContent = "Leave her alone!!!";
useActions.textContent = "Punch the guard";

const dialogueButtons = [
  button,
  second,
  oohooh,
  whatchaon,
  useWords,
  useActions
];

dialogueButtons.forEach(btn => {
  btn.style.display = "none";
  choiceContainer.appendChild(btn);
});

choiceContainer.style.display = "none";

let prophecyRead = false;
let firstOutcomedialogue = false;
let fightingKnights = false;
let knightfightSceneDone = false;
let changingMap = false;
let talkingToFortune = false;
let typing = false;
let choicesShown = false;
let dialogueStage = 0;
let i = 0;
let message = "You, Elera, can choose to be an emphemera...";
let position = 513;
let ladada = 681;
let typewriterRun = 0;

function hideChoices() {
  dialogueButtons.forEach(btn => {
    btn.style.display = "none";
  });

  choiceContainer.style.display = "none";
  choicesShown = false;
}

function showChoices(buttons) {
  hideChoices();

  choiceContainer.style.display = "flex";

  buttons.forEach(btn => {
    btn.style.display = "inline-block";
  });

  choicesShown = true;
}

function typewriter() {
  const thisRun = ++typewriterRun;

  typing = true;
  continueText.textContent = "";

  function writeNext() {
    if (thisRun !== typewriterRun) return;

    if (i < message.length) {
      GOTTACATCHEMALL.textContent += message[i];
      i++;
      setTimeout(writeNext, 50);
    } else {
      typing = false;
      continueText.textContent = "PRESS SPACE TO CONTINUE";
    }
  }

  writeNext();
}

function setDialogue(text) {
  message = text;
  i = 0;
  GOTTACATCHEMALL.textContent = "";
  typewriter();
}

function overlaps(elementA, elementB) {
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();

  return (
    a.width > 0 &&
    a.height > 0 &&
    b.width > 0 &&
    b.height > 0 &&
    a.right > b.left &&
    a.left < b.right &&
    a.bottom > b.top &&
    a.top < b.bottom
  );
}
function checkTellerPath() {
  if (changingMap || talkingToFortune || fightingKnights) return;

  if (overlaps(elera, tellerPath)) {
    changingMap = true;

    background.style.backgroundImage =
      'url("https://plain-apac-prod-public.komododecks.com/202610/20/nBnvbF298y9z5LUCLkcV/image.png")';

    ladada = 0;
    position = 284;

    elera.style.left = ladada + "px";
    elera.style.top = position + "px";

    changingMap = false;
  }
}

function checkFortune() {
  if (
    talkingToFortune ||
    prophecyRead ||
    fightingKnights ||
    knightfightSceneDone
  ) return;

  if (!overlaps(elera, fortune)) return;

  talkingToFortune = true;
  elera.style.display = "none";

  background.style.backgroundImage =
    'url("https://media.istockphoto.com/id/1390072590/photo/creepy-room-and-silhouette-witch-and-crow.jpg?s=612x612&w=0&k=20&c=Nv8h4nL50PwnYW1yvjSxwAkhJTFziwlhDuEzgye4zI8=")';

  prophecy.querySelector(".fortune-teller").src =
    "https://media.istockphoto.com/id/503569683/photo/terrier-dog-fortune-teller.jpg?s=612x612&w=is&k=20&c=BVJSsX0piLnxXdLgsHvo4SxA0lb4vD0C4kJrW2j-9mw=";

  prophecy.style.display = "block";

  hideChoices();
  dialogueStage = 0;

  setDialogue(
    "You, Elera, can choose to be an emphemera..."
  );
}

function checkKnights() {
  if (
    talkingToFortune ||
    fightingKnights ||
    knightfightSceneDone ||
    elera.style.display === "none"
  ) return;

  const visible = element =>
    getComputedStyle(element).display !== "none" &&
    element.getBoundingClientRect().width > 0 &&
    element.getBoundingClientRect().height > 0;

  const collision =
    (visible(knightUno) && overlaps(elera, knightUno)) ||
    (visible(knightTwo) && overlaps(elera, knightTwo)) ||
    (visible(youngGirl) && overlaps(elera, youngGirl));

  if (!collision) return;
  fightingKnights = true;
  elera.style.display = "none";

  knightUno.style.display = "none";
  knightTwo.style.display = "none";
  youngGirl.style.display = "none";

  background.style.backgroundImage =
    'url("https://media.istockphoto.com/id/1269719686/photo/european-medieval-or-fantasy-town-square-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=mht4VcuaDug1plQ17MIdc9lxkO1OFESqICHPJs8alwY=")';

  const actualbadKnights =
    document.querySelector(".actualbadknights");

  actualbadKnights.style.display = "block";

  prophecy.querySelector(".fortune-teller").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3coUR_HnNaGAs5mGRYv3qq_VNPzFtztFleKwBcowkA&s=10";

  prophecy.style.display = "block";

  hideChoices();

  setDialogue("Don't be shy, sweetheart");
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (typing) {
      event.preventDefault();
      return;
    }

    if (talkingToFortune) {
      event.preventDefault();

      if (choicesShown) return;

      continueText.textContent = "";
      GOTTACATCHEMALL.textContent = "";

      if (dialogueStage === 0) {
        showChoices([button, second]);
      } else if (dialogueStage === 1) {
        showChoices([oohooh]);
      } else if (dialogueStage === 2) {
        showChoices([whatchaon]);
      } else if (dialogueStage === 3) {
        dialogueStage = 4;

        setDialogue(
          "Goodbye little ephemeron, just remember that the line between saving a world and ruling it is thinner than you think..."
        );
      } else if (dialogueStage === 4) {
        prophecy.style.display = "none";

        background.style.backgroundImage =
          'url("https://plain-apac-prod-public.komododecks.com/202610/20/nBnvbF298y9z5LUCLkcV/image.png")';

        elera.style.display = "block";
        elera.style.opacity = "1";

        knightUno.style.display = "block";
        knightTwo.style.display = "block";
        youngGirl.style.display = "block";

        talkingToFortune = false;
        prophecyRead = true;
        dialogueStage = 5;

        GOTTACATCHEMALL.textContent = "";
        continueText.textContent = "";
        hideChoices();
      }

      return;
    }

    if (fightingKnights) {
      event.preventDefault();

      if (choicesShown) return;

      showChoices([useWords, useActions]);
      continueText.textContent = "";
      return;
    }

    if (firstOutcomedialogue) {
      event.preventDefault();
      firstOutcomedialogue = false;

      GOTTACATCHEMALL.textContent = "";
      continueText.textContent = "";

      showChoices([useWords, useActions]);
      return;
    }

    return;
  }
  if (
    talkingToFortune ||
    fightingKnights ||
    knightfightSceneDone ||
    typing ||
    elera.style.display === "none"
  ) return;

  if (event.key === "ArrowUp") {
    position = Math.max(0, position - 5);
  } else if (event.key === "ArrowDown") {
    position = Math.min(533, position + 5);
  } else if (event.key === "ArrowLeft") {
    ladada = Math.max(0, ladada - 5);
  } else if (event.key === "ArrowRight") {
    ladada = Math.min(1364, ladada + 5);
  } else {
    return;
  }

  event.preventDefault();

  elera.style.top = position + "px";
  elera.style.left = ladada + "px";

  checkKnights();

  if (fightingKnights) return;

  checkFortune();

  if (talkingToFortune) return;

  checkTellerPath();
});
choiceContainer.addEventListener("click", function (event) {
  const selected = event.target;

  if (!dialogueButtons.includes(selected)) return;

  if (selected === useActions || selected === useWords) {
    if (!fightingKnights) return;

    fightingKnights = false;
    knightfightSceneDone = true;

    hideChoices();

    const actualbadKnights =
      document.querySelector(".actualbadknights");

    actualbadKnights.style.display = "none";

    if (selected === useActions) {
      good -= 10;
      justice += 5;

      prophecy.querySelector(".fortune-teller").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExrkYNyzGC31vcfYlXJ_eYD62SiVqrwEBqM8oRBs4Hw&s=10";

      setDialogue(
        "You punch the first knight and quickly get into a brawl. The girl runs away."
      );
    } else {
      good += 5;
      justice -= 10;

      prophecy.querySelector(".fortune-teller").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8MVB7vUFdXwqobrXwhjfhmjaj00olenMYZYwvH13EA&s=10";

      setDialogue("Why don't you join her, honey?");
    }

    prophecy.style.display = "block";
    firstOutcomedialogue = true;
    return;
  }

  if (!talkingToFortune || typing) return;

  hideChoices();

  if (selected === button) {
    setDialogue(
      "You're a curious one, Elera. Emphemera are things that do not last..."
    );
    dialogueStage = 1;
  } else if (selected === second) {
    setDialogue(
      "Heard what? The bird song? The laughter? The shrieks of your worst enemies? Just joking."
    );
    dialogueStage = 1;
  } else if (selected === oohooh) {
    setDialogue(
      "A prophecy? Oh little ephemeron... anyone can see you are destined for something far bigger than yourself"
    );
    dialogueStage = 2;
  } else if (selected === whatchaon) {
    setDialogue(
      "You must start here in this very town, correct the wrong in this town and the world. That is how you will fulfill your destiny."
    );
    dialogueStage = 3;
  }
});