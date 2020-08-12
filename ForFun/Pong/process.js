import { ball, userPaddles, comPaddle, canvas } from "./object.js";

import { render } from "./graph.js";

import { run, fps } from "./index.js";

function isCollision(ball, player) {
  player.top = player.y;
  player.bottom = player.y + player.height;
  player.left = player.x;
  player.right = player.x + player.width;

  ball.top = ball.y - ball.r;
  ball.bottom = ball.y + ball.r;
  ball.left = ball.x - ball.r;
  ball.right = ball.x + ball.r;

  return (
    ball.right > player.left &&
    ball.left < player.right &&
    ball.top < player.bottom &&
    ball.bottom > player.top
  );
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 5;
  ball.velocityX = -ball.velocityX;
}

function resetPlayer() {
  userPaddles.y = canvas.height / 2 - 50;
  comPaddle.y = canvas.height / 2 - 50;
}

function update() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  if (ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
    ball.velocityY = -ball.velocityY;
  }
  let player = ball.x < canvas.width / 2 ? userPaddles : comPaddle;
  if (isCollision(ball, player)) {
    let collidePoint =
      (ball.y - (player.y + player.height / 2)) / player.height / 2;
    let direction = ball.x < canvas.width / 2 ? 1 : -1;
    ball.velocityX =
      direction * Math.cos((collidePoint * Math.PI) / 4) * ball.speed;
    ball.velocityY =
      direction * Math.sin((collidePoint * Math.PI) / 4) * ball.speed;
    ball.speed += 0.1;
  }

  if (ball.x - ball.r < 0) {
    comPaddle.score++;
    resetPlayer();
    resetBall();
  } else if (ball.x + ball.r > canvas.width) {
    userPaddles.score++;
    resetPlayer();
    resetBall();
  }

  let level = 0.1;
  comPaddle.y += (ball.y - (comPaddle.y + comPaddle.height / 2)) * level;
  if (comPaddle.score == 5 || userPaddles.score == 5) {
    clearInterval(run);
    alert(`The winner is ${comPaddle.score == 5 ? "COM" : "YOU"}`);
    resetPlayer();
    resetBall();
    comPaddle.score = 0;
    userPaddles.score = 0;
    setInterval(game, 1000 / fps);
  }
}
canvas.addEventListener("mousemove", (e) => {
  userPaddles.y = e.clientY - userPaddles.height / 2;
});
export function game() {
  update();
  render();
}
