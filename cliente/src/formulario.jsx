import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario({ setUsuarioLogeado }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  function manejarInput(evento) {
    setUsuario({ ...usuario, [evento.target.name]: evento.target.value });
  }

  function enviar() {
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        password: usuario.password,
      }),
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((usuario) => {
        setUsuarioLogeado(usuario);
        if (usuario.logeado) {
          navigate("/");
        }
      });
  }
  return (
    <div>
      {" "}
      <br />
      <ul>
        <li>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={usuario.nombre}
            onChange={manejarInput}
          />
        </li>
        <br />
        <li>
          <input
            name="apellido"
            type="text"
            placeholder="Apellido"
            value={usuario.apellido}
            onChange={manejarInput}
          />
        </li>
        <br />
        <li>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={usuario.email}
            onChange={manejarInput}
          />
        </li>
        <br />
        <li>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={usuario.password}
            onChange={manejarInput}
          />
        </li>
      </ul>
      <button style={{ backgroundColor: "#fff159" }} onClick={enviar}>
        Enviar
      </button>
    </div>
  );
}
export default Formulario;
