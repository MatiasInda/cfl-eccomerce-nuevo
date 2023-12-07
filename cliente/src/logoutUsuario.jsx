import { useEffect } from "react";
function LogoutUsuario({ setUsuarioLogeado }) {
  async function logoutUsuario() {
    fetch("http://localhost:3000/usuarios/logout", {
      credentials: "include",
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setUsuarioLogeado(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    logoutUsuario();
  }, []);
  return <h1>Sesión cerrada</h1>;
}

export default LogoutUsuario;
