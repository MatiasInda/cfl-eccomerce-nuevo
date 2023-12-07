import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VerCategorias() {
  const [categorias, setCategorias] = useState([{}]);
  async function cargarCategorias() {
    const respuesta = await fetch("http://localhost:3000/categorias");
    const datos = await respuesta.json();
    setCategorias(datos);
  }

  function cargarTabla() {
    const filas = categorias.map((categoria) => {
      return (
        <tr key={`${categoria._id}`}>
          <td>{categoria._id}</td>
          <td>{categoria.nombre}</td>
          <td>{categoria.descripcion}</td>
          <td>
            <Link to={`/verunacategoria/${categoria._id}`}>
              <button>Ver categoria </button>
            </Link>
          </td>
        </tr>
      );
    });
    return filas;
  }
  useEffect(() => {
    cargarCategorias();
  }, []);
  return (
    <>
      <h1>Ver categorias!</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>{cargarTabla()}</tbody>
      </table>
    </>
  );
}

export default VerCategorias;
