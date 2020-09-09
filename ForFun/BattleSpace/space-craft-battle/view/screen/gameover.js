import { setScreen } from "./../../index.js";
import { newShip } from "../../models/ship.js";

class GameoverScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("GameoverScreen").content.cloneNode(true)
    );
    this.$replay = this._shadowRoot.querySelector("#replay");
    this.$home = this._shadowRoot.querySelector("#home");
    this.$leaderboard = this._shadowRoot.querySelector("#leaderboard");
    this.$score = this._shadowRoot.querySelector("#score");
    this.$best = this._shadowRoot.querySelector("#best");

    this.$home.addEventListener("click", () => {
      setScreen("main");
    });

    this.$leaderboard.addEventListener("click", () => {
      setScreen("leaderboard");
    });

    this.$replay.addEventListener("click", () => {
      setScreen("play");
    });
  }
  async connectedCallback() {
    this.$score.innerHTML = newShip.currentScore;
    const user = firebase.auth().currentUser;
    if (!user) {
      this.$best.innerHTML = newShip.currentScore;
    } else {
      let topScore = [];
      await db
        .collection("score-board")
        .where("id", "==", user.email)
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            const item = doc.data().score;
            // console.log(item)
            topScore = [...item];
            // console.log(topScore);
          });
          let result = topScore.sort((a, b) => {return a>b});
          // console.log(result);
          this.$best.innerHTML = Math.max(...topScore);
        });
    }
  }
}
customElements.define("gameover-screen", GameoverScreen);
