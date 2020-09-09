import { setScreen } from "./../../index.js";
import { login } from "../../controllers/auth.js";
class LoginScreen extends HTMLElement {
  constructor() {
    super();
    this.key = this.attachShadow({ mode: "open" });
    this.key.appendChild(
      document.getElementById("loginScreen").content.cloneNode(true)
    );
    this.$form = this.key.querySelector("#form-login");
    this.$email = this.$form.querySelector('form-input[name="email"]');
    this.$password = this.$form.querySelector('form-input[name="password"]');
    this.key.querySelector("#linkToRegister").addEventListener("click", () => {
      setScreen("register");
    });
    this.key
      .querySelector("#linkToForgotpassword")
      .addEventListener("click", () => {
        setScreen("forgot");
      });
    this.key.querySelector("#play").addEventListener("click", (e) => {
      setScreen("play");
    });
    this.$form.addEventListener("submit", async (event) => {
      event.preventDefault();
      await this.login();
    });
  }
  async login() {
    const email = this.$email.value;
    const password = this.$password.value;
    const result = await login(email, password);
    console.log(result);
    if (result.hasError) {
      if (result.error instanceof Object) {
        this.$email.error = result.error.email;
        this.$password.error = result.error.password;
      } else {
        alert(result.error);
      }
    } else {
      this.$email.error = "";
      this.$password.error = "";
      setScreen("main");
    }
  }
}
customElements.define("login-screen", LoginScreen);
