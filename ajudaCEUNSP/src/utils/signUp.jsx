import * as firebaseAuth from "firebase/auth";
export const signUp = async (auth, email, password) => {
  await firebaseAuth
    .createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      console.log(data.user);
      w;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email já Cadastrado!");
          break;
        case "auth/invalid-email":
          alert("Email Inválido!");
          break;
        default:
          break;
      }
    });
};
