import { game } from "./process.js";

export let fps = 50;

export let run = setInterval(game, 1000 / fps);
