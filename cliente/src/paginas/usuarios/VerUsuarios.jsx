import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VerUsuarios() {
  const [usuarios, setUsuarios] = useState([{}]);
  async function cargarUsuarios() {
    const respuesta = await fetch("http://localhost:3000/usuarios");
    const datos = await respuesta.json();
    setUsuarios(datos);
  }

  function cargarTabla() {
    const filas = usuarios.map((usuario) => {
      return (
        <tr key={`${usuario._id}`}>
          <td>{usuario._id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.apellido}</td>
          <td>{usuario.email}</td>
          <td>
            <Link to={`/verunusuario/${usuario._id}`}>
              <button>Ver usuario </button>
            </Link>
          </td>
        </tr>
      );
    });
    return filas;
  }

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <>
      <h1>Ver usuarios!</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{cargarTabla()}</tbody>
      </table>
    </>
  );
}

export default VerUsuarios;
