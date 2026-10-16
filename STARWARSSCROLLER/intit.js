const stars = 100;

function randomPosition() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  };
}

for (let i = 0; i < stars; i++) {
  const star = document.createElement("div");
  star.className = "stars";

  const { x, y } = randomPosition();
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  document.body.append(star);
}