import { ctx, height, width } from "../view/screen/play.js";
import { Ship } from "../models/ship.js";

const craftShip = new Image();
craftShip.src =
  "https://www.shareicon.net/data/256x256/2016/04/13/749207_ufo_512x512.png";

const bonus = new Image();

bonus.src =
  "https://d1y3xtezczc6hp.cloudfront.net/wp-content/uploads/sites/3/2017/08/power-stars-f1.png";

const lightning = new Image();

lightning.src = "https://image.flaticon.com/icons/svg/758/758769.svg";
const rock = new Image();

rock.src = "https://image.flaticon.com/icons/svg/3413/3413211.svg";

const double = new Image();

double.src = "https://freeiconshop.com/wp-content/uploads/edd/gift-flat.png";

// Define enemy
class Enemy {
  constructor(x, y, velY, exist) {
    this.x = x;
    this.y = y;
    this.velY = velY;
    this.exist = exist;
  }
}

// Define rock
class Rock extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.color = "red";
    this.size = 40;
    this.blood = 10;
    this.damage = 1;
  }

  draw() {
    ctx.drawImage(
      rock,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

// Define spacecraft
class Craft extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.blood = 10;
    this.damage = 1;
    this.size = 35;
    this.color = "yellow";
  }

  draw() {
    ctx.drawImage(
      craftShip,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

// Define lightning
class Lightning extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.damage = 1;
    this.color = "blue";
    this.size = 15;
  }

  draw() {
    ctx.drawImage(
      lightning,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

// Bonus

class Bonus extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.size = 10;
    this.color = "green";
  }

  draw() {
    ctx.drawImage(
      bonus,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

class Double extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.size = 20;
    this.color = "green";
  }

  draw() {
    ctx.drawImage(
      double,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

export { Rock, Craft, Lightning, Bonus, Double };
