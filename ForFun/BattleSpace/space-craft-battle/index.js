// import "./view/screen/play.js";
import "./models/auth.js";
import "./view/screen/mainpage.js";
import "./view/components/form-input.js";
import "./view/components/top-player.js";
import "./view/screen/login.js";
import "./view/screen/register.js";
import "./controllers/auth.js";
import "./view/screen/fogot.js";
import "./view/screen/gameover.js";
import "./view/screen/leaderboard.js";
import { init } from "./view/screen/play.js";

const screenMap = {
  main: "<screen-game></screen-game>",
  login: "<login-screen></login-screen>",
  success: "<login-success></login-success>",
  register: "<register-screen></register-screen>",
  forgot: "<forgot-password></forgot-password>",
  play: "",
  gameover: "<gameover-screen></gameover-screen>",
  leaderboard: "<leaderboard-screen></leaderboard-screen>",
};
function setScreen(screenName) {
  document.getElementById("app").innerHTML = screenMap[screenName];
  if (screenName === "play") {
    document.getElementById("playScreen").classList.remove("d-none");
    init();
  }
}
setScreen("login");
export { setScreen };
