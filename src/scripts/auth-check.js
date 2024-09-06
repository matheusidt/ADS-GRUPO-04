// // scripts/auth-check.js
// import { auth } from "./firebase-config.js";
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// // Verifica se o usuário está autenticado
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // Usuário está logado, continua na página ou redireciona para 'home'
//     if (
//       window.location.pathname === "/login.html" ||
//       window.location.pathname === "/cadastro.html"
//     ) {
//       window.location.href = "index.html"; // Redireciona para a página 'Home'
//     }
//   } else {
//     // Usuário não está logado, redireciona para a página de 'Login'
//     if (
//       window.location.pathname !== "/login.html" &&
//       window.location.pathname !== "/cadastro.html"
//     ) {
//       window.location.href = "login.html";
//     }
//   }
// });
