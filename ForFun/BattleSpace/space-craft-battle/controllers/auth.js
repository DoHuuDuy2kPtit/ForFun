export const login = async (email, password) => {
  const error = { email: "", password: "" };
  // const user = firebase.auth().currentUser;
  // const email2 = user.email;
  if (!email || !validateEmail(email)) {
    error.email = "Not a valid email";
  }
  // if(email2.indexOf(email)){
  //   error.email = "email wrong"
  // }
  if (!password || password.length < 6) {
    error.password = "Not a valid password";
  }

  if (error.email || error.password) {
    return {
      hasError: true,
      error: error,
    };
  }

  let state = true;
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      state = false;
    });
  if (!state)
    return {
      hasError: true,
      error: "Email or password is wrong",
    };
  return {
    hasError: false,
  };
};

export const register = async (
  email,
  password,
  displayname,
  confirmpassword
) => {
  const error = {
    email: "",
    password: "",
    displayname: "",
    confirmpassword: "",
  };
  if (!email || !validateEmail(email)) {
    error.email = "not a valid email";
  }
  if (!displayname) {
    error.displayname = "empty display name";
  }
  if (!password || password.length < 6) {
    error.password = "not a valid password";
  }
  if (!confirmpassword || confirmpassword != password) {
    error.confirmpassword = "confirmpassword not matched";
  }
  if (
    error.email ||
    error.displayname ||
    error.password ||
    error.confirmpassword
  ) {
    return {
      hasError: true,
      error: error,
    };
  }

  try {
    const respond = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: displayname,
    });
    // firebase.auth().currentUser.sendEmailVerification();
    return {
      hasError: false,
    };
  } catch (err) {
    return {
      hasError: true,
      error: err,
    };
  }
};
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
