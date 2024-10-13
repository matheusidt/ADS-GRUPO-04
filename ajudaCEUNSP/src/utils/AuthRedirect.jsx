import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Assumindo que você está usando react-router
import { app } from "./fireBaseApp";

function AuthRedirect() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    // Monitorar mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Se o usuário está logado, redirecionar para a página desejada
        navigate("/login"); // Substitua "/dashboard" pela rota desejada
      }
    });

    // Limpar o monitoramento ao desmontar o componente
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div>
      {/* Conteúdo ou um loader enquanto verifica o estado de autenticação */}
    </div>
  );
}

export default AuthRedirect;
