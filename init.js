const elera = document.querySelector(".elera");
const tellerPath = document.querySelector(".tellerpath");
const background = document.querySelector(".town-start");
const fortune = document.querySelector(".fortune");
const TOBEORNOTTOBE = document.querySelector (".TO-BE-OR-NOT-TO-BE");
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
   const eleraBox = elera.getBoundingClientRect();
  const tellerBox = fortune.getBoundingClientRect();
  const overlapping=
  eleraBox.right > tellerBox.left &&
  eleraBox.left < tellerBox.right &&
  eleraBox.bottom > tellerBox.top &&
  eleraBox.top < tellerBox.bottom;

  if (overlapping) {
  elera.style.display = "none";
  background.style.backgroundImage =
'url("https://media.istockphoto.com/id/1390072590/photo/creepy-room-and-silhouette-witch-and-crow.jpg?s=612x612&w=0&k=20&c=Nv8h4nL50PwnYW1yvjSxwAkhJTFziwlhDuEzgye4zI8=")';
const prophecy = document.querySelector(".prophecy");
prophecy.style.display = "block";}}
TOBEORNOTTOBE.addEventListener("click", function (){
  
});