const elera = document.querySelector(".elera");
let position = 513;
let ladada = 681;
document.addEventListener("keydown", function (DUMBWAYSTODIE) {
  if (DUMBWAYSTODIE.key === "ArrowUp") {
    position -= 5;
    elera.style.top = position + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowDown") {
    position += 5;
    elera.style.top = position + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowLeft") {
    ladada -= 5;
    elera.style.left = ladada + "px";
  } else if (DUMBWAYSTODIE.key === "ArrowRight") {
    ladada += 5;
    elera.style.left = ladada + "px";
  }
});