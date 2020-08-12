import { ball, userPaddles, comPaddle, canvas, ctx } from "./object.js";

export function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

export function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

export function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = "50px fantasy";
  ctx.fillText(text, x, y);
}

export function render() {
  drawRect(0, 0, 600, 400, "black");
  drawRect(
    userPaddles.x,
    userPaddles.y,
    userPaddles.width,
    userPaddles.height,
    "white"
  );
  drawRect(
    comPaddle.x,
    comPaddle.y,
    comPaddle.width,
    comPaddle.height,
    "white"
  );

  drawCircle(ball.x, ball.y, ball.r, "white");

  for (let i = 0; i < canvas.height; i += 10) {
    drawRect(canvas.width / 2, i, 1, 5, "white");
  }

  drawText("USER", canvas.width / 4, canvas.height / 4 - 50, "white");
  drawText(
    "COM",
    (3 * canvas.width) / 4 - 100,
    canvas.height / 4 - 50,
    "white"
  );
  drawText(
    userPaddles.score,
    canvas.width / 4 + 50,
    canvas.height / 4,
    "white"
  );
  drawText(
    comPaddle.score,
    (3 * canvas.width) / 4 - 70,
    canvas.height / 4,
    "white"
  );
}
