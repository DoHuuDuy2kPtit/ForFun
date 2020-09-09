class TopPlayer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("topPlayer").content.cloneNode(true)
    );
    this.$rank = this._shadowRoot.getElementById("rank");
    this.$player = this._shadowRoot.getElementById("player");
    this.$score = this._shadowRoot.getElementById("score");
  }
  static get observedAttributes() {
    return ["rank", "player", "score"];
  }

  set rank(newval) {
    this.setAttribute("rank", newval);
  }
  get rank() {
    return this.getAttribute("rank");
  }

  set player(newval) {
    this.setAttribute("player", newval);
  }
  get player() {
    return this.getAttribute("player");
  }

  set score(newval) {
    this.setAttribute("score", newval);
  }
  get score() {
    return this.getAttribute("score");
  }

  connectedCallback() {
    this.$rank.innerHTML = this.rank;
    this.$player.innerHTML = this.player;
    this.$score.innerHTML = this.score;
  }
}

customElements.define("top-player", TopPlayer);
