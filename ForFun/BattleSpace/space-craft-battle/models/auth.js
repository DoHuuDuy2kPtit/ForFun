import { setScreen } from "../index.js";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    setScreen("main");
  } else {
    setScreen("login");
  }
});
