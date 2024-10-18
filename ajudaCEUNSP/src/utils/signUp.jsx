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
          alert("Usuário criado com sucesso!");
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
        case "auth/weak-password":
          alert("A senha é inválida, precisa ter pelo menos 6 caracteres.");
          break;
        default:
          alert("Erro desconhecido ao cadastrar o usuário.");
          break;
      }
    });
};
