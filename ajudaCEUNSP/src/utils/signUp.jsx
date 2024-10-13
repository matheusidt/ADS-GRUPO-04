import * as firebaseAuth from "firebase/auth";

// Função de cadastro com atributos adicionais
export const signUp = async (auth, email, password, displayName) => {
  await firebaseAuth
    .createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      const user = data.user;
      // Atualizando o perfil do usuário com nome e imagem de perfil
      firebaseAuth
        .updateProfile(user, {
          displayName: displayName,
        })
        .then(() => {
          // console.log("Perfil atualizado com sucesso!", user);
        })
        .catch((error) => {
          // console.error("Erro ao atualizar o perfil:", error);
        });
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
          alert("Erro desconhecido ao cadastrar o usuário.");
          break;
      }
    });
};
