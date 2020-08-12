export const canvas = document.getElementById("pong");

export const ctx = canvas.getContext("2d");

export const userPaddles = {
  x: 0,
  y: canvas.height / 2 - 50,
  width: 10,
  height: canvas.height / 4,
  score: 0,
};

export const comPaddle = {
  x: canvas.width - 10,
  y: canvas.height / 2 - 50,
  width: 10,
  height: canvas.height / 4,
  score: 0,
};

export const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: 10,
  speed: 5,
  velocityX: 5,
  velocityY: 5,
};
