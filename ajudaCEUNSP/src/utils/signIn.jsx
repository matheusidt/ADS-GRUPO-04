import * as firebaseAuth from "firebase/auth";
export const signIn = async (auth, email, password) => {
  await firebaseAuth
    .signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Usuario logado!!");
    })
    .catch((error) => {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Senha Incorreta!");
          break;
        case "auth/invalid-email":
          alert("Email Inválido!");
          ww;
          break;
        default:
          break;
      }
    });
};
