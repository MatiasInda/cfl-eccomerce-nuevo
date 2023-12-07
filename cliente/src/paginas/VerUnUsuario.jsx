import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function VerUnUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const { id } = useParams();

  async function cargarUsuario(id) {
    const respuesta = await fetch(`http://localhost:3000/usuarios/${id}`);
    const usuarioFetch = await respuesta.json();
    setUsuario(usuarioFetch);
  }
  useEffect(() => {
    cargarUsuario(id);
  }, []);
  return (
    <>
      <h1>Ver un usuario</h1>
      <h2>Nombre:{usuario.nombre}</h2>
      <h2>Apellido:{usuario.apellido}</h2>
      <h2>Email:{usuario.email}</h2>
    </>
  );
}

export default VerUnUsuario;
