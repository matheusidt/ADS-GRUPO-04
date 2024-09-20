import * as firebaseAuth from "firebase/auth";
export const signUp = (auth, email, password) => {
  firebaseAuth
    .createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      switch (error) {
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
