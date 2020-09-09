import { setScreen } from "../../index.js";
class ScreenGame extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("mainScreen").content.cloneNode(true)
    );
    this.user = firebase.auth().currentUser;
    this.$displayName = this._shadowRoot.querySelector("#displayName");
    // console.log(this.$displayName);
    this.$logOut = this._shadowRoot.querySelector("#logOut");
    // console.log(this.$logOut);
    this.$playBtn = this._shadowRoot.querySelector("#playGame");
    this.$logOut.addEventListener("click", async () => {
      await firebase.auth().signOut();
      setScreen("login");
    });
    this.$playBtn.addEventListener("click", () => {
      setScreen("play");
    });
  }

  async connectedCallback() {
    if (this.user) {
      this.$displayName.innerHTML = `Hello ${this.user.displayName}`;
    }
  }
}
customElements.define("screen-game", ScreenGame);
