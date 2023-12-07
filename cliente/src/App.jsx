import Navbar from "./componentes/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import VerUsuarios from "./paginas/usuarios/VerUsuarios";
import Formulario from "./formulario";
import VerUnUsuario from "./paginas/VerUnUsuario";
import Login from "./login";
import { useAuth } from "./paginas/UseAuth";
import LogoutUsuario from "./logoutUsuario";
import CrearCategoria from "./paginas/CrearCategoria";
import VerCategorias from "./paginas/VerCategorias";
// import { useState } from "react";

function App() {
  const { usuarioLogeado, setUsuarioLogeado } = useAuth();
  return (
    <>
      <Navbar usuarioLogeado={usuarioLogeado} />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/usuarios" element={<VerUsuarios />} />
        <Route
          path="/formulario"
          element={<Formulario setUsuarioLogeado={setUsuarioLogeado} />}
        />
        <Route path="/verunusuario/:id" element={<VerUnUsuario />} />
        <Route
          path="/login"
          element={<Login setUsuarioLogeado={setUsuarioLogeado} />}
        />
        <Route
          path="/logout"
          element={<LogoutUsuario setUsuarioLogeado={setUsuarioLogeado} />}
        />
        <Route path="/categorias" element={<CrearCategoria />}></Route>
        <Route path="/vercategorias" element={<VerCategorias />}></Route>
        <Route path="/CrearCategorias" element={<CrearCategoria />}></Route>
      </Routes>
    </>
  );
}

export default App;
