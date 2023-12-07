import { Form, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CrearCategoria() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function inputnombre(event) {
    setNombre(event.target.value);
  }
  function inputdescripcion(event) {
    setDescripcion(event.target.value);
  }
  const enviarFormulario = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        descripcion: descripcion,
      }),
      credentials: "include",
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        navigate("/VerCategorias");
      });
  };
  return (
    <div>
      <h1>Crear categoria</h1>
      <form>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={inputnombre}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={descripcion}
          onChange={inputdescripcion}
        />
        <button onClick={enviarFormulario}>Crear</button>
      </form>
    </div>
  );
}
export default CrearCategoria;
