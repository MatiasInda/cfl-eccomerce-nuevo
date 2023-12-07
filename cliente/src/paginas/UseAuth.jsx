import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function useAuth() {
  const [usuarioLogeado, setUsuarioLogeado] = useState({
    logeado: false,
    usuario: {},
  });
  const [cargando, setCargando] = useState(true);

  async function fetchUsuarioLogueado() {
    const respuesta = await fetch(
      "http://localhost:3000/usuarios/usuario-logeado",
      {
        credentials: "include",
      }
    );
    const usuario = await respuesta.json();
    setUsuarioLogeado(usuario);
    setCargando(false);
  }
  useEffect(() => {
    fetchUsuarioLogueado();
  }, []);
  return { usuarioLogeado, setUsuarioLogeado, cargando };
}

const AuthProvider = ({ children }) => {
  const { usuarioLogeado, setUsuarioLogeado, cargando } = useAuth();
  if (cargando) {
    return <div>Cargando...</div>;
  }
  return (
    <AuthContext.Provider
      value={{ usuarioLogeado, setUsuarioLogeado, cargando }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
