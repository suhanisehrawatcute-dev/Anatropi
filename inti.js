const stars = 100;

function randomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  return [x, y];
}

for (let i = 0; i < stars; i++) {
  const star = document.createElement("div");
  star.className = "stars";

  const [x, y] = randomPosition();

  star.style.top = y + "px";
  star.style.left = x + "px";

  document.body.append(star);
}
