async function updateScore(score) {
  const user = firebase.auth().currentUser;
  // console.log(user.email);
  let state = false;
  if (user !== null) {
    await db
      .collection("score-board")
      .doc(user.email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log(doc.data());
          state = false;
        } else {
          state = true;
          // console.log(state);
        }
      });
    if (state) {
      const newScore = {
        id: user.email,
        score: [score],
        player: user.displayName,
        email: user.email,
      };
      db.collection("score-board").doc(user.email).set(newScore);
    } else {
      db.collection("score-board")
        .doc(user.email)
        .update({
          score: firebase.firestore.FieldValue.arrayUnion(score),
        });
    }
  }
  // if(user !== null) {
  //   const newScore = {
  //     id: user.email,
  //     score: score,
  //     player: user.displayName,
  //     email: user.email,
  //   };
  //   console.log(newScore);
  //   db.collection("score-board").doc(newScore.id).set(newScore);
  // }
}

export { updateScore };
