"use strict";
import { Rock, Craft, Lightning, Bonus, Double } from "../../models/enemies.js";
import { newShip, Ship, Bullet } from "../../models/ship.js";
import { isCollided } from "../../controllers/isCollided.js";
import { setScreen } from "../../index.js";
import { updateScore } from "../../controllers/play.js";
export const width = 600;
export const height = window.innerHeight;

// const app = document.getElementById("app");

// Set up canvas
const canvas = document.querySelector("canvas");
canvas.height = height;
canvas.width = width;
export const ctx = canvas.getContext("2d");

export const scoreBoard = document.getElementById("score");
export const bloodBoard = document.getElementById("blood");

document.addEventListener("mousemove", (e) => {
  if (e.target === canvas) {
    newShip.x = e.offsetX;
    newShip.y = e.offsetY;
    if (newShip.x - newShip.size <= 0) {
      newShip.x = 0;
    }
    if (newShip.x + newShip.size >= width) {
      newShip.x = width;
    }
    if (newShip.y - newShip.size <= 0) newShip.y = newShip.size;
    if (newShip.y + newShip.size >= height) newShip.y = height - newShip.size;
  }
});

let step = 1;
let universe = [];
let count = 0;
let speed = 2;
let difficult = 0.02;
let heart = [
  '<i class="fas fa-heart"></i>',
  '<i class="fas fa-heart"></i>',
  '<i class="fas fa-heart"></i>',
  '<i class="fas fa-heart"></i>',
  '<i class="fas fa-heart"></i>',
];

let img = new Image();
img.src =
  "https://i.pinimg.com/originals/17/2b/0e/172b0eb9874db3c04104c9f5f0589a90.jpg";

// init();

function init() {
  render();
}

function render() {
  update();
  draw();

  let run = requestAnimationFrame(render);
  if (newShip.blood === 0) {
    cancelAnimationFrame(run);
    newShip.currentScore = newShip.score;
    updateScore(newShip.currentScore);
    setScreen("gameover");
    document.getElementById("playScreen").classList.add("d-none");
    newShip.blood = 5;
    universe = [];
    count = 0;
    speed = 2;
    difficult = 0.02;
    heart = [
      '<i class="fas fa-heart"></i>',
      '<i class="fas fa-heart"></i>',
      '<i class="fas fa-heart"></i>',
      '<i class="fas fa-heart"></i>',
      '<i class="fas fa-heart"></i>',
    ];
    newShip.score = 0;
    newShip.x = width / 2;
    newShip.y = height - 40;
    bloodBoard.innerHTML = heart.join("");
    newShip.speed = 10;
    step = 1;
  }
}

function update() {
  newShip.score += step;
  scoreBoard.innerHTML = `Score: ${newShip.score}`;
  if (newShip.score % 4000 === 0) {
    speed++;
    difficult += 0.03;
    newShip.speed += 1;
  }
  universe = universe.filter((enemy) => enemy.exist === true);
  universe.forEach((enemy) => {
    if (isCollided(newShip, enemy)) {
      if (enemy instanceof Bonus || enemy instanceof Double) {
        if (newShip.level < 4 && enemy instanceof Bonus) {
          newShip.level++;
          enemy.exist = false;
        } else {
          enemy.exist = false;
        }
        if (enemy instanceof Double) {
          if (heart.length < 5) {
            heart.push('<i class="fas fa-heart"></i>');
            bloodBoard.innerHTML = heart.join("");
            newShip.blood += 1;
            step++;
          }
          enemy.exist;
        }
      } else {
        newShip.blood -= enemy.damage;
        newShip.level = 1;
        enemy.exist = false;
        heart.pop();
        bloodBoard.innerHTML = heart.join("");
      }
    }
    enemy.update();
  });
  newShip.bullets.forEach((bullet) => {
    universe.forEach((enemy) => {
      if (isCollided(bullet, enemy)) {
        if (enemy instanceof Bonus || enemy instanceof Lightning);
        else {
          enemy.blood -= bullet.damage;
          if (enemy.blood == 0) enemy.exist = false;
          newShip.score += 5;
        }
      }
    });
    bullet.move();
  });
  if (count == 10) {
    newShip.shoot();
    count = 0;
  }
  count++;
  let chance = Math.random();
  if (chance < difficult) {
    const num = Math.floor(Math.random() * 4);
    if (num === 0) {
      const rock = new Rock(random(width), 20, speed, true);
      universe.push(rock);
    } else if (num === 1) {
      const craft = new Craft(random(width), 20, speed, true);
      universe.push(craft);
    } else if (num === 2) {
      const lightning = new Lightning(random(width), 20, speed, true);
      universe.push(lightning);
    }
    if (num === 3 && newShip.level < 4 && newShip.score % 10 === 0) {
      const bonus = new Bonus(random(width), 20, 2, true);
      universe.push(bonus);
    }
    if (newShip.score % 100 === 0) {
      const double = new Double(random(width), 20, 2, true);
      universe.push(double);
    }
  }
}

function draw() {
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);
  newShip.render();

  newShip.bullets.forEach((bullet) => {
    bullet.render();
  });
  universe.map((item) => {
    item.draw();
  });
}

function random(num) {
  return Math.floor(Math.random() * num);
}

export { init };
